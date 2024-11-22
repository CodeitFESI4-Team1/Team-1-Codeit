import type { Meta, StoryObj } from '@storybook/react';
import DetailCrewPresenter from './detail-crew-presenter';

const meta: Meta<typeof DetailCrewPresenter> = {
  title: 'crew/crew-detail',
  component: DetailCrewPresenter,
  parameters: {
    docs: {
      subtitle: '크루 디테일 페이지에서 크루 정보를 나타냅니다.',
      description: {
        component:
          '크루장인 경우, 크루원인 경우, 둘다 아닌 경우 세가지에 따라서 케밥이 다르게 보입니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    handleJoinClick: { action: '참여 버튼 클릭' },
    handleLeaveCrew: { action: '탈퇴 버튼 클릭' },
    handleDelete: { action: '삭제 버튼 클릭' },
    onShareClick: { action: '공유 버튼 클릭' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 디폴트 스토리: isCaptain false, isMember false
export const Default: Story = {
  args: {
    data: {
      id: 1,
      title: '스키 초보만 오세요',
      mainCategory: '기타',
      subCategory: '스키',
      mainLocation: '대전광역시',
      introduce: '스키 초보를 위한 모임입니다.',
      subLocation: '유성구',
      participantCount: 8,
      totalCount: 10,
      imageUrl:
        'https://images.unsplash.com/photo-1504827274833-7db1774520e3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      totalGatheringCount: 5,
      crewMembers: [
        {
          id: 1,
          nickname: '스키조아',
          email: 'abc@asbc.com',
          profileImageUrl:
            'https://i.pinimg.com/564x/e2/25/bb/e225bb492dc7a20a549f3c0abec28eb8.jpg',
          captain: true,
        },
        {
          id: 2,
          nickname: 'Jane',
          email: 'abc@asbc.com',
          profileImageUrl:
            'https://i.pinimg.com/564x/e2/25/bb/e225bb492dc7a20a549f3c0abec28eb8.jpg',
          captain: false,
        },
        {
          id: 3,
          nickname: 'Mike',
          email: 'abc@asbc.com',
          profileImageUrl: '',
          captain: false,
        },
        {
          id: 4,
          nickname: 'Lucy',
          email: 'abc@asbc.com',
          profileImageUrl:
            'https://i.pinimg.com/564x/e2/25/bb/e225bb492dc7a20a549f3c0abec28eb8.jpg',
          captain: false,
        },
        {
          id: 5,
          nickname: 'Tom',
          email: 'abc@asbc.com',
          profileImageUrl: '',
          captain: false,
        },
        {
          id: 6,
          nickname: 'Alice',
          email: 'abc@asbc.com',
          profileImageUrl: '',
          captain: false,
        },
        {
          id: 7,
          nickname: 'Bob',
          email: 'abc@asbc.com',
          profileImageUrl: '',
          captain: false,
        },
        {
          id: 8,
          nickname: 'Sophia',
          email: 'abc@asbc.com',
          profileImageUrl: '',
          captain: false,
        },
      ],
    },
    isCaptain: false,
    isMember: false,
  },
};

// isCaptain true, isMember true
export const IsCaptain: Story = {
  args: {
    data: {
      id: 1,
      title: '스키 초보만 오세요',
      mainCategory: '기타',
      subCategory: '스키',
      mainLocation: '대전광역시',
      introduce: '스키 초보를 위한 모임입니다.',
      subLocation: '유성구',
      participantCount: 8,
      totalCount: 10,
      imageUrl:
        'https://images.unsplash.com/photo-1504827274833-7db1774520e3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      totalGatheringCount: 5,
      crewMembers: [
        {
          id: 1,
          nickname: 'John',
          email: 'abc@asbc.com',
          profileImageUrl:
            'https://i.pinimg.com/564x/e2/25/bb/e225bb492dc7a20a549f3c0abec28eb8.jpg',
          captain: true,
        },
      ],
    },
    isCaptain: true,
    isMember: true,
  },
};

export const IsMember: Story = {
  args: {
    data: {
      id: 1,
      title: '스키 초보만 오세요',
      mainCategory: '기타',
      subCategory: '스키',
      mainLocation: '대전광역시',
      introduce: '스키 초보를 위한 모임입니다.',
      subLocation: '유성구',
      participantCount: 8,
      totalCount: 10,
      imageUrl:
        'https://images.unsplash.com/photo-1504827274833-7db1774520e3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      totalGatheringCount: 5,
      crewMembers: [
        {
          id: 1,
          nickname: 'John',
          email: 'abc@asbc.com',
          profileImageUrl:
            'https://i.pinimg.com/564x/e2/25/bb/e225bb492dc7a20a549f3c0abec28eb8.jpg',
          captain: true,
        },
        {
          id: 2,
          nickname: 'Jane',
          email: 'abc@asbc.com',
          profileImageUrl:
            'https://i.pinimg.com/564x/e2/25/bb/e225bb492dc7a20a549f3c0abec28eb8.jpg',
          captain: false,
        },
      ],
    },
    isCaptain: false,
    isMember: true,
  },
};
