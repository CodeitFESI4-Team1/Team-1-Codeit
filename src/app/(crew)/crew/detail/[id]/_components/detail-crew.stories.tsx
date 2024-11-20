import type { Meta, StoryObj } from '@storybook/react';
import DetailCrewPresenter from './detail-crew-presenter';

const meta: Meta<typeof DetailCrewPresenter> = {
  title: 'Components/Detail/DetailCrewPresenter',
  component: DetailCrewPresenter,
  parameters: {
    layout: 'fullscreen',
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
      title: '같이 물장구칠사람',
      mainCategory: '기타',
      subCategory: '스키',
      mainLocation: '대전광역시',
      introduce:
        '크루 소개 크루 소개 크루 소개 크루 소개 크루 소개 크루 소개 크루 소개 크루 소개 크루 소개 크루 소개 크루 소개 크루 소개 크루 소개 크루 소개 크루 소개 크루 소개 크루 소개 크루 소개 크루 소개 크루 소개 크루 소개 크루 소개 크루 소개 크루 소개 크루 소개 크루 소개 크루 소개 크루 소개 크루 소개',
      subLocation: '유성구',
      participantCount: 8,
      totalCount: 10,
      imageUrl:
        'https://crewcrew.s3.ap-northeast-2.amazonaws.com/crew/4d0c5851-e6e2-4919-897a-b8d4e88a4f72',
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
      title: '같이 물장구칠사람',
      mainCategory: '기타',
      subCategory: '스키',
      mainLocation: '대전광역시',
      introduce: '크루 소개',
      subLocation: '유성구',
      participantCount: 1,
      totalCount: 10,
      imageUrl:
        'https://crewcrew.s3.ap-northeast-2.amazonaws.com/crew/4d0c5851-e6e2-4919-897a-b8d4e88a4f72',
      totalGatheringCount: 1,
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
      title: '같이 물장구칠사람',
      mainCategory: '기타',
      subCategory: '스키',
      mainLocation: '대전광역시',
      introduce: '',
      subLocation: '유성구',
      participantCount: 2,
      totalCount: 10,
      imageUrl:
        'https://crewcrew.s3.ap-northeast-2.amazonaws.com/crew/4d0c5851-e6e2-4919-897a-b8d4e88a4f72',
      totalGatheringCount: 1,
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
