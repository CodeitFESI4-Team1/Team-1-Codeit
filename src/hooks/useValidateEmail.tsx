import { useCallback, useState } from 'react';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isEmail(email: string): Promise<boolean> {
  return new Promise<boolean>((resolve) => {
    if (!EMAIL_REGEX.test(email)) {
      resolve(false);
    }
    setTimeout(() => {
      resolve(email === 'test@example.com');
    }, 1000);
  });
}

export function useValidateEmail() {
  const [isValidating, setIsValidating] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const validateEmail = useCallback(async (email: string) => {
    try {
      console.log(email);
      setIsValidating(true);
      const isValidEmail = await isEmail(email);
      setIsValid(isValidEmail);
      console.log(isValidEmail);
    } catch {
      setIsValid(false);
    } finally {
      setIsValidating(false);
    }
  }, []);

  return { isValidating, isValid, validateEmail };
}
