'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { usePostLoginQuery } from '@/src/_queries/auth/auth-queries';
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
          const { validationErrors } = error.detail;
          Object.keys(validationErrors).forEach((key) => {
            setError(key as 'email' | 'password', {
              type: 'manual',
              message: validationErrors[key],
            });
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
