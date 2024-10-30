import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { Button } from '@mantine/core';
import { useDebouncedCallback } from '@mantine/hooks';
import { useApiMutation } from '@/src/hooks/useApi';
import PasswordInput from '@/src/components/common/input/password-input';
import TextInput from '@/src/components/common/input/text-input';
import { ApiError } from '@/src/utils/api';

interface LoginFormValues {
  email: string;
  password: string;
}
export default function LoginForm() {
  const {
    register,
    handleSubmit,
    trigger,
    setError,
    formState: { errors, isValid },
  } = useForm<LoginFormValues>({});

  const router = useRouter();

  const { mutate: loginAPI } = useApiMutation<void, LoginFormValues>('/login', 'POST', {
    onSuccess: () => {
      // TODO: 로그인처리, token
      router.push('/');
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

  const onSubmit = (data: LoginFormValues) => {
    loginAPI(data);
  };

  const debouncedTrigger = useDebouncedCallback(async (field: keyof LoginFormValues) => {
    await trigger(field);
  }, 1000);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        label="아이디"
        placeholder="이메일을 입력해주세요"
        register={{
          ...register('email', {
            required: '이메일을 입력해주세요',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: '이메일 형식으로 입력해주세요',
            },
            onBlur: () => trigger('email'),
            onChange: async () => debouncedTrigger('email'),
          }),
        }}
        error={errors.email?.message}
        inputClassNames="bg-gray-100"
      />

      <PasswordInput
        label="비밀번호"
        placeholder="비밀번호를 입력해주세요"
        register={{
          ...register('password', {
            required: '비밀번호를 입력해주세요',
            minLength: {
              value: 8,
              message: '비밀번호가 8자 이상이 되도록 해주세요.',
            },
            onBlur: () => trigger('password'),
            onChange: async () => debouncedTrigger('password'),
          }),
        }}
        error={errors.password?.message}
        className="mt-6"
        inputClassNames="bg-gray-100"
      />

      <div className="mt-10">
        {/* TODO: Button 바꾸기 */}
        <Button disabled={!isValid} type="submit" fullWidth>
          로그인
        </Button>
      </div>
    </form>
  );
}
