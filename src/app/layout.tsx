import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';
import ClientProvider from '@/src/components/client-provider';
import '@/src/styles/globals.css';
import { theme } from './theme';

export const metadata: Metadata = {
  title: 'CrewCrew',
  description: 'Generated by CODEIT TEAM1',
};

// Font files can be colocated inside of `app`
const pretendard = localFont({
  src: [
    {
      path: './fonts/pretendard/woff2/Pretendard-Black.woff2',
      weight: '900',
    },
    {
      path: './fonts/pretendard/woff/Pretendard-Black.woff',
      weight: '900',
    },
    {
      path: './fonts/pretendard/woff2/Pretendard-ExtraBold.woff2',
      weight: '800',
    },
    {
      path: './fonts/pretendard/woff/Pretendard-ExtraBold.woff',
      weight: '800',
    },
    {
      path: './fonts/pretendard/woff2/Pretendard-Bold.woff2',
      weight: '700',
    },
    {
      path: './fonts/pretendard/woff/Pretendard-Bold.woff',
      weight: '700',
    },
    {
      path: './fonts/pretendard/woff2/Pretendard-SemiBold.woff2',
      weight: '600',
    },
    {
      path: './fonts/pretendard/woff/Pretendard-SemiBold.woff',
      weight: '600',
    },
    {
      path: './fonts/pretendard/woff2/Pretendard-Medium.woff2',
      weight: '500',
    },
    {
      path: './fonts/pretendard/woff/Pretendard-Medium.woff',
      weight: '500',
    },
    {
      path: './fonts/pretendard/woff2/Pretendard-Regular.woff2',
      weight: '400',
    },
    {
      path: './fonts/pretendard/woff/Pretendard-Regular.woff',
      weight: '400',
    },
    {
      path: './fonts/pretendard/woff2/Pretendard-ExtraLight.woff2',
      weight: '300',
    },
    {
      path: './fonts/pretendard/woff/Pretendard-ExtraLight.woff',
      weight: '300',
    },
    {
      path: './fonts/pretendard/woff2/Pretendard-Thin.woff2',
      weight: '200',
    },
    {
      path: './fonts/pretendard/woff/Pretendard-Thin.woff',
      weight: '200',
    },
  ],
  variable: '--font-pretendard',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${pretendard.variable}`}>
      <head>
        <ColorSchemeScript />
      </head>
      <body className="font-pretendard">
        <ClientProvider>
          <MantineProvider theme={theme}>
            {/* 헤더 컴포넌트 위치 */}
            {/* <Header /> */}
            {children}
          </MantineProvider>
        </ClientProvider>
      </body>
    </html>
  );
}
