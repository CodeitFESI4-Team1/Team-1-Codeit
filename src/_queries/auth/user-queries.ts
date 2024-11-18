import { ApiError } from 'next/dist/server/api-utils';
import { useMutation } from '@tanstack/react-query';
import { getUser } from '@/src/_apis/auth/user-apis';
import { useAuthStore } from '@/src/store/use-auth-store';
import { User } from '@/src/types/auth';

export function useGetUserQuery() {
  const { setUser } = useAuthStore();

  return useMutation<{ data: User }, ApiError>({
    mutationFn: getUser,
    onSuccess: async (response) => {
      setUser(response.data);
    },
  });
}
