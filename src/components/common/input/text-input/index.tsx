import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import {
  TextInput as MantineTextInput,
  TextInputProps as MantineTextInputProps,
} from '@mantine/core';

export interface TextInputProps extends MantineTextInputProps {
  register: UseFormRegisterReturn;
  inputClassNames?: string;
}

export default function TextInput({
  placeholder,
  error,
  register,
  inputClassNames,
  ...rest
}: TextInputProps) {
  return (
    <MantineTextInput
      error={error}
      placeholder={error ? '' : placeholder}
      labelProps={{ className: 'mb-2' }}
      errorProps={{ className: 'mt-2 text-sm' }}
      classNames={{ input: `${inputClassNames} ${error ? 'border-2' : 'border-0'} ` }}
      radius="md"
      {...register}
      {...rest}
    />
  );
}
