'use client';

import { useState } from 'react';

import { PasswordInput } from '@mantine/core';

interface PasswordConfirmationInputProps {
  password: string;
}

export default function PasswordConfirmationInput({ password }: PasswordConfirmationInputProps) {
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const isPasswordConfirmationInvalid = () => {
    if (isTouched && password !== confirmPassword) {
      return true;
    }
    return false;
  };

  const handleBlur = () => {
    setIsTouched(true);
  };

  return (
    <div>
      <PasswordInput
        value={confirmPassword}
        onChange={(event) => setConfirmPassword(event.currentTarget.value)}
        onBlur={handleBlur}
        placeholder="비밀번호를 다시 입력해주세요"
        label="비밀번호 확인"
        labelProps={{ className: 'mb-2' }}
        error={isPasswordConfirmationInvalid() ? '비밀번호가 일치하지 않습니다.' : ''}
        errorProps={{ className: 'mt-2 text-sm' }}
        classNames={{
          input: `bg-gray-100 ${isPasswordConfirmationInvalid() ? 'border-2 border-red-500' : 'border-0'}`,
        }}
        radius="md"
        required
      />
    </div>
  );
}
