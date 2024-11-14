import { useMutation } from '@tanstack/react-query';
import { logout } from '@/src/_apis/auth/logout-apis';
import { ApiError } from '@/src/utils/api';
import { LogoutRequest } from '@/src/types/auth';

export function usePostLogoutQuery() {
  return useMutation<void, ApiError, LogoutRequest>({
    mutationFn: logout,
  });
}
