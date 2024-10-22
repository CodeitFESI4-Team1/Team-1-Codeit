'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import HeaderPresenter from '@/src/components/common/header/presenter';

/**
 * Header 컴포넌트
 *
 * @param {boolean} hasCookie - 로그인 여부를 나타내는 상태 (true: 로그인됨, false: 비로그인)
 * @param {function} handleLogout - 로그아웃을 처리하는 함수
 * @param {function} toggleCookie - 테스트용으로 쿠키 상태를 토글하는 함수 (컴포넌트 실험용)
 */

export default function Header() {
  const [hasCookie, setHasCookie] = useState(false);

  const router = useRouter();

  const handleLogout = () => {
    setHasCookie(false);
    router.push('/');
  };

  // 테스트를 위한 쿠키 상태 토글
  const toggleCookie = () => {
    setHasCookie((prev) => !prev);
  };

  return (
    <div>
      <HeaderPresenter hasCookie={hasCookie} handleLogout={handleLogout} />

      {/* 쿠키 버튼 추가 */}
      {/* 추후 삭제 */}
      <button type="button" onClick={toggleCookie} className="mb-4 bg-blue-500 p-2 text-white">
        테스트용
      </button>
    </div>
  );
}
