import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { TextInput, TextInputProps } from '@mantine/core';

export interface InputWithLabelProps extends TextInputProps {
  label: string;
  placeholder: string;
  error?: string | null;
  register: UseFormRegisterReturn;
  type?: string;
  inputClassNames?: string;
}

export default function InputWithLabel({
  label,
  placeholder,
  error,
  register,
  type = 'text',
  inputClassNames = 'bg-gray-100',
  ...rest
}: InputWithLabelProps) {
  return (
    <TextInput
      label={label}
      placeholder={error ? '' : placeholder}
      type={type}
      labelProps={{ className: 'mb-2' }}
      error={error}
      errorProps={{ className: 'mt-2 text-sm' }}
      classNames={{ input: `${inputClassNames} ${error ? 'border-2' : 'border-0'} ` }}
      radius="md"
      {...register}
      {...rest}
    />
  );
}
