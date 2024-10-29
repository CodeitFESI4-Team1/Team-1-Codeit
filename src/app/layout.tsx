import type { Metadata } from 'next';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';
import ClientProvider from '@/src/components/common/client-provider';
import '@/src/styles/globals.css';
import { theme } from './theme';

export const metadata: Metadata = {
  title: 'CrewCrew',
  description: 'Generated by CODEIT TEAM1',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
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
