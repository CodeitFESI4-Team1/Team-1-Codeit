import { useGetUserQuery } from '@/src/_queries/auth/user-queries';
import { useAuthStore } from '@/src/store/use-auth-store';

export function useHandleAuthSuccess() {
  const { login } = useAuthStore();
  const { mutate: getUser } = useGetUserQuery();

  return async function handleAuthSuccess(token: string | null) {
    if (!token) {
      throw new Error('토큰이 없습니다');
    }

    try {
      const accessToken = token.replace(/^Bearer\s/, '');
      login(accessToken);
      getUser();
    } catch (error) {
      throw new Error('사용자 상태 업데이트 실패');
    }
  };
}
