import React, { useEffect } from 'react';
import { UseFormReturn, useWatch } from 'react-hook-form';
import { useDebouncedValue } from '@mantine/hooks';
import Button from '@/src/components/common/button';
import PasswordInput from '@/src/components/common/input/password-input';
import TextInput from '@/src/components/common/input/text-input';

export interface SignupFormValues {
  nickname: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface SignupFormProps {
  onSubmit: (data: SignupFormValues) => void;
  formMethods: UseFormReturn<SignupFormValues>;
}

export default function SignupForm({ formMethods, onSubmit }: SignupFormProps) {
  const {
    register,
    handleSubmit,
    trigger,
    control,
    formState: { errors, isValid },
  } = formMethods;

  const [nickname, email, password, confirmPassword] = useWatch({
    control,
    name: ['nickname', 'email', 'password', 'confirmPassword'],
  });

  const [debouncedNickname, cancelDebouncedNickname] = useDebouncedValue(nickname, 1000);
  const [debouncedEmail, cancelDebouncedEmail] = useDebouncedValue(email, 1000);
  const [debouncedPassword, cancelDebouncedPassword] = useDebouncedValue(password, 1000);
  const [debouncedConfirmPassword, cancelDebouncedConfirmPassword] = useDebouncedValue(
    confirmPassword,
    1000,
  );

  useEffect(() => {
    if (debouncedNickname) trigger('nickname');
  }, [nickname, trigger]);

  useEffect(() => {
    if (debouncedEmail) trigger('email');
  }, [email, trigger]);

  useEffect(() => {
    if (debouncedPassword) {
      trigger('password');
      trigger('confirmPassword');
    }
  }, [password, trigger]);

  useEffect(() => {
    if (debouncedConfirmPassword) trigger('confirmPassword');
  }, [confirmPassword, trigger]);

  const handleFormSubmit = handleSubmit(async (data) => {
    onSubmit(data);
    cancelDebouncedNickname();
    cancelDebouncedEmail();
    cancelDebouncedPassword();
    cancelDebouncedConfirmPassword();
  });

  return (
    <form onSubmit={handleFormSubmit}>
      <TextInput
        label="닉네임"
        placeholder="닉네임을 입력해주세요"
        register={{
          ...register('nickname', {
            required: '닉네임을 입력해주세요',
            onBlur: () => trigger('nickname'),
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
          }),
        }}
        error={errors.confirmPassword?.message}
        className="mt-6"
        inputClassNames="bg-gray-50"
      />

      <div className="mt-10">
        <Button
          disabled={!isValid}
          type="submit"
          className={`w-full font-semibold ${isValid ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-300'}`}
        >
          회원가입
        </Button>
      </div>
    </form>
  );
}
