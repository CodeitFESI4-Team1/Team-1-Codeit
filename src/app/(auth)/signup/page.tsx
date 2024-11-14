'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { usePostSignupQuery } from '@/src/_queries/auth/signup-queries';
import SignupForm, { SignupFormValues } from './_component/signup-form';

export default function LoginPage() {
  const router = useRouter();
  const formMethods = useForm<SignupFormValues>();
  const { setError } = formMethods;
  const { mutate: postSignup } = usePostSignupQuery();

  const handleSubmit = async (data: SignupFormValues) => {
    const { confirmPassword, ...requestData } = data;

    postSignup(requestData, {
      onSuccess: () => {
        router.push('/');
      },
      onError: (error) => {
        if (error.status === 400) {
          const { validationErrors } = error.detail;
          Object.keys(validationErrors).forEach((key) => {
            setError(key as 'email', {
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
      <SignupForm formMethods={formMethods} onSubmit={handleSubmit} />
      <div className="mt-6 flex justify-center space-x-1 text-sm font-medium">
        <div>이미 회원이신가요?</div>
        <Link href="/login" className="text-blue-500 underline">
          로그인
        </Link>
      </div>
    </div>
  );
}
