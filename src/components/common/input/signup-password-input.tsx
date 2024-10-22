'use client';

import { PasswordInput } from '@mantine/core';
import { useInputState } from '@mantine/hooks';

const passwordInputConfig = {
  label: '비밀번호',
  placeholder: '비밀번호를 입력해주세요',
  requirement: { re: /.{8,}/, label: '비밀번호가 8자 이상이 되도록 입력해주세요.' },
};

export default function SignupPasswordInput() {
  const [value, setValue] = useInputState('');

  const isPasswordInvalid = (passwordInputValue: string) => {
    if (value.length > 0 && !passwordInputConfig.requirement.re.test(passwordInputValue)) {
      return true;
    }
    return false;
  };

  return (
    <div>
      <PasswordInput
        value={value}
        onChange={setValue}
        placeholder={passwordInputConfig.placeholder}
        label={passwordInputConfig.label}
        labelProps={{ className: 'mb-2' }}
        error={isPasswordInvalid(value) ? passwordInputConfig.requirement.label : ''}
        errorProps={{ className: 'mt-2 text-sm' }}
        classNames={{ input: `bg-gray-100 ${isPasswordInvalid(value) ? 'border-2' : 'border-0'} ` }}
        radius="md"
        required
      />
    </div>
  );
}
