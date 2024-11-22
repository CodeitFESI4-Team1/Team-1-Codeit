import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import ReviewableGatheringCard from './reviewable-gathering-card';

const meta: Meta<typeof ReviewableGatheringCard> = {
  title: 'gathering/reviewable-gathering-card',
  component: ReviewableGatheringCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
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
    gatheringName: '모임모임모임모임모임모밈미밈미미미미미미',
    location: '모임모임모임모임모임모밈미밈미미미미미미',
    dateTime: '2024-11-21T18:30:00.000Z',
    currentCount: 8,
    totalCount: 12,
    imageUrl: 'https://i.pinimg.com/736x/5d/83/ce/5d83cec545201e5ca8f2477070e2eac9.jpg',
    participants: [
      { id: 1, nickname: '유저1', profileImageUrl: '' },
      { id: 2, nickname: '유저2', profileImageUrl: '' },
      { id: 3, nickname: '유저3', profileImageUrl: '' },
    ],
  },
};
