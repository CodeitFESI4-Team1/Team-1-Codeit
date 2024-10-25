import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { Textarea as MantineTextarea, TextareaProps as MantineTextareaProps } from '@mantine/core';

export interface TextareaProps extends MantineTextareaProps {
  inputClassNames?: string;
  register?: UseFormRegisterReturn;
}

export default function Textarea({ inputClassNames, register, ...rest }: TextareaProps) {
  return (
    <MantineTextarea
      labelProps={{ className: 'mb-2' }}
      classNames={{ input: `${inputClassNames}` }}
      {...register}
      {...rest}
      radius="md"
    />
  );
}
