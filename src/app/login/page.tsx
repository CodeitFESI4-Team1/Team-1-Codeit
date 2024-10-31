'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/src/store/use-auth-store';
import { ApiError } from '@/src/utils/api';
import { usePostLoginAPI } from '@/src/app/api/auth/auth-api';
import LoginForm, { LoginFormValues } from './_component/login-form';

export default function LoginPage() {
  const router = useRouter();
  const formMethods = useForm<LoginFormValues>();
  const { setError } = formMethods;
  const { login } = useAuthStore();

  const { mutate: postLogin } = usePostLoginAPI({
    onSuccess: () => {
      // TODO: 로그인 토큰 처리
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
    try {
      postLogin(data);
      // TODO: 로그인API, const token = await postLogin(data);
      const token = 'dummyToken123';
      // TODO: 유저API, const user = await getUser(id);
      const user = {
        id: 1,
        nickname: 'John Doe',
        email: 'john@example.com',
        profileImageUrl: 'https://imageUrl.com',
      };
      login(user, token);
      router.push('/');
    } catch {
      router.push('/login');
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '0 auto', padding: '2rem' }}>
      <LoginForm formMethods={formMethods} onSubmit={handleSubmit} />
    </div>
  );
}
