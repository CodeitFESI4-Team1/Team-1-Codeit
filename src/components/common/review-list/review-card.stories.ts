import type { Meta, StoryObj } from '@storybook/react';
import ReviewCard from './review-card';

const meta = {
  title: 'component/ReviewCard',
  component: ReviewCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    createdAt: new Date(),
    user: {
      id: 1,
      name: '익명',
      image: 'https://via.placeholder.com/150',
    },
  },
} satisfies Meta<typeof ReviewCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    score: 90,
    comment: '최고의 모임b',
  },
};
