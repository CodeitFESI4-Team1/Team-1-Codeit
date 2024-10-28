import React, { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@mantine/core';
import { useDebouncedCallback } from '@mantine/hooks';
import PasswordInput from '@/src/components/common/input/password-input';
import TextInput from '@/src/components/common/input/text-input';

interface LoginFormValues {
  email: string;
  password: string;
}
export default function LoginForm() {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isValid },
  } = useForm<LoginFormValues>({});

  const onSubmit = (data: LoginFormValues) => {
    if (isValid) {
      console.log('call api');
    }
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
        <Button disabled={!isValid} type="submit" fullWidth>
          로그인
        </Button>
      </div>
    </form>
  );
}
