import { useQuery } from '@tanstack/react-query';
import { getUser } from '@/src/_apis/auth/user-apis';
import { authStore } from '@/src/store/use-auth-store';

export function useUser() {
  const token = authStore.getState().token;
  return useQuery({
    queryKey: ['user'],
    queryFn: getUser,
    enabled: !!token,
  });
}
