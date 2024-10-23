import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import ProgressBar, { ProgressBarProps } from './index';

const meta: Meta = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  argTypes: {
    total: {
      description: '총 숫자',
      control: { type: 'number' },
    },
    current: {
      description: '현재 숫자 (진행 상황)',
      control: { type: 'number' },
    },
    height: {
      description: '프로그레스 바의 높이',
      control: { type: 'text' },
    },
    progressBarColor: {
      description: '진행 중인 바의 색상 (Tailwind CSS 클래스)',
      control: { type: 'text' },
    },
    mainBarColor: {
      description: '전체 바의 색상 (Tailwind CSS 클래스)',
      control: { type: 'text' },
    },
  },
};

export default meta;

const Template: StoryFn<ProgressBarProps> = function Template(args: ProgressBarProps) {
  return <ProgressBar {...args} />;
};

// 1. 기본 ProgressBar
export const Default = Template.bind({});
Default.args = {
  total: 100,
  current: 50,
};

// 2. 커스텀 높이 ProgressBar
export const CustomHeight = Template.bind({});
CustomHeight.args = {
  total: 100,
  current: 78,
  height: 'h-1',
};

// 3. 다양한 색상 조합 ProgressBar
export const CustomColors = Template.bind({});
CustomColors.args = {
  total: 50,
  current: 11,
  height: 'h-3',
  progressBarColor: 'bg-indigo-500',
  mainBarColor: 'bg-indigo-50',
};
