import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { TextInput, TextInputProps } from '@mantine/core';

export interface SearchInputProps extends TextInputProps {
  placeholder: string;
  register?: UseFormRegisterReturn;
  inputClassNames?: string;
}

export default function SearchInput({
  placeholder,
  register,
  inputClassNames,
  ...rest
}: SearchInputProps) {
  return (
    <TextInput
      placeholder={placeholder}
      classNames={{ input: `${inputClassNames}` }}
      radius="md"
      {...register}
      {...rest}
    />
  );
}
