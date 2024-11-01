import { ApiError } from 'next/dist/server/api-utils';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { getUser, loginUser } from '@/src/_apis/auth/auth-apis';
import { useAuthStore } from '@/src/store/use-auth-store';
import { transformKeysToCamel } from '@/src/utils/transform-keys';
import { LoginRequest, LoginResponse, User } from '@/src/types/auth';

export function usePostLoginQuery() {
  const queryClient = useQueryClient();

  const { login } = useAuthStore();

  return useMutation<{ data: LoginResponse }, ApiError, LoginRequest>({
    mutationFn: loginUser,
    onSuccess: async (response) => {
      // TODO: token값으로 수정, const { token } = response.data;
      const token = 'dummyToken123';
      const user: User = await queryClient.fetchQuery(getUserQuery());
      login(user, token);
    },
  });
}

export function getUserQuery() {
  return {
    queryKey: ['user'],
    queryFn: getUser,
    select: (data: User) => transformKeysToCamel(data),
  };
}
