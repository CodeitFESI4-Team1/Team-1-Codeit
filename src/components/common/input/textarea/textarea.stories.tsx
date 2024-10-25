import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import Textarea, { TextareaProps } from '.';

const meta: Meta = {
  title: 'Components/input/textarea',
  component: Textarea,
};

export default meta;
const Template: StoryFn<TextareaProps> = function TextareaStory(args: TextareaProps) {
  return <Textarea {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  label: '리뷰',
  placeholder: '리뷰를 입력해주세요.',
};
