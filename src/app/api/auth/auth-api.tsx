import { useApiMutation } from '@/src/hooks/useApi';
import { LoginFormValues } from '@/src/app/login/_component/login-form';
import { ApiError } from '@/src/utils/api';

interface UseLoginAPIOptions {
  onSuccess: () => void;
  onError: (error: ApiError) => void;
}

export function usePostLoginAPI({ onSuccess, onError }: UseLoginAPIOptions) {
  return useApiMutation<void, LoginFormValues>('/login', 'POST', {
    onSuccess,
    onError,
  });
}
