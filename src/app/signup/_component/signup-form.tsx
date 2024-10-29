import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@mantine/core';
import { useDebouncedCallback } from '@mantine/hooks';
import PasswordInput from '@/src/components/common/input/password-input';
import TextInput from '@/src/components/common/input/text-input';

interface SignupFormValues {
  nickname: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isValid },
    watch,
  } = useForm<SignupFormValues>({});

  const onSubmit = (data: SignupFormValues) => {};

  const debouncedTrigger = useDebouncedCallback(async (field: keyof SignupFormValues) => {
    await trigger(field);
  }, 1000);

  const password = watch('password');

  useEffect(() => {
    if (password) {
      trigger('confirmPassword');
    }
  }, [password, trigger]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        label="닉네임"
        placeholder="닉네임을 입력해주세요"
        register={{
          ...register('nickname', {
            required: '닉네임을 입력해주세요',
            onBlur: () => trigger('nickname'),
            onChange: async () => debouncedTrigger('nickname'),
          }),
        }}
        error={errors.nickname?.message}
        inputClassNames="bg-gray-50"
      />

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
        className="mt-6"
        inputClassNames="bg-gray-50"
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
        inputClassNames="bg-gray-50"
      />

      <PasswordInput
        label="비밀번호 확인"
        placeholder="비밀번호를 다시 입력해주세요"
        register={{
          ...register('confirmPassword', {
            required: '비밀번호를 다시 입력해주세요',
            validate: (value) => value === password || '비밀번호가 일치하지 않습니다.',
            onBlur: () => trigger('confirmPassword'),
            onChange: async () => debouncedTrigger('confirmPassword'),
          }),
        }}
        error={errors.confirmPassword?.message}
        className="mt-6"
        inputClassNames="bg-gray-50"
      />

      <div className="mt-10">
        <Button disabled={!isValid} type="submit" fullWidth>
          회원가입
        </Button>
      </div>
    </form>
  );
}
