// GatheringDetailModalContainer.stories.tsx
import React, { useEffect, useState } from 'react';
import { Button } from '@mantine/core';
import { action } from '@storybook/addon-actions';
import { Meta, StoryFn } from '@storybook/react';
import GatheringDetailModalContainer, { GatheringDetailModalContainerProps } from './container';

const meta: Meta = {
  title: 'components/gathering-detail-modal',
  component: GatheringDetailModalContainer,
  argTypes: {
    opened: { control: 'boolean' },
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '크루 상세 페이지에서 약속 카드를 클릭하면 열리는 약속 상세 모달입니다.',
      },
    },
  },
};

export default meta;

const Template: StoryFn<GatheringDetailModalContainerProps> = function GatheringDetailModalStory({
  opened,
  data,
}: GatheringDetailModalContainerProps) {
  const [isOpened, setIsOpened] = useState(opened);

  const handleOpen = () => {
    action('Modal Opened')();
    setIsOpened(true);
  };

  const handleClose = () => {
    action('Modal Closed')();
    setIsOpened(false);
  };

  useEffect(() => {
    setIsOpened(opened);
  }, [opened]);

  return (
    <>
      <Button onClick={handleOpen}>Open Modal</Button>
      <GatheringDetailModalContainer opened={isOpened} close={handleClose} data={data} />
    </>
  );
};

export const ModalWithUser = Template.bind({});
ModalWithUser.args = {
  opened: false,
  data: {
    crewId: 1,
    id: 1,
    title: '신나는 운동...즐거운..코딩..',
    introduce: '공지사항입니다. 다들 이번 약속 잊지 않으셨죠? 꼭 참여 부탁드립니다~',
    dateTime: '2024-10-29T00:32:12.306Z',
    location: '서울시 강남구 역삼동 오피스타워 3층',
    currentCount: 3,
    totalCount: 10,
    imageUrl:
      'https://www.dabur.com/Blogs/Doshas/Importance%20and%20Benefits%20of%20Yoga%201020x450.jpg',
    liked: false,
    gatheringCaptain: false,
    participant: false,
    participants: [
      {
        id: 1,
        profileImageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUMrcQB5OJ-ETzPc6wHnjxjC-36__MGw3JcA&s',
        nickname: '럽윈즈올',
        email: 'youl@email.com',
      },
      {
        id: 2,
        profileImageUrl:
          'https://imgcdn.stablediffusionweb.com/2024/5/13/c0541236-e690-4dff-a27e-30a0355e5ea0.jpg',
        nickname: '모닝러너',
        email: 'youl@email.com',
      },
      {
        id: 3,
        profileImageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUMrcQB5OJ-ETzPc6wHnjxjC-36__MGw3JcA&s',
        nickname: '동글동글이',
        email: 'youl@email.com',
      },
    ],
  },
};

export const ModalWithCaptain = Template.bind({});
ModalWithCaptain.args = {
  opened: false,
  data: {
    crewId: 1,
    id: 2,
    title: '신나는 운동...즐거운..코딩..',
    introduce: '공지사항입니다. 다들 이번 약속 잊지 않으셨죠? 꼭 참여 부탁드립니다~',
    dateTime: '2024-10-29T00:32:12.306Z',
    location: '서울시 강남구 역삼동 오피스타워 3층',
    currentCount: 3,
    totalCount: 10,
    imageUrl:
      'https://www.dabur.com/Blogs/Doshas/Importance%20and%20Benefits%20of%20Yoga%201020x450.jpg',
    liked: false,
    gatheringCaptain: true,
    participant: true,
    participants: [
      {
        id: 1,
        profileImageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUMrcQB5OJ-ETzPc6wHnjxjC-36__MGw3JcA&s',
        nickname: '럽윈즈올',
        email: 'youl@email.com',
      },
      {
        id: 2,
        profileImageUrl:
          'https://imgcdn.stablediffusionweb.com/2024/5/13/c0541236-e690-4dff-a27e-30a0355e5ea0.jpg',
        nickname: '모닝러너',
        email: 'youl@email.com',
      },
      {
        id: 3,
        profileImageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUMrcQB5OJ-ETzPc6wHnjxjC-36__MGw3JcA&s',
        nickname: '동글동글이',
        email: 'youl@email.com',
      },
    ],
  },
};

export const ModalWithCrew = Template.bind({});
ModalWithCrew.args = {
  opened: false,
  data: {
    crewId: 1,
    id: 3,
    title: '아침 타임 에너지 요가',
    introduce: '공지사항입니다. 다들 이번 약속 잊지 않으셨죠? 꼭 참여 부탁드립니다~',
    dateTime: '2024-10-30T00:32:12.306Z',
    location: '서울시 강남구 역삼동 오피스타워 3층',
    currentCount: 3,
    totalCount: 10,
    imageUrl:
      'https://www.dabur.com/Blogs/Doshas/Importance%20and%20Benefits%20of%20Yoga%201020x450.jpg',
    liked: false,
    gatheringCaptain: false,
    participant: true,
    participants: [
      {
        id: 1,
        profileImageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUMrcQB5OJ-ETzPc6wHnjxjC-36__MGw3JcA&s',
        nickname: '럽윈즈올',
        email: 'youl@email.com',
      },
      {
        id: 2,
        profileImageUrl:
          'https://imgcdn.stablediffusionweb.com/2024/5/13/c0541236-e690-4dff-a27e-30a0355e5ea0.jpg',
        nickname: '모닝러너',
        email: 'youl@email.com',
      },
      {
        id: 3,
        profileImageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUMrcQB5OJ-ETzPc6wHnjxjC-36__MGw3JcA&s',
        nickname: '동글동글이',
        email: 'youl@email.com',
      },
    ],
  },
};
