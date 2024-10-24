import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { TextInput, TextInputProps } from '@mantine/core';

export interface InputWithLabelProps extends TextInputProps {
  label: string;
  placeholder: string;
  error?: string | null;
  register: UseFormRegisterReturn;
  type?: string;
}

export default function InputWithLabel({
  label,
  placeholder,
  error,
  register,
  type = 'text',
}: InputWithLabelProps) {
  return (
    <TextInput
      label={label}
      placeholder={error ? '' : placeholder}
      type={type}
      {...register}
      labelProps={{ className: 'mb-2' }}
      error={error}
      errorProps={{ className: 'mt-2 text-sm' }}
      classNames={{ input: `bg-gray-100 ${error ? 'border-2' : 'border-0'} ` }}
      radius="md"
    />
  );
}
