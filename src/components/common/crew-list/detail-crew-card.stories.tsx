// CrewCard 스토리북 파일
import type { Meta, StoryObj } from '@storybook/react';
import CrewCard from './detail-crew-card';

const meta: Meta = {
  title: 'Components/CrewCardList/CrewCard',
  component: CrewCard,
  parameters: {
    layout: 'centered',
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ['autodocs'],
  args: {
    id: 0,
    name: '같이 물장구칠사람',
    location: '충청',
    thumbnail: 'https://i.pinimg.com/564x/f8/8d/c5/f88dc5b857caf6c303ae5ef9dd12e7fb.jpg',
    gatheringCount: 5, // 기본 값 추가
    crewList: [
      {
        id: 1,
        nickname: 'John',
        profileImageUrl: 'https://i.pinimg.com/564x/e2/25/bb/e225bb492dc7a20a549f3c0abec28eb8.jpg',
      },
      {
        id: 2,
        nickname: 'Jane',
        profileImageUrl: 'https://i.pinimg.com/564x/e2/25/bb/e225bb492dc7a20a549f3c0abec28eb8.jpg',
      },
    ], // 기본 프로필 리스트 추가
  },
} satisfies Meta<typeof CrewCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    capacity: 20,
    participantCount: 10,
    isConfirmed: true,
  },
};

export const NotConfirmed: Story = {
  args: {
    capacity: 10,
    participantCount: 1,
    isConfirmed: false,
  },
};

export const Fulled: Story = {
  args: {
    capacity: 5,
    participantCount: 5,
    isConfirmed: true,
  },
};
