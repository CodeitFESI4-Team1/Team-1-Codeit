import React from 'react';
import { useForm } from 'react-hook-form';
import { Meta, StoryFn } from '@storybook/react';
import SignupForm, { SignupFormValues } from './signup-form';

const meta: Meta = {
  title: 'Components/auth/SignupForm',
  component: SignupForm,
};

export default meta;

const Template: StoryFn = function SignupFormStory() {
  const formMethods = useForm<SignupFormValues>();
  return <SignupForm formMethods={formMethods} onSubmit={() => {}} />;
};

export const Default = Template.bind({});
Default.args = {};
