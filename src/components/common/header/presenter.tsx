'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from '@mantine/core';
import { Profile } from '@/src/components/common/profile';
import Logo from '@/public/assets/images/logo.png';

export interface HeaderPresenterProps {
  isAuth: boolean;
  profileImageUrl?: string;
  handleLogout: () => void;
}

const links = [
  { href: '/my-crew', label: '나의 크루' },
  { href: '/my-gathering', label: '나의 약속' },
  { href: '/my-favorite', label: '찜한 약속' },
];

export default function HeaderPresenter({
  isAuth,
  profileImageUrl,
  handleLogout,
}: HeaderPresenterProps) {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-10 h-10 w-full bg-blue-500 px-6 md:h-13">
      <div className="mx-auto flex h-full w-full max-w-[1200px] items-center justify-between">
        <div className="flex space-x-2 md:space-x-5 lg:ml-2 lg:space-x-5">
          <Link href="/" className="mt-1">
            <Image src={Logo} alt="crew logo" width={83} height={30} className="hidden md:block" />
            <Image src={Logo} alt="crew logo" width={53} height={28} className="block md:hidden" />
          </Link>
          <nav className="flex items-center space-x-2 text-base font-semibold md:space-x-6 md:text-lg lg:space-x-6">
            <Link
              href="/"
              className={`${pathname === '/' ? 'text-white' : 'text-blue-300'} ml-4 hidden md:block`}
            >
              크루 찾기
            </Link>
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={isAuth ? href : '/login'}
                className={`${pathname.startsWith(href) ? 'text-white' : 'text-blue-300'} ml-4`}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {isAuth ? (
          <div className="relative">
            <Menu trigger="hover" openDelay={100} closeDelay={400}>
              <Menu.Target>
                <div className="mt-[6px]">
                  <Profile imageUrl={profileImageUrl} size="header" />
                </div>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item component="a" href="/my-page">
                  마이페이지
                </Menu.Item>
                <Menu.Item type="button" onClick={handleLogout} className="block">
                  로그아웃
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </div>
        ) : (
          <Link href="/login" className="text-sm font-semibold text-white md:text-lg">
            로그인
          </Link>
        )}
      </div>
      {/* </div> */}
    </header>
  );
}
