import type { Meta, StoryObj } from '@storybook/react';
import GatheringCard from './container';

const meta: Meta<typeof GatheringCard> = {
  title: 'Components/GatheringCard',
  component: GatheringCard,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'light-gray',
      values: [{ name: 'light-gray', value: '#F9FAFB' }],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    dateTime: { control: 'date' },
    location: { control: 'text' },
    currentCount: { control: 'number' },
    totalCount: { control: 'number' },
    imageUrl: { control: 'text' },
    liked: { control: 'boolean' },
    className: { control: false },
  },
} satisfies Meta<typeof GatheringCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 설정: 기본 모임 카드
export const Default: Story = {
  args: {
    title: '가나다라마가나다라마가나다라마가',
    dateTime: '2024-10-30T00:30',
    location: '서울, 한강공원',
    currentCount: 8,
    totalCount: 12,
    imageUrl:
      'https://images.unsplash.com/photo-1601758260892-a62c486ace97?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    liked: true,
  },
};

// 좋아요가 눌리지 않은 모임 카드
export const NotLiked: Story = {
  args: {
    title: '등산 모임',
    dateTime: '2024-11-12T09:00',
    location: '서울, 한강공원',
    currentCount: 5,
    totalCount: 10,
    imageUrl:
      'https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    liked: false,
  },
};

// 마감된 모임 카드
export const PastEvent: Story = {
  args: {
    title: '마감된 모임입니다',
    dateTime: '2024-10-15T07:30',
    location: '서울, 한강공원',
    currentCount: 12,
    totalCount: 12,
    imageUrl:
      'https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    liked: false,
  },
};

// 찜한 모임 카드
export const LikedEvent: Story = {
  args: {
    title: '조깅 모임',
    dateTime: '2024-12-15T07:30',
    location: '서울, 한강공원',
    currentCount: 8,
    totalCount: 12,
    imageUrl:
      'https://images.unsplash.com/photo-1601758260892-a62c486ace97?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    liked: true,
  },
};
