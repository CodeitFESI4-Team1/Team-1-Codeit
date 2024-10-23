'use client';

import { useState } from 'react';
import { TextInput } from '@mantine/core';
import { useInputState } from '@mantine/hooks';

export interface InputProps {
  type: string;
  label: string;
  placeholder: string;
  requirement: { re: string; errorMessage: string };
}

export default function InputWithLabel({ type, label, placeholder, requirement }: InputProps) {
  const [value, setValue] = useInputState('');
  const [isTouched, setIsTouched] = useState(false);
  const regex = new RegExp(requirement.re);

  const isInvalid = (InputValue: string) => {
    if (isTouched && !regex.test(InputValue)) {
      return true;
    }
    return false;
  };

  const handleBlur = () => {
    setIsTouched(true);
  };

  return (
    <TextInput
      value={value}
      onChange={setValue}
      onBlur={handleBlur}
      type={type}
      placeholder={placeholder}
      label={label}
      labelProps={{ className: 'mb-2' }}
      error={isInvalid(value) ? requirement.errorMessage : ''}
      errorProps={{ className: 'mt-2 text-sm' }}
      classNames={{ input: `bg-gray-100 ${isInvalid(value) ? 'border-2' : 'border-0'} ` }}
      radius="md"
    />
  );
}
