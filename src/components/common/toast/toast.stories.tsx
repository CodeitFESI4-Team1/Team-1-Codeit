import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import Toast, { ToastProps } from '.';

const meta: Meta = {
  title: 'Components/toast',
  component: Toast,
};

export default meta;
const Template: StoryFn<ToastProps> = function ToastStory(args: ToastProps) {
  return <Toast {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  title: '제목',
  className: 'w-60',
};

export const WithChildren = Template.bind({});
WithChildren.args = {
  title: '제목',
  children: '내용입니다.',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  title: '제목',
  children: '내용입니다.',
  icon: 'i',
};
