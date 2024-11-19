import { useMutation } from '@tanstack/react-query';
import { reissue } from '@/src/_apis/auth/reissue-apis';
import { useHandleAuthSuccess } from '@/src/hooks/use-handle-auth-success';
import { ApiError } from '@/src/utils/api';

export function usePostReissueQuery() {
  const handleAuthSuccess = useHandleAuthSuccess();

  return useMutation<{ token: string | null }, ApiError>({
    mutationFn: reissue,
    onSuccess: async (response) => {
      await handleAuthSuccess(response.token);
    },
  });
}
