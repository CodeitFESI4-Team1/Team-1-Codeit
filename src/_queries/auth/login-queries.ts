import { useMutation } from '@tanstack/react-query';
import { login } from '@/src/_apis/auth/login-apis';
import { ApiError } from '@/src/utils/api';
import { useHandleAuthSuccess } from '@/src/utils/use-handle-auth-success';
import { LoginRequest, LoginResponse } from '@/src/types/auth';

export function usePostLoginQuery() {
  const handleAuthSuccess = useHandleAuthSuccess();

  return useMutation<{ data: LoginResponse }, ApiError, LoginRequest>({
    mutationFn: login,
    onSuccess: async (response) => {
      await handleAuthSuccess(response.data.token);
    },
  });
}
