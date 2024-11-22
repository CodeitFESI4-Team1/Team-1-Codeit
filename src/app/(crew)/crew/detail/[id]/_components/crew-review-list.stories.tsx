import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ClientProvider from '@/src/components/client-provider';
import { CrewReview } from '@/src/types/review';
import CrewReviewList from './crew-review-list';

const meta: Meta<typeof CrewReviewList> = {
  title: 'crew/crew-review-list',
  component: CrewReviewList,
  parameters: {
    docs: {
      subtitle: '크루의 전체 리뷰를 확인할 수 있는 리스트 입니다.',
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

const CrewReviewData: { data: CrewReview[] } = {
  data: [
    {
      crewId: 1,
      id: 1,
      rate: 5,
      comment: '정말 좋은 모임이었어요! 많은 걸 배웠습니다.',
      createdAt: '2024-10-30T14:00:00+09:00',
      reviewer: {
        id: 1,
        nickname: '김철수',
        profileImageUrl: 'https://i.pinimg.com/736x/25/64/5c/25645c1cbb29c5b8e8ebe995404b5ab6.jpg',
      },
    },
    {
      crewId: 1,
      id: 2,
      rate: 3,
      comment: '괜찮았지만, 다음에는 조금 더 나아지면 좋겠어요.',
      createdAt: '2024-10-31T09:30:00+09:00',
      reviewer: {
        id: 2,
        nickname: '박영희',
        profileImageUrl: 'https://i.pinimg.com/736x/ba/25/6f/ba256faae4c3608685067b2641507392.jpg',
      },
    },
    {
      crewId: 1,
      id: 3,
      rate: 1,
      comment: '기대에 미치지 못했습니다. 개선이 필요해요.',
      createdAt: '2024-11-01T11:15:00+09:00',
      reviewer: {
        id: 3,
        nickname: '이영수',
        profileImageUrl: '',
      },
    },
    {
      crewId: 1,
      id: 4,
      rate: 4,
      comment: '전체적으로 만족스러웠습니다. 다음에도 참여하고 싶어요!',
      createdAt: '2024-11-03T16:45:00+09:00',
      reviewer: {
        id: 4,
        nickname: '최지훈',
        profileImageUrl: '',
      },
    },
    {
      crewId: 1,
      id: 5,
      rate: 2,
      comment: '조금 아쉬웠지만 새로운 경험이었습니다.',
      createdAt: '2024-11-05T13:20:00+09:00',
      reviewer: {
        id: 5,
        nickname: '강수진',
        profileImageUrl: 'https://i.pinimg.com/736x/38/d2/9a/38d29a018ac0472d9c2916e9d46ca282.jpg',
      },
    },
    {
      crewId: 1,
      id: 6,
      rate: 2,
      comment: '조금 아쉬웠지만 새로운 경험이었습니다.',
      createdAt: '2024-11-05T13:20:00+09:00',
      reviewer: {
        id: 5,
        nickname: '강수진',
        profileImageUrl: '',
      },
    },
    {
      crewId: 1,
      id: 7,
      rate: 2,
      comment: '아쉬워요',
      createdAt: '2024-10-30T14:00:00+09:00',
      reviewer: {
        id: 1,
        nickname: '김철수',
        profileImageUrl: '',
      },
    },
  ],
};

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
