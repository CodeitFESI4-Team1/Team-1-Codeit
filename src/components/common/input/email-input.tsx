'use client';

import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { Loader, TextInput } from '@mantine/core';
import { useInputState } from '@mantine/hooks';

export interface EmailInputProps {
  mode: 'sign-in' | 'sign-up';
  type: string;
  label: string;
  placeholder: string;
  requirement: { re: string; errorMessage: string };
}

export default function EmailInput({
  mode,
  type,
  label,
  placeholder,
  requirement,
}: EmailInputProps) {
  const regex = new RegExp(requirement.re);
  const timeoutRef = useRef<number | null>(null);

  const [value, setValue] = useInputState('');
  const [isTouched, setIsTouched] = useState(false);
  const [ischeckingEmail, setCheckingEmail] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [isDebouncing, setIsDebouncing] = useState(false);

  // debounce 처리
  useEffect(() => {
    if (value && isTouched) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setIsDebouncing(true);
      timeoutRef.current = window.setTimeout(async () => {
        await validateEmail();
        setIsDebouncing(false);
      }, 1000);
    }
  }, [value]);

  const isError = () => isTouched && !isValid;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsTouched(true);
    setValue(event.target.value);
  };

  const handleBlur = async () => {
    setIsTouched(true);
    if (isDebouncing) {
      return;
    }
    await validateEmail();
  };

  const validateEmail = async () => {
    // console.log(value);
    if (regex.test(value)) {
      setCheckingEmail(true);
      const isExists = await checkEmailExists(value);
      setCheckingEmail(false);

      if (mode === 'sign-in') {
        setIsValid(isExists);
      }
      if (mode === 'sign-up') {
        setIsValid(!isExists);
      }
    } else {
      setIsValid(false);
    }
    // console.log(isError());
  };

  // 이메일이 'test@example.com'이면 이미 존재하는 것으로 처리
  const checkEmailExists = async (email: string): Promise<boolean> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (email === 'test@example.com') {
          resolve(true);
        } else {
          resolve(false);
        }
      }, 1000);
    });
  };

  return (
    <TextInput
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      type={type}
      placeholder={placeholder}
      label={label}
      labelProps={{ className: 'mb-2' }}
      error={isError() ? requirement.errorMessage : ''}
      errorProps={{ className: 'mt-2 text-sm' }}
      classNames={{
        input: `bg-gray-100 ${isError() ? 'border-2' : 'border-0'} `,
      }}
      radius="md"
      rightSection={ischeckingEmail ? <Loader size="1rem" /> : null}
    />
  );
}
