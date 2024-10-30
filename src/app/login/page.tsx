'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { ApiError } from '@/src/utils/api';
import LoginForm, { LoginFormValues } from './_component/login-form';
import { usePostLoginAPI } from '@/src/app/api/auth/auth-api';

export default function LoginPage() {
  const router = useRouter();
  const formMethods = useForm<LoginFormValues>();
  const { setError } = formMethods;

  const { mutate } = usePostLoginAPI({
    onSuccess: () => {
      //TODO: 로그인 토큰 처리
      router.push('/'); // 로그인 성공 시 이동
    },
    onError: (error: ApiError) => {
      if (error.status === 404) {
        setError('email', {
          type: 'manual',
          message: '이메일 계정이 존재하지 않습니다',
        });
      } else if (error.status === 401) {
        setError('password', {
          type: 'manual',
          message: '잘못된 비밀번호입니다',
        });
      }
    },
  });

  const handleSubmit = async (data: LoginFormValues) => {
    mutate(data);
  };

  return (
    <div style={{ maxWidth: 400, margin: '0 auto', padding: '2rem' }}>
      <LoginForm formMethods={formMethods} onSubmit={handleSubmit} />
    </div>
  );
}