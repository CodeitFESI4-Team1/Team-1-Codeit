'use client';

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { usePostSignupQuery } from '@/src/_queries/auth/signup-queries';
import SignupForm, { SignupFormValues } from './_components/signup-form';

export default function LoginPage() {
  const [redirect, setRedirect] = useState('/');
  const searchParams = useSearchParams();
  const router = useRouter();
  const formMethods = useForm<SignupFormValues>();
  const { setError } = formMethods;
  const { mutate: postSignup } = usePostSignupQuery();

  useEffect(() => {
    const redirectParam = searchParams.get('redirect');
    if (redirectParam) setRedirect(redirectParam);
  }, [searchParams]);

  const handleSubmit = async (data: SignupFormValues) => {
    const { confirmPassword, ...requestData } = data;

    postSignup(requestData, {
      onSuccess: () => {
        router.push(redirect);
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
        <Link
          href={redirect !== '/' ? `/login?redirect=${redirect}` : '/login'}
          className="text-blue-500 underline"
        >
          로그인
        </Link>
      </div>
    </div>
  );
}
