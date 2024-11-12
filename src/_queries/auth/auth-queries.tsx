import { useMutation, useQueryClient } from '@tanstack/react-query';
import { getUser, loginUser, signupUser } from '@/src/_apis/auth/auth-apis';
import { useAuthStore } from '@/src/store/use-auth-store';
import { ApiError } from '@/src/utils/api';
import { transformKeysToCamel } from '@/src/utils/transform-keys';
import { LoginRequest, LoginResponse, SignupRequest, SignupResponse, User } from '@/src/types/auth';

export function usePostSignupQuery() {
  const handleAuthSuccess = useHandleAuthSuccess();

  return useMutation<{ data: SignupResponse }, ApiError, SignupRequest>({
    mutationFn: signupUser,
    onSuccess: async (response) => {
      await handleAuthSuccess(response.data.token);
    },
  });
}

export function usePostLoginQuery() {
  const handleAuthSuccess = useHandleAuthSuccess();

  return useMutation<{ data: LoginResponse }, ApiError, LoginRequest>({
    mutationFn: loginUser,
    onSuccess: async (response) => {
      await handleAuthSuccess(response.data.token);
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

function useHandleAuthSuccess() {
  const queryClient = useQueryClient();
  const { login, setUser } = useAuthStore();

  return async function handleAuthSuccess(token: string | null) {
    if (!token) {
      throw new Error('토큰이 없습니다');
    }

    try {
      const accessToken = token.replace(/^Bearer\s/, '');
      login(accessToken);
      const user: User = await queryClient.fetchQuery(getUserQuery());
      setUser(user);
    } catch (error) {
      throw new Error('사용자 상태 업데이트 실패');
    }
  };
}
