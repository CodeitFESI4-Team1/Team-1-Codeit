import React from 'react';
import { useForm } from 'react-hook-form';
import { Meta, StoryFn } from '@storybook/react';
import SignupForm, { SignupFormValues } from './signup-form';

const meta: Meta = {
  title: 'auth/signup-form',
  component: SignupForm,
  tags: ['autodocs'],
  parameters: {
    docs: {
      subtitle: '회원가입시 사용되는 폼',
      description: {
        component:
          '포커스 이동 또는 입력 1초 이후에 이메일 형식, 비밀번호 8자이상, 비밀번호 확인 유효성 검사가 실행됩니다.',
      },
    },
  },
};

export default meta;

const Template: StoryFn = function SignupFormStory() {
  const formMethods = useForm<SignupFormValues>();
  return <SignupForm formMethods={formMethods} onSubmit={() => {}} />;
};

export const Default = Template.bind({});
Default.args = {};
