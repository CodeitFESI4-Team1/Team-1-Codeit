import type { Meta, StoryObj } from '@storybook/react';
import ScheduledGatheringCard from './container';

const meta: Meta<typeof ScheduledGatheringCard> = {
  title: 'Components/ScheduledGatheringCard',
  component: ScheduledGatheringCard,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'light-gray',
      values: [{ name: 'light-gray', value: '#F9FAFB' }],
    },
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ScheduledGatheringCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// 찜한 모임 카드
export const LikedEvent: Story = {
  args: {
    data: {
      id: 1,
      crewTitle: '풀 엔 그레이스 스튜디오',
      crewMainLocation: '서울시',
      crewSubLocation: '강남구 역삼동',
      title: '가나다라마가나다라마가나다라마가',
      dateTime: '2024-10-30T00:30',
      currentCount: 8,
      totalCount: 12,
      imageUrl:
        'https://images.unsplash.com/photo-1601758260892-a62c486ace97?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      isLiked: true,
    },
  },
};

// 찜하지 않은 모임 카드
export const NotLikedEvent: Story = {
  args: {
    data: {
      id: 2,
      crewTitle: '산악회 모임',
      crewMainLocation: '서울시',
      crewSubLocation: '용산구 한강로',
      title: '등산 모임',
      dateTime: '2024-11-12T09:00',
      currentCount: 5,
      totalCount: 10,
      imageUrl:
        'https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      isLiked: false,
    },
  },
};
