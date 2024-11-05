import type { Metadata } from 'next';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import ClientProvider from '@/src/components/client-provider';
import { pretendard } from '@/src/fonts/pretendard/pretendard';
import '@/src/styles/globals.css';
import { theme } from '@/src/styles/theme';

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
    <html lang="en" className={pretendard.variable}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <ClientProvider>
          <MantineProvider theme={theme}>{children}</MantineProvider>
        </ClientProvider>
      </body>
    </html>
  );
}
