import { useEffect } from 'react';
import { UseFormReturn, useWatch } from 'react-hook-form';
import { useDebouncedValue } from '@mantine/hooks';
import Button from '@/src/components/common/button';
import PasswordInput from '@/src/components/common/input/password-input';
import TextInput from '@/src/components/common/input/text-input';

export interface LoginFormValues {
  email: string;
  password: string;
}
interface LoginFormProps {
  onSubmit: (data: LoginFormValues) => void;
  formMethods: UseFormReturn<LoginFormValues>;
}

export default function LoginForm({ onSubmit, formMethods }: LoginFormProps) {
  const {
    register,
    handleSubmit,
    trigger,
    control,
    formState: { errors, isValid },
  } = formMethods;

  const email = useWatch({ control, name: 'email' });
  const password = useWatch({ control, name: 'password' });

  const [debouncedEmail, cancelDebouncedEmail] = useDebouncedValue(email, 1000);
  const [debouncedPassword, cancelDebouncedPassword] = useDebouncedValue(password, 1000);

  useEffect(() => {
    if (debouncedEmail) trigger('email');
    if (debouncedPassword) trigger('password');
  }, [debouncedEmail, debouncedPassword, trigger]);

  const handleFormSubmit = handleSubmit(async (data) => {
    onSubmit(data);
    cancelDebouncedEmail();
    cancelDebouncedPassword();
  });

  return (
    <form onSubmit={handleFormSubmit}>
      <TextInput
        label="아이디"
        placeholder="이메일을 입력해주세요"
        register={{
          ...register('email', {
            required: '이메일을 입력해주세요',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: '이메일 형식으로 입력해주세요',
            },
            onBlur: () => trigger('email'),
          }),
        }}
        error={errors.email?.message}
        inputClassNames="bg-gray-100"
      />

      <PasswordInput
        label="비밀번호"
        placeholder="비밀번호를 입력해주세요"
        register={{
          ...register('password', {
            required: '비밀번호를 입력해주세요',
            minLength: {
              value: 8,
              message: '비밀번호가 8자 이상이 되도록 해주세요.',
            },
            onBlur: () => trigger('password'),
          }),
        }}
        error={errors.password?.message}
        className="mt-6"
        inputClassNames="bg-gray-100"
      />

      <div className="mt-10">
        <Button
          disabled={!isValid}
          type="submit"
          className={`w-full font-semibold ${isValid ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-300'}`}
        >
          로그인
        </Button>
      </div>
    </form>
  );
}
