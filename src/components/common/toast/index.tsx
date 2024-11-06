import React from 'react';
import { Bounce, ToastContainer, ToastOptions, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type ToastType = 'success' | 'error' | 'warning';

interface ToastProps {
  message: string;
  type: ToastType;
}

export default function Toast({ message, type }: ToastProps) {
  const options: ToastOptions = {
    position: 'bottom-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true,
    theme: 'light',
    // 테마 컬러로 변경하려면 theme을 colored로 변경
    transition: Bounce,
  };

  toast(message, { ...options, type });

  return <ToastContainer />;
}
