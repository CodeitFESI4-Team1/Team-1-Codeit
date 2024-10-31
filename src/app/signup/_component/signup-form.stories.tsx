import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import SignupForm from './signup-form';

const meta: Meta = {
  title: 'Components/auth/SignupForm',
  component: SignupForm,
};

export default meta;

const Template: StoryFn = function SignupFormStory() {
  return <SignupForm onSubmit={() => {}} />;
};

export const Default = Template.bind({});
Default.args = {};
