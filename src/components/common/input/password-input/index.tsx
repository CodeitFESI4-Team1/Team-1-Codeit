import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import {
  PasswordInput as MantinePasswordInput,
  PasswordInputProps as MantinePasswordInputProps,
} from '@mantine/core';

/**
 * PasswordInput
 *
 * @param {string} placeholder - 입력 필드의 플레이스홀더 텍스트
 * @param {string | null} [error] - 유효성 검사 실패 시 표시되는 에러 메시지 (옵션, 없을 시 null)
 * @param {UseFormRegisterReturn} register - react-hook-form의 register 함수 반환값으로, 입력 필드를 폼에 등록하기 위해 사용
 * @param {object} rest - Mantine의 PasswordInput 컴포넌트에 전달할 나머지 props (예: onChange, onBlur 등)
 */

export interface PasswordInputProps extends MantinePasswordInputProps {
  placeholder: string;
  error?: string | null;
  register: UseFormRegisterReturn;
}
export default function PasswordInput({
  placeholder,
  error,
  register,
  ...rest
}: PasswordInputProps) {
  return (
    <MantinePasswordInput
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
