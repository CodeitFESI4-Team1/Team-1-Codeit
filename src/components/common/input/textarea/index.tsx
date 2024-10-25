import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { Textarea as MantineTextarea, TextareaProps as MantineTextareaProps } from '@mantine/core';

export interface TextareaProps extends MantineTextareaProps {
  inputClassNames?: string;
  register?: UseFormRegisterReturn;
}

export default function Textarea({
  placeholder,
  error,
  inputClassNames,
  register,
  ...rest
}: TextareaProps) {
  return (
    <MantineTextarea
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
