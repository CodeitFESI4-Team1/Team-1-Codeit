'use client';

import { useRouter } from 'next/navigation';
import { usePostLogoutQuery } from '@/src/_queries/auth/logout-queries';
import { useAuthStore } from '@/src/store/use-auth-store';
import HeaderPresenter from '@/src/components/common/header/presenter';

/**
 * Header 컴포넌트
 *
 * @param {boolean} isAuth - 로그인 여부를 나타내는 상태 (true: 로그인됨, false: 비로그인)
 * @param {function} handleLogout - 로그아웃을 처리하는 함수
 * @param {function} toggleCookie - 테스트용으로 쿠키 상태를 토글하는 함수 (컴포넌트 실험용)
 */

export default function Header() {
  const { mutate: postLogout } = usePostLogoutQuery();
  const { isAuth, logout } = useAuthStore();
  const router = useRouter();
  const handleLogout = () => {
    logout();
    postLogout();
    router.push('/');
  };

  return (
    <div>
      <HeaderPresenter isAuth={isAuth} handleLogout={handleLogout} />
    </div>
  );
}
