import React from 'react';
import { useForm } from 'react-hook-form';
import { Meta, StoryFn } from '@storybook/react';
import LoginForm, { LoginFormValues } from './login-form';

const meta: Meta = {
  title: 'Components/auth/LoginForm',
  component: LoginForm,
};

export default meta;

const Template: StoryFn = function LoginFormStory() {
  const formMethods = useForm<LoginFormValues>();
  return <LoginForm formMethods={formMethods} onSubmit={() => {}} />;
};

export const Default = Template.bind({});
Default.args = {};
