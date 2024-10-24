import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import MiniGatheringCard from './index';

const meta: Meta<typeof MiniGatheringCard> = {
  title: 'Components/MiniGatheringCard',
  component: MiniGatheringCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '내가 참여한모임, 내가만든 모임에서 사용',
      },
    },
  },
  argTypes: {
    title: { control: 'text' },
    date: { control: 'text' },
    location: { control: 'text' },
    currentCount: { control: { type: 'number', min: 0 } },
    totalCount: { control: { type: 'number', min: 1 } },
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof MiniGatheringCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '모임이름이이십자모임이름이이십자모임이름',
    date: '2024-11-08T11:00',
    location:
      '길이가 기이잉이이이이이인겨우우우우우우우웅 서울 한강공원 서울 한강공원 서울 한강공원 서울 한강공원 서울 한강공원',
    currentCount: 9,
    totalCount: 10,
    imageUrl:
      'https://images.unsplash.com/photo-1601758260892-a62c486ace97?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    onClick: action('카드를 클릭했습니다!'),
  },
};

export const AnotherExample: Story = {
  args: {
    title: '또 다른 모임입니다.',
    date: '2024-12-25T18:30',
    location: '서울 한강공원',
    currentCount: 5,
    totalCount: 20,
    imageUrl:
      'https://images.unsplash.com/photo-1516978101789-720eacb59e79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGNhdHxlbnwwfHwwfHx8Mg%3D%3D',
    onClick: action('카드를 클릭했습니다!'),
  },
};
