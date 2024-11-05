import React from 'react';
import type { Meta } from '@storybook/react';
import FloatingButton, { FloatingButtonProps } from './floating-btn';

const meta: Meta<typeof FloatingButton> = {
  title: 'Components/FloatingButton',
  component: FloatingButton,
  tags: ['autodocs'],
  argTypes: {
    onClick: {
      action: 'clicked',
      description: '참가 버튼 클릭 이벤트',
    },
  },
};

export default meta;

function Template(args: FloatingButtonProps) {
  return <FloatingButton {...args} />;
}

export function Default() {
  // eslint-disable-next-line no-alert
  return <Template onClick={() => alert('참가 버튼 클릭')} />;
}
