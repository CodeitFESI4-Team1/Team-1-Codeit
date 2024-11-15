import { Bounce, ToastContainer } from 'react-toastify';
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
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <div className="flex min-h-screen flex-col items-center bg-gray-50">
        <main className="container flex min-h-screen max-w-pc flex-1 flex-col md:shadow-bg">
          {children}
        </main>
      </div>
    </>
  );
}
