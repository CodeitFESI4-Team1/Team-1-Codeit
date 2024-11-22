import { Meta, StoryObj } from '@storybook/react';
import Toast from './index';

const meta: Meta<typeof Toast> = {
  title: 'common/toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['success', 'error', 'warning'],
    },
    message: { control: 'text' },
  },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

// Success Toast
export const SuccessToast: Story = {
  args: {
    message: '성공..!',
    type: 'success',
  },
};

// Error Toast
export const ErrorToast: Story = {
  args: {
    message: '에러...!',
    type: 'error',
  },
};

// Warning Toast
export const WarningToast: Story = {
  args: {
    message: '문제가 있음',
    type: 'warning',
  },
};
