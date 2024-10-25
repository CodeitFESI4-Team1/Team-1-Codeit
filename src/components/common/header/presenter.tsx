'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from '@mantine/core';

export interface HeaderPresenterProps {
  hasCookie: boolean;
  // profileImageUrl: string;
  handleLogout: () => void;
}

export default function HeaderPresenter({
  hasCookie,
  // profileImageUrl,
  handleLogout,
}: HeaderPresenterProps) {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-10 w-full bg-purple-400 px-6 py-4">
      <div className="mx-auto flex w-full max-w-screen-lg items-center justify-between">
        <div className="flex space-x-3 md:space-x-5 lg:space-x-5">
          <h1 className="font-bold text-white">LOGO</h1>
          <nav className="flex items-center space-x-3 md:space-x-6 lg:space-x-6">
            <Link
              href="/"
              className={`${pathname === '/' ? 'text-black' : 'text-white'} ml-4 font-bold`}
            >
              모임 찾기
            </Link>

            {hasCookie ? (
              <>
                <Link
                  href="/my-crew"
                  className={`${pathname === '/my-crew' ? 'text-black' : 'text-white'} ml-4 font-bold`}
                >
                  나의 크루
                </Link>
                <Link
                  href="/my-gathering"
                  className={`${pathname === '/my-gathering' ? 'text-black' : 'text-white'} ml-4 font-bold`}
                >
                  나의 모임
                </Link>
              </>
            ) : (
              <>
                <Link href="/login" className="ml-4 font-bold text-white">
                  나의 크루
                </Link>
                <Link href="/login" className="ml-4 font-bold text-white">
                  나의 모임
                </Link>
              </>
            )}
          </nav>
        </div>

        {hasCookie ? (
          <div className="relative">
            <Menu trigger="hover" openDelay={100} closeDelay={400}>
              <Menu.Target>
                <button type="button" className="flex items-center text-white">
                  {/* 프로필 이미지 컴포넌트 추후 추가 */}
                  프로필
                </button>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item component="a" href="/profile">
                  마이페이지
                </Menu.Item>
                <Menu.Item type="button" onClick={handleLogout} className="block">
                  로그아웃
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </div>
        ) : (
          <Link href="/login" className="font-bold text-white">
            로그인
          </Link>
        )}
      </div>
    </header>
  );
}
