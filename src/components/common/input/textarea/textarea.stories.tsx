import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import Textarea, { TextareaProps } from '.';

const meta: Meta = {
  title: 'common/input/textarea',
  component: Textarea,
  tags: ['autodocs'],
  parameters: {
    docs: {
      subtitle: '텍스트를 입력하는 textarea 컴포넌트',
      description: {
        component: 'label, placeholder, error 설정이 가능한 텍스트 textarea 컴포넌트입니다.',
      },
    },
  },
};

export default meta;
const Template: StoryFn<TextareaProps> = function TextareaStory(args: TextareaProps) {
  return <Textarea {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  label: '리뷰',
  placeholder: '리뷰를 입력해주세요.',
  inputClassNames: 'bg-gray-100',
};

export const WithError = Template.bind({});
WithError.args = {
  label: '리뷰',
  placeholder: '리뷰를 입력해주세요.',
  error: '리뷰를 작성해주세요!',
  inputClassNames: 'bg-gray-100',
};
