import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import PasswordInput, { PasswordInputProps } from '.';

const meta: Meta = {
  title: 'common/input/password-input',
  component: PasswordInput,
};

export default meta;

const Template: StoryFn<PasswordInputProps> = function PasswordInputStory(
  args: PasswordInputProps,
) {
  return <PasswordInput {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Password',
  placeholder: 'Enter your password',
  type: 'password',
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Password',
  placeholder: 'Enter your password',
  error: 'Password is too short',
  type: 'password',
};
