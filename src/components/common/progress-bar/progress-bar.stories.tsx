import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import ProgressBar, { ProgressBarProps } from './index';

const meta: Meta<typeof ProgressBar> = {
  title: 'common/progress-bar',
  component: ProgressBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '프로그래스바는 특정 기준 대비 현재 상태를 시각적으로 표현할 때 사용됩니다.',
      },
    },
  },
  argTypes: {
    total: {
      description: '총 숫자',
      control: { type: 'number' },
    },
    current: {
      description: '현재 숫자 (진행 상황)',
      control: { type: 'number' },
    },
  },
};

export default meta;

const Template: StoryFn<ProgressBarProps> = function Template(args: ProgressBarProps) {
  return <ProgressBar {...args} />;
};

// 기본 ProgressBar 스토리
export const Default = Template.bind({});
Default.args = {
  total: 100,
  current: 50,
};
