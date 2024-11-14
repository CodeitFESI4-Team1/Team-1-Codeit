import { useQueryClient } from '@tanstack/react-query';
import { useAuthStore } from '@/src/store/use-auth-store';
import { User } from '@/src/types/auth';
import { getUserQuery } from './user-apis';

export function useHandleAuthSuccess() {
  const queryClient = useQueryClient();
  const { login, setUser } = useAuthStore();

  return async function handleAuthSuccess(token: string | null, refreshToken: string | null) {
    if (!token || !refreshToken) {
      throw new Error('토큰이 없습니다');
    }

    try {
      const accessToken = token.replace(/^Bearer\s/, '');
      login(accessToken, refreshToken);
      const user: User = await queryClient.fetchQuery(getUserQuery());
      setUser(user);
    } catch (error) {
      throw new Error('사용자 상태 업데이트 실패');
    }
  };
}
