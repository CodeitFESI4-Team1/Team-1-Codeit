import type { Metadata } from 'next';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import ClientProvider from '@/src/components/client-provider';
import { pretendard } from '@/src/fonts/pretendard/pretendard';
import '@/src/styles/globals.css';
import { theme } from '@/src/styles/theme';

export const metadata: Metadata = {
  title: 'CrewCrew',
  description: '내 크루와 함께 약속하고 만나는 운동 소모임 웹사이트',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={pretendard.variable}>
      <head>
        <meta property="og:image" content="/assets/images/og.png" />
        <meta property="og:title" content="CrewCrew" />
        <meta
          property="og:description"
          content="내 크루와 함께 약속하고 만나는 운동 소모임 웹사이트"
        />
        <meta property="og:url" content="https://crewcrew.vercel.app" />
        <ColorSchemeScript />
      </head>
      <body>
        <ClientProvider>
          <MantineProvider theme={theme}>
            {children}
            <SpeedInsights />
          </MantineProvider>
        </ClientProvider>
      </body>
    </html>
  );
}
