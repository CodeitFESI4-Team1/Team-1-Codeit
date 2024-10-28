import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import {
  PasswordInput as MantinePasswordInput,
  PasswordInputProps as MantinePasswordInputProps,
} from '@mantine/core';

export interface PasswordInputProps extends MantinePasswordInputProps {
  label: string;
  placeholder: string;
  error?: string | null;
  register: UseFormRegisterReturn;
}
export default function PasswordInput({
  label,
  placeholder,
  error,
  register,
  ...rest
}: PasswordInputProps) {
  return (
    <MantinePasswordInput
      label={label}
      labelProps={{ className: 'mb-2' }}
      placeholder={error ? '' : placeholder}
      error={error}
      errorProps={{ className: 'mt-2 text-sm' }}
      classNames={{ input: `bg-gray-100 ${error ? 'border-2' : 'border-0'} ` }}
      radius="md"
      {...register}
      {...rest}
    />
  );
}
