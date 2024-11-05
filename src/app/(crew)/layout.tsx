import '@mantine/core/styles.css';
import Header from '@/src/components/common/header/container';
import '@/src/styles/globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Header />
      <div className="container mx-auto flex flex-1 flex-col md:flex-row">
        <main className="flex-1 md:shadow-bg">{children}</main>
      </div>
    </div>
  );
}
