import { Meta, StoryObj } from '@storybook/react';
import EmailInput from './email-input';

const meta: Meta<typeof EmailInput> = {
  title: 'Components/Common/EmailInput',
  component: EmailInput,
  argTypes: {
    mode: {
      control: { type: 'text' },
    },
    type: {
      control: { type: 'text' },
    },
    label: {
      control: { type: 'text' },
    },
    placeholder: {
      control: { type: 'text' },
    },
    // requirement: {
    //   re: {
    //     control: { type: 'text' },
    //   },
    //   errorMessage: {
    //     control: { type: 'text' },
    //   },
    // },
  },
};

export default meta;
type Story = StoryObj<typeof EmailInput>;

export const SigninEmailInput: Story = {
  args: {
    mode: 'sign-in',
    type: 'text',
    label: '이메일',
    placeholder: '이메일을 입력해주세요.',
    // requirement: { re: /.{1,}/.source, errorMessage: '존재하지 않는 아이디입니다.' },
  },
};
export const SignupEmailInput: Story = {
  args: {
    mode: 'sign-up',
    type: 'text',
    label: '이메일',
    placeholder: '이메일을 입력해주세요.',
    // requirement: { re: /.{1,}/.source, errorMessage: '중복된 이메일입니다.' },
  },
};
