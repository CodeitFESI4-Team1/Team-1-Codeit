import { useRouter } from 'next/navigation';
import { useQueryClient } from '@tanstack/react-query';
import { usePostLogoutQuery } from '../_queries/auth/logout-queries';
import { useAuthStore } from '../store/use-auth-store';

export function useLogout() {
  const { mutate: postLogout } = usePostLogoutQuery();
  const clearToken = useAuthStore((state) => state.clearToken);
  const queryClient = useQueryClient();

  const router = useRouter();

  return {
    handleLogout: () => {
      postLogout(undefined, {
        onSuccess: () => {
          router.push('/');
          clearToken();
          queryClient.removeQueries({ queryKey: ['user'] });
        },
      });
    },
  };
}
