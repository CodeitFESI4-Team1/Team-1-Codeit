'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { usePostLoginQuery } from '@/src/_queries/auth/auth-queries';
import SignupForm, { SignupFormValues } from './_component/signup-form';

export default function LoginPage() {
  const router = useRouter();
  const formMethods = useForm<SignupFormValues>();
  const { setError } = formMethods;
  const { mutate: postLogin } = usePostLoginQuery();

  const handleSubmit = async (data: SignupFormValues) => {
    postLogin(data, {
      onSuccess: () => {
        // router.push('/login');
      },
      onError: (error) => {},
    });
  };

  return <SignupForm formMethods={formMethods} onSubmit={handleSubmit} />;
}
