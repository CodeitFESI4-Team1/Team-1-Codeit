'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { usePostSignupQuery } from '@/src/_queries/auth/auth-queries';
import SignupForm, { SignupFormValues } from './_component/signup-form';

export default function LoginPage() {
  const router = useRouter();
  const formMethods = useForm<SignupFormValues>();
  const { setError } = formMethods;
  const { mutate: postSignup } = usePostSignupQuery();

  const handleSubmit = async (data: SignupFormValues) => {
    postSignup(data, {
      onSuccess: () => {
        router.push('/');
      },
      onError: (error) => {
        if (error.statusCode === 400) {
          // TODO: parameter 처리 후 message 처리 확인
          //   const { parameter } = error.parameter;
          //   setError(parameter, {
          //     type: 'manual',
          //     message: error.message,
          //   });
        }
      },
    });
  };

  return <SignupForm formMethods={formMethods} onSubmit={handleSubmit} />;
}
