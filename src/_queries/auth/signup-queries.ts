import { useMutation } from '@tanstack/react-query';
import { signup } from '@/src/_apis/auth/signup-apis';
import { useHandleAuthSuccess } from '@/src/hooks/use-handle-auth-success';
import { ApiError } from '@/src/utils/api';
import { SignupRequest, SignupResponse } from '@/src/types/auth';

export function usePostSignupQuery() {
  const handleAuthSuccess = useHandleAuthSuccess();

  return useMutation<{ data: SignupResponse }, ApiError, SignupRequest>({
    mutationFn: signup,
    onSuccess: async (response) => {
      await handleAuthSuccess(response.data.token);
    },
  });
}
