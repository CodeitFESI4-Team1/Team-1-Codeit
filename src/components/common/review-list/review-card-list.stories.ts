import type { Meta, StoryObj } from '@storybook/react';
import ReviewCardList, { Gathering, ReviewList, User } from './review-card-list';

const mockUser: User = {
  id: 1,
  image: 'https://i.pinimg.com/736x/5d/83/ce/5d83cec545201e5ca8f2477070e2eac9.jpg',
  name: '샘플',
  teamId: 1,
};

const mockGathering: Gathering = {
  dateTime: new Date('2024-10-20'),
  id: 1,
  image: 'https://i.pinimg.com/564x/1c/3e/ff/1c3eff0cf58c3f87bc3310ff1528da20.jpg',
  location: '대전',
  name: '모여라',
  teamId: 1,
  type: '가볍게',
};

const mockData: ReviewList = [
  {
    teamId: 1,
    id: 1,
    score: 60,
    comment: '최고의 모임입니다!?',
    createdAt: new Date('2024-10-20'),
    gathering: mockGathering,
    user: mockUser,
  },
  {
    teamId: 2,
    id: 2,
    score: 20,
    comment: '최악의 모임입니다!!!',
    createdAt: new Date('2024-10-21'),
    gathering: mockGathering,
    user: mockUser,
  },
];

const meta: Meta<typeof ReviewCardList> = {
  title: 'components/ReviewCardList',
  component: ReviewCardList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    reviewList: mockData,
  },
} satisfies Meta<typeof ReviewCardList>;

export default meta;

type Story = StoryObj<typeof ReviewCardList>;
export const ImageAndClick: Story = {
  args: {
    clickable: true,
    imageAvailable: true,
  },
};

export const NoneOfThem: Story = {
  args: {
    clickable: false,
    imageAvailable: false,
  },
};
