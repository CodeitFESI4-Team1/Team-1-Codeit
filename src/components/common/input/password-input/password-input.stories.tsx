import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import PasswordInput, { PasswordInputProps } from '.';

const meta: Meta = {
  title: 'common/input/password-input',
  component: PasswordInput,
  tags: ['autodocs'],
  parameters: {
    docs: {
      subtitle: '비밀번호를 입력하는 input 컴포넌트',
      description: {
        component: 'placeholder, error 설정이 가능한 password-input 컴포넌트입니다.',
      },
    },
  },
};

export default meta;

const Template: StoryFn<PasswordInputProps> = function PasswordInputStory(
  args: PasswordInputProps,
) {
  return <PasswordInput {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  label: '비밀번호',
  placeholder: '비밀번호를 입력해주세요',
  type: 'password',
  inputClassNames: 'bg-gray-100',
};

export const WithError = Template.bind({});
WithError.args = {
  label: '비밀번호',
  placeholder: '비밀번호를 입력해주세요',
  error: '비밀번호가 8자 이상이 되도록 해주세요.',
  type: 'password',
  inputClassNames: 'bg-gray-100',
};
