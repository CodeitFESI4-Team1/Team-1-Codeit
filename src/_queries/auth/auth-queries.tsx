import { ApiError } from 'next/dist/server/api-utils';
import { useMutation } from '@tanstack/react-query';
import { loginUser } from '@/src/_apis/auth/auth-apis';
import { useAuthStore } from '@/src/store/use-auth-store';
import { LoginRequest, LoginResponse } from '@/src/types/\bauth';

export function usePostLoginQuery() {
  const { login } = useAuthStore();

  return useMutation<{ data: LoginResponse }, ApiError, LoginRequest>({
    mutationFn: loginUser,
    onSuccess: (response) => {
      // TODO: token값으로 수정, const { token } = response.data;
      const token = 'dummyToken123';
      // TODO: 실제 user값으로 수정, const user: User = await getUser();
      const user = {
        id: 1,
        nickname: '크루크루',
        email: 'john@example.com',
        profileImageUrl: 'https://image.file',
      };
      login(user, token);
    },
  });
}
