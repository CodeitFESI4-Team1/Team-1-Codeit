'use client';

import { ReactNode, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental';
import { reissue } from '../_apis/auth/reissue-apis';
import { useAuthStore } from '../store/use-auth-store';
import { ApiError } from '../utils/api';

export default function ClientProvider({ children }: { children: ReactNode }) {
  const setToken = useAuthStore((state) => state.setToken);
  const redirect = usePathname();
  const router = useRouter();

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // 서버 렌더링 시 데이터를 새로 고침하지 않도록 설정
            staleTime: 60 * 1000, // 1분 동안 데이터 유지
            retry: (failureCount, error) => {
              if (error.message === '토큰이 올바르지 않습니다.') {
                return false;
              }
              return failureCount <= 1;
            },
          },
        },
        queryCache: new QueryCache({
          onError: async (error, query) => {
            const apiError = error as ApiError;
            if (apiError.status === 401) {
              try {
                const { token } = await reissue();
                if (token) {
                  setToken(token.replace(/^Bearer\s/, ''));
                  await Promise.all([
                    queryClient.refetchQueries({ queryKey: query.queryKey }),
                    queryClient.refetchQueries({ queryKey: ['user'] }),
                  ]);
                }
              } catch {
                router.push(`/login?redirect=${redirect}`);
              }
            }
          },
        }),
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      {process.env.NODE_ENV === 'development' && <ReactQueryDevtools initialIsOpen={false} />}
      <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
    </QueryClientProvider>
  );
}
