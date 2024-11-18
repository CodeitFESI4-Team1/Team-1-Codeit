import { useMutation } from '@tanstack/react-query';
import { reissue } from '@/src/_apis/auth/reissue-apis';
import { ApiError } from '@/src/utils/api';
import { useHandleAuthSuccess } from '@/src/utils/use-handle-auth-success';

export function usePostReissueQuery() {
  const handleAuthSuccess = useHandleAuthSuccess();

  return useMutation<{ token: string | null }, ApiError>({
    mutationFn: reissue,
    onSuccess: async (response) => {
      await handleAuthSuccess(response.token);
    },
  });
}
