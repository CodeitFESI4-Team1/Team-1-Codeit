'use client';

import { ChangeEvent, useMemo } from 'react';
import { Loader, TextInput, TextInputProps } from '@mantine/core';
import { useInputState } from '@mantine/hooks';
import { useDebounce } from '@/src/hooks/useDebounce';
import { useValidateEmail } from '@/src/hooks/useValidateEmail';

export interface EmailInputProps extends Omit<TextInputProps, 'value'> {
  mode: 'sign-in' | 'sign-up';
  value?: string;
}

export default function EmailInput({
  value: valueProps,
  onChange: onChangeProps,
  mode,
  ...props
}: EmailInputProps) {
  const [innerValue, setInnerValue] = useInputState('');

  const value = useMemo(() => valueProps || innerValue, [valueProps, innerValue]);
  const { isValidating, isValid, validateEmail } = useValidateEmail();
  const { isDebouncing } = useDebounce(value, () => validateEmail(value));

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChangeProps) {
      onChangeProps(event);
    } else {
      setInnerValue(event.target.value);
    }

    if (isDebouncing) return;
    validateEmail(event.target.value);
  };

  const handleBlur = (event: ChangeEvent<HTMLInputElement>) => {
    if (isDebouncing || isValidating) return;
    validateEmail(event.target.value);
  };

  const errorMessage =
    mode === 'sign-in' ? '존재하지 않는 아이디입니다.' : '유효하지 않은 이메일입니다.';

  return (
    <TextInput
      {...props}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      labelProps={{ className: 'mb-2' }}
      error={!isValid ? errorMessage : ''}
      errorProps={{ className: 'mt-2 text-sm' }}
      classNames={{
        input: `bg-gray-100 ${!isValid ? 'border-2' : 'border-0'} `,
      }}
      radius="md"
      rightSection={isValidating ? <Loader size="1rem" /> : null}
    />
  );
}
