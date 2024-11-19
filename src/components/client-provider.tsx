'use client';

import { ReactNode, useState } from 'react';
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental';
import { reissue } from '../_apis/auth/reissue-apis';
import { useAuthStore } from '../store/use-auth-store';

export default function ClientProvider({ children }: { children: ReactNode }) {
  const setToken = useAuthStore((state) => state.setToken);

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
        // accessToken 에러 -> reissue() -> refetch()
        queryCache: new QueryCache({
          onError: async (error, query) => {
            if (error.message === '토큰이 올바르지 않습니다.') {
              const { token } = await reissue();
              if (token) setToken(token.replace(/^Bearer\s/, ''));
              await Promise.all([
                queryClient.refetchQueries({ queryKey: query.queryKey }),
                queryClient.refetchQueries({ queryKey: ['user'] }),
              ]);
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
