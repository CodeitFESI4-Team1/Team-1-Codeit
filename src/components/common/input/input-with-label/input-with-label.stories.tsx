import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import InputWithLabel, { InputWithLabelProps } from '.';

const meta: Meta = {
  title: 'Components/input/input-with-label',
  component: InputWithLabel,
};

export default meta;
const Template: StoryFn<InputWithLabelProps> = function InputWithLabelStory(
  args: InputWithLabelProps,
) {
  return <InputWithLabel {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Email',
  placeholder: 'Enter your email',
  type: 'text',
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Email',
  placeholder: 'Enter your email',
  error: 'Invalid email format',
  type: 'text',
};
