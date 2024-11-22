import { useQuery } from '@tanstack/react-query';
import { getUser } from '@/src/_apis/auth/user-apis';
import { useAuthStore } from '@/src/store/use-auth-store';

export function useUser() {
  const token = useAuthStore((state) => state.token);
  return useQuery({
    queryKey: ['user'],
    queryFn: getUser,
    enabled: !!token,
  });
}
