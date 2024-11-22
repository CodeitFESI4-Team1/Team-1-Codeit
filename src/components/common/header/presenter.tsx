'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from '@mantine/core';
import { Profile } from '@/src/components/common/profile';
import IcoLogo from '@/public/assets/images/logo-icon.svg';
import Logo from '@/public/assets/images/logo.svg';

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
    <header className="h-header w-full bg-blue-500 px-4 md:px-6">
      <div className="mx-auto flex h-full w-full max-w-[1200px] items-center justify-between">
        <div className="flex items-center gap-5 lg:ml-2">
          <Link href="/" className="it ems-center flex gap-2">
            <Image src={IcoLogo} alt="crew logo" aria-hidden width={32} height={32} className="" />
            <Image src={Logo} alt="crew logo" width={83} height={24} className="hidden md:block" />
          </Link>
          <nav className="flex items-center gap-3 text-base font-semibold md:gap-6 md:text-lg">
            <Link
              href="/"
              className={`${pathname === '/' ? 'text-white' : 'text-blue-300'} hidden text-base font-semibold md:block md:text-lg`}
            >
              크루 찾기
            </Link>
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={isAuth ? href : `/login?redirect=${href}`}
                className={`${
                  pathname.startsWith(href) ? 'text-white' : 'text-blue-300'
                } text-base font-semibold md:text-lg`}
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
    </header>
  );
}
