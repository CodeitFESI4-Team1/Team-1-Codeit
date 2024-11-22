import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import ReviewableGatheringCard from './reviewable-gathering-card';

const meta: Meta<typeof ReviewableGatheringCard> = {
  title: 'gathering/reviewable-gathering-card',
  component: ReviewableGatheringCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      subtitle: '리뷰 가능한 약속 카드입니다.',
      description: {
        component:
          '약속이름, 약속장소, 인원수, 시간 등을 알려주고 리뷰 작성 버튼을 통해 리뷰를 남길 수 있습니다.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ReviewableGatheringCard>;

export const Default: Story = {
  args: {
    id: 1,
    gatheringName: '서핑모임',
    location: '양양',
    dateTime: '2024-11-21T18:30:00.000Z',
    currentCount: 8,
    totalCount: 12,
    imageUrl: 'https://i.pinimg.com/736x/00/6d/4b/006d4bb521a737534e37a8af3203a7d3.jpg',
    participants: [
      { id: 1, nickname: '유저1', profileImageUrl: '' },
      { id: 2, nickname: '유저2', profileImageUrl: '' },
      {
        id: 3,
        nickname: '유저3',
        profileImageUrl: 'https://i.pinimg.com/736x/97/5a/3c/975a3c645d344216e8ea346c084fba04.jpg',
      },
    ],
  },
};
