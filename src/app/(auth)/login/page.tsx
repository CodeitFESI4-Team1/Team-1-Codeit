'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { usePostLoginQuery } from '@/src/_queries/auth/login-queries';
import LoginForm, { LoginFormValues } from './_component/login-form';

export default function LoginPage() {
  const router = useRouter();
  const formMethods = useForm<LoginFormValues>();
  const { setError } = formMethods;
  const { mutate: postLogin } = usePostLoginQuery();

  const handleSubmit = async (data: LoginFormValues) => {
    postLogin(data, {
      onSuccess: () => {
        router.push('/');
      },
      onError: (error) => {
        if (error.status === 401) {
          setError('email', {
            type: 'manual',
            message: '이메일 또는 비밀번호가 일치하지 않습니다.',
          });
          setError('password', {
            type: 'manual',
            message: '이메일 또는 비밀번호가 일치하지 않습니다.',
          });
        }
      },
    });
  };

  return (
    <div>
      <LoginForm formMethods={formMethods} onSubmit={handleSubmit} />
      <div className="mt-6 flex justify-center space-x-1 text-sm font-medium">
        <div>크루가 처음이신가요?</div>
        <Link href="/signup" className="text-blue-500 underline">
          회원가입
        </Link>
      </div>
    </div>
  );
}
