import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import TextInput, { TextInputProps } from '.';

const meta: Meta = {
  title: 'common/input/text-input',
  component: TextInput,
};

export default meta;
const Template: StoryFn<TextInputProps> = function TextInputStory(args: TextInputProps) {
  return <TextInput {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  placeholder: '검색어를 입력하세요',
  type: 'text',
  inputClassNames: 'bg-gray-100',
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: '이메일',
  placeholder: '이메일을 입력하세요',
  type: 'email',
  inputClassNames: 'bg-gray-100',
};

export const WithError = Template.bind({});
WithError.args = {
  error: 'Invalid email format',
  type: 'text',
  inputClassNames: 'bg-gray-100',
};
