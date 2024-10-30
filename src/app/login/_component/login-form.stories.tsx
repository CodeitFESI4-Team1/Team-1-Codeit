import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import LoginForm from './login-form';

const meta: Meta = {
  title: 'Components/auth/LoginForm',
  component: LoginForm,
};

export default meta;

const Template: StoryFn = function LoginFormStory() {
  return <LoginForm />;
};

export const Default = Template.bind({});
Default.args = {};
