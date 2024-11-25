import 'react-toastify/dist/ReactToastify.css';
import '@mantine/core/styles.css';
import Header from '@/src/components/common/header/container';
import '@/src/styles/globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex min-h-[calc(100vh-50px)] flex-col items-center bg-gray-50">
        <main className="container flex max-w-pc flex-1 flex-col md:shadow-bg">{children}</main>
      </div>
    </div>
  );
}
