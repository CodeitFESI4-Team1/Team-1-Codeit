import { useApiMutation } from '@/src/hooks/useApi';
import { ApiError } from '@/src/utils/api';
import { LoginFormValues } from '@/src/app/login/_component/login-form';

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
