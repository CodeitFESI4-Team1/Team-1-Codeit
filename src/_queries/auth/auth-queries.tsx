import { useMutation, useQueryClient } from '@tanstack/react-query';
import { getUser, loginUser, signupUser } from '@/src/_apis/auth/auth-apis';
import { useAuthStore } from '@/src/store/use-auth-store';
import { ApiError } from '@/src/utils/api';
import { transformKeysToCamel } from '@/src/utils/transform-keys';
import { LoginRequest, LoginResponse, SignupRequest, SignupResponse, User } from '@/src/types/auth';

export function usePostSignupQuery() {
  const queryClient = useQueryClient();
  const { login, setUser } = useAuthStore();

  return useMutation<{ data: SignupResponse }, ApiError, SignupRequest>({
    mutationFn: signupUser,
    onSuccess: async (response) => {
      const token = response.data.token?.replace(/^Bearer\s/, '');
      if (token) await login(token);

      const user: User = await queryClient.fetchQuery(getUserQuery());
      setUser(user);
    },
  });
}

export function usePostLoginQuery() {
  const queryClient = useQueryClient();
  const { login, setUser } = useAuthStore();

  return useMutation<{ data: LoginResponse }, ApiError, LoginRequest>({
    mutationFn: loginUser,
    onSuccess: async (response) => {
      const token = response.data.token?.replace(/^Bearer\s/, '');
      if (token) await login(token);

      const user: User = await queryClient.fetchQuery(getUserQuery());
      setUser(user);
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
