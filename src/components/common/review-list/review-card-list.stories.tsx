import type { Meta, StoryObj } from '@storybook/react';
import { MyReviewData } from '@/src/mock/review-data';
import ReviewCardList from './review-card-list';

const meta: Meta<typeof ReviewCardList> = {
  title: 'components/ReviewCardList',
  component: ReviewCardList,
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ReviewCardList>;

export const MyReviewCardList: Story = {
  render: () => <ReviewCardList data={MyReviewData} refetch={() => {}} />,
};
