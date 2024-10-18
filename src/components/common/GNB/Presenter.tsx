'use client';

import Link from 'next/link';

interface GNBPresenterProps {
  hasCookie: boolean;
  // profileImageUrl: string;
  handleLogout: () => void;
  handleDropdown: () => void;
  isDropdownOpen: boolean;
}

export default function GNBPresenter({
  hasCookie,
  // profileImageUrl,
  handleLogout,
  handleDropdown,
  isDropdownOpen,
}: GNBPresenterProps) {
  return (
    <nav className="flex items-center justify-between px-4 py-2">
      <Link href="/" className="flex items-center">
        크루크루
      </Link>
      <ul className="flex items-center">
        <li>
          <Link href="/">모임 찾기</Link>
        </li>
        <li>
          {hasCookie ? <Link href="/likes">찜한 모임</Link> : <Link href="/login">찜한 모임</Link>}
        </li>
        {hasCookie ? (
          <li className="relative">
            <button type="button" onClick={handleDropdown}>
              {/* profileImageUrl 컴포넌트 추후 추가 */}
              프로필이미지
            </button>
            {isDropdownOpen && (
              <div className="absolute bg-white">
                <Link href="/profile" className="block" onClick={handleDropdown}>
                  마이페이지
                </Link>
                <button type="button" onClick={handleLogout} className="block">
                  로그아웃
                </button>
              </div>
            )}
          </li>
        ) : (
          <li>
            <Link href="/login">로그인</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
