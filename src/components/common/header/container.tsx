'use client';

import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/src/store/use-auth-store';
import HeaderPresenter from '@/src/components/common/header/presenter';

/**
 * Header 컴포넌트
 *
 * @param {boolean} isAuth - 로그인 여부를 나타내는 상태 (true: 로그인됨, false: 비로그인)
 * @param {function} handleLogout - 로그아웃을 처리하는 함수
 */

export default function Header() {
  const { isAuth, user, logout } = useAuthStore(); // user 정보 가져오기

  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  return (
    <div>
      <HeaderPresenter
        isAuth={isAuth}
        handleLogout={handleLogout}
        profileImageUrl={user?.profileImageUrl}
      />
    </div>
  );
}
