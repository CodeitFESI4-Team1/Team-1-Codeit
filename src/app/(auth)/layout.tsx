import type { Metadata } from 'next';
import Image from 'next/image';
import '@mantine/core/styles.css';
import Header from '@/src/components/common/header/container';
import '@/src/styles/globals.css';
import Auth from '@/public/assets/images/auth.png';

export const metadata: Metadata = {
  title: 'CrewCrew',
  description: 'Generated by CODEIT TEAM1',
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col bg-gray-50">
      <Header />
      <div className="flex flex-1">
        <div className="hidden h-full items-center md:flex md:w-1/2">
          <Image src={Auth} alt="auth" />
        </div>
        <div className="flex h-full w-full flex-col items-center bg-white p-6 md:w-1/2 md:justify-center md:p-8 lg:p-20">
          <div className="text-xl font-semibold md:text-2xl lg:text-3xl">Welcome,</div>
          <div className="text-center text-xl font-semibold md:text-2xl lg:text-3xl">
            크루에 오신 것을 환영합니다 🙌
          </div>
          <div className="mt-4 text-center text-sm font-semibold lg:text-base">
            함께할 사람이없나요? 지금 크루에 참여해보세요
          </div>
          <div className="mt-6 w-full md:mt-12 md:w-2/3 lg:w-1/2">{children}</div>
        </div>
      </div>
    </div>
  );
}
