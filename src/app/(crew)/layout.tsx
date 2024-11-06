import '@mantine/core/styles.css';
import Header from '@/src/components/common/header/container';
import '@/src/styles/globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <div className="flex min-h-screen flex-col items-center bg-gray-50">
        <main className="container flex flex-1 min-h-screen max-w-pc flex-col md:shadow-bg">
          {children}
        </main>
      </div>
    </>
  );
}
