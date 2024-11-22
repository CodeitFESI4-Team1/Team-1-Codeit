import type { Meta, StoryObj } from '@storybook/react';
import ReviewCardList from './review-card-list';

const meta: Meta<typeof ReviewCardList> = {
  title: 'review/review-card-list',
  component: ReviewCardList,
  tags: ['autodocs'],
  parameters: {
    docs: {
      subtitle: '마이 페이지의 리뷰 카드 리스트 입니다.',
      description: {
        component: '크루 이름, 약속 이름, 점수, 내용, 생성 날짜를 확인할 수 있습니다.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ReviewCardList>;

const MyReviewData = {
  pages: [
    {
      content: [
        {
          crewId: 1,
          crewName: '스키모임',
          gatheringName: '무주 스키장 같이가요',
          id: 3,
          rate: 3,
          comment: '낫 뱃',
          createdAt: '2024-11-09T10:09:12.306+09:00',
          gatheringLocation: '무주 스키장',
        },
        {
          crewId: 2,
          crewName: '사회인 야구',
          gatheringName: '타격연습',
          id: 4,
          rate: 4,
          comment: '많이 배웠습니다',
          createdAt: '2024-10-31T10:09:12.306+09:00',
          gatheringLocation: '고척 스카이돔',
        },
      ],
      hasNext: true,
    },
    {
      content: [
        {
          crewId: 5,
          crewName: '수영',
          gatheringName: '초급반 수영',
          id: 7,
          rate: 3,
          comment: '사람이 너무 많아요',
          createdAt: '2024-10-31T00:56',
          gatheringLocation: '수영장',
        },
        {
          crewId: 6,
          crewName: '풋살 같이해요',
          gatheringName: '어서와 풋살은 처음이지?',
          id: 8,
          rate: 2,
          comment: '초심자에게 너무 많은 걸 요구합니다',
          createdAt: '2024-10-31T10:09:12.306+09:00',
          gatheringLocation: '풋살장',
        },
      ],
      hasNext: false,
    },
  ],
  pageParams: [],
};

export const MyReviewCardList: Story = {
  render: () => <ReviewCardList data={MyReviewData} refetch={() => {}} />,
};
