'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Menu } from '@mantine/core';

interface GNBPresenterProps {
  hasCookie: boolean;
  // profileImageUrl: string;
  handleLogout: () => void;
}

export default function GNBPresenter({
  hasCookie,
  // profileImageUrl,
  handleLogout,
}: GNBPresenterProps) {
  const pathname = usePathname();
  return (
    <nav className="w-full bg-purple-400 px-6 py-4">
      <div className="mx-auto flex w-full max-w-screen-lg items-center justify-between">
        <div className="flex space-x-3 md:space-x-5 lg:space-x-5">
          <span className="font-bold text-white">LOGO</span>
          <div className="flex items-center space-x-3 md:space-x-6 lg:space-x-6">
            <Link
              href="/"
              className={`${pathname === '/' ? 'text-black' : 'text-white'} ml-4 font-bold`}
            >
              모임 찾기
            </Link>
            {hasCookie ? (
              <Link
                href="/likes"
                className={`${pathname === '/likes' ? 'text-black' : 'text-white'} ml-4 font-bold`}
              >
                찜한 모임
              </Link>
            ) : (
              <Link href="/login" className="ml-4 font-bold text-white">
                찜한 모임
              </Link>
            )}
          </div>
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
    </nav>
  );
}
