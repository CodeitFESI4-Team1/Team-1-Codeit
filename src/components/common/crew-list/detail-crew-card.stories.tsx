import type { Meta, StoryObj } from '@storybook/react';
import DetailCrewCard from './detail-crew-card';

const meta: Meta = {
  title: 'Components/CrewCardList/DetailCrewCard',
  component: DetailCrewCard,
  parameters: {
    layout: 'centered',
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ['autodocs'],
  args: {
    data: {
      id: 1,
      title: '같이 물장구칠사람',
      mainLocation: '대전광역시',
      subLocation: '유성구',
      participantCount: 10,
      totalCount: 20,
      confirmed: true,
      imageUrl: 'https://i.pinimg.com/564x/f8/8d/c5/f88dc5b857caf6c303ae5ef9dd12e7fb.jpg',
      totalGatheringCount: 5,
      crewMembers: [
        {
          id: 1,
          nickname: 'John',
          profileImageUrl:
            'https://i.pinimg.com/564x/e2/25/bb/e225bb492dc7a20a549f3c0abec28eb8.jpg',
        },
        {
          id: 2,
          nickname: 'Jane',
          profileImageUrl:
            'https://i.pinimg.com/564x/e2/25/bb/e225bb492dc7a20a549f3c0abec28eb8.jpg',
        },
      ],
    },
  },
} satisfies Meta<typeof DetailCrewCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: {
      id: 1,
      title: '같이 물장구칠사람',
      mainLocation: '대전광역시',
      subLocation: '유성구',
      participantCount: 10,
      totalCount: 20,
      confirmed: true,
      imageUrl: 'https://i.pinimg.com/564x/f8/8d/c5/f88dc5b857caf6c303ae5ef9dd12e7fb.jpg',
      totalGatheringCount: 5,
      crewMembers: [], // 빈 배열이라도 기본값으로 설정
    },
  },
};

export const NotConfirmed: Story = {
  args: {
    data: {
      id: 2,
      title: '물장구 동호회',
      mainLocation: '서울특별시',
      subLocation: '강남구',
      participantCount: 5,
      totalCount: 15,
      confirmed: false,
      imageUrl: 'https://i.pinimg.com/564x/e2/25/bb/e225bb492dc7a20a549f3c0abec28eb8.jpg',
      totalGatheringCount: 3,
      crewMembers: [],
    },
  },
};
