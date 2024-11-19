import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ClientProvider from '@/src/components/client-provider';
import { CrewReview } from '@/src/types/review';
import { CrewReviewData } from '@/src/mock/review-data';
import CrewReviewList from './crew-review-list';

const meta: Meta<typeof CrewReviewList> = {
  title: 'Components/Detail/CrewReviewList',
  component: CrewReviewList,
  parameters: {
    layout: 'fulled',
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ClientProvider>
        <Story />
      </ClientProvider>
    ),
  ],
} satisfies Meta<typeof CrewReviewList>;

export default meta;
type Story = StoryObj<typeof CrewReviewList>;

function RenderReviewPagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // 페이지에 맞는 리뷰 데이터 가져오기
  const totalItems = CrewReviewData.data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const currentReviews = CrewReviewData.data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <CrewReviewList
      reviews={currentReviews as CrewReview[]}
      totalPages={totalPages}
      currentPage={currentPage}
      onPageChange={setCurrentPage}
    />
  );
}

export const Default: Story = {
  render: () => <RenderReviewPagination />,
};
