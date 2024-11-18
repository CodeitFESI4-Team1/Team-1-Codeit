import { useMutation } from '@tanstack/react-query';
import { login } from '@/src/_apis/auth/login-apis';
import { ApiError } from '@/src/utils/api';
import { LoginRequest, LoginResponse } from '@/src/types/auth';
import { useHandleAuthSuccess } from './use-handle-auth-success';

export function usePostLoginQuery() {
  const handleAuthSuccess = useHandleAuthSuccess();

  return useMutation<{ data: LoginResponse }, ApiError, LoginRequest>({
    mutationFn: login,
    onSuccess: async (response) => {
      await handleAuthSuccess(response.data.token);
    },
  });
}
