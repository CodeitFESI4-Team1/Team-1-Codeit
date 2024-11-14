import { useMutation } from '@tanstack/react-query';
import { signup } from '@/src/_apis/auth/signup-apis';
import { ApiError } from '@/src/utils/api';
import { SignupRequest, SignupResponse } from '@/src/types/auth';
import { useHandleAuthSuccess } from './use-handle-auth-success';

export function usePostSignupQuery() {
  const handleAuthSuccess = useHandleAuthSuccess();

  return useMutation<SignupResponse, ApiError, SignupRequest>({
    mutationFn: signup,
    onSuccess: async (response) => {
      await handleAuthSuccess(response.token, response.refreshToken);
    },
  });
}
