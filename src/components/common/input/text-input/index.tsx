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

/**
 * TextInput
 *
 * @param {string} placeholder - 입력 필드의 플레이스홀더 텍스트
 * @param {string | null} error - 유효성 검사 실패 시 표시되는 에러 메시지 (없을 시 null)
 * @param {UseFormRegisterReturn} register - react-hook-form의 register 함수 반환값, 입력 필드를 폼에 등록하기 위해 사용
 * @param {string} [inputClassNames] - 입력 필드의 추가적인 커스텀 클래스
 * @param {object} rest - Mantine의 TextInput 컴포넌트에 전달할 나머지 props
 */

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
