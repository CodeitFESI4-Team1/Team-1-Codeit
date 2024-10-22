'use client';

import { useState } from 'react';

import { PasswordInput } from '@mantine/core';
import { useInputState } from '@mantine/hooks';

const passwordInputConfig = {
  label: '비밀번호',
  placeholder: '비밀번호를 입력해주세요',
  requirement: { re: /.{8,}/.source, errorMessage: '비밀번호가 8자 이상이 되도록 입력해주세요.' },
};

export default function SignupPasswordInput() {
  const [value, setValue] = useInputState('');
  const [isTouched, setIsTouched] = useState(false);
  const regex = new RegExp(passwordInputConfig.requirement.re);

  const isPasswordInvalid = (passwordInputValue: string) => {
    if (isTouched && !regex.test(passwordInputValue)) {
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
        value={value}
        onChange={setValue}
        onBlur={handleBlur}
        placeholder={passwordInputConfig.placeholder}
        label={passwordInputConfig.label}
        labelProps={{ className: 'mb-2' }}
        error={isPasswordInvalid(value) ? passwordInputConfig.requirement.errorMessage : ''}
        errorProps={{ className: 'mt-2 text-sm' }}
        classNames={{ input: `bg-gray-100 ${isPasswordInvalid(value) ? 'border-2' : 'border-0'} ` }}
        radius="md"
        required
      />
    </div>
  );
}
