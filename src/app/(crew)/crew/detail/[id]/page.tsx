'use client';

import { Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import CreateGatheringModalContainer from '@/src/app/(crew)/crew/_components/create-gathering-modal/container';
import GatheringDetailModalContainer from '@/src/app/(crew)/crew/_components/gathering-detail-modal/container';
import { CreateGatheringRequestType } from '@/src/types/gathering-data';

const mockData = {
  id: 1,
  title: '아침 타임 에너지 요가',
  introduce: '공지사항입니다. 다들 이번 약속 잊지 않으셨죠? 꼭 참여 부탁드립니다~',
  dateTime: '2024-10-30T00:32:12.306Z',
  location: '서울시 강남구 역삼동 오피스타워 3층',
  currentCount: 5,
  totalCount: 10,
  imageUrl:
    'https://www.dabur.com/Blogs/Doshas/Importance%20and%20Benefits%20of%20Yoga%201020x450.jpg',
  isLiked: false,
  isGatherCaptain: false,
  isParticipant: true,
  participants: [
    {
      id: 1,
      profileImageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUMrcQB5OJ-ETzPc6wHnjxjC-36__MGw3JcA&s',
      nickname: '럽윈즈올',
      email: 'user@email.com',
    },
    {
      id: 2,
      profileImageUrl:
        'https://imgcdn.stablediffusionweb.com/2024/5/13/c0541236-e690-4dff-a27e-30a0355e5ea0.jpg',
      nickname: '모닝러너',
      email: 'user@email.com',
    },
    {
      id: 3,
      profileImageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUMrcQB5OJ-ETzPc6wHnjxjC-36__MGw3JcA&s',
      nickname: '동글동글이',
      email: 'user@email.com',
    },
    {
      id: 4,
      profileImageUrl:
        'https://imgcdn.stablediffusionweb.com/2024/5/13/c0541236-e690-4dff-a27e-30a0355e5ea0.jpg',
      nickname: '해보자고',
      email: 'user@email.com',
    },
    {
      id: 5,
      profileImageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUMrcQB5OJ-ETzPc6wHnjxjC-36__MGw3JcA&s',
      nickname: '두잇저스트',
      email: 'user@email.com',
    },
    {
      id: 6,
      profileImageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUMrcQB5OJ-ETzPc6wHnjxjC-36__MGw3JcA&s',
      nickname: '럽윈즈올',
      email: 'user@email.com',
    },
    {
      id: 7,
      profileImageUrl:
        'https://imgcdn.stablediffusionweb.com/2024/5/13/c0541236-e690-4dff-a27e-30a0355e5ea0.jpg',
      nickname: '모닝러너',
      email: 'user@email.com',
    },
    {
      id: 8,
      profileImageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUMrcQB5OJ-ETzPc6wHnjxjC-36__MGw3JcA&s',
      nickname: '동글동글이',
      email: 'user@email.com',
    },
  ],
};

// TODO : 임시로 작성됨. GatheringCardContainer 안쪽으로 이동 예정
export default function CrewDetailPage() {
  const [createModalOpened, { open: openCreateModal, close: closeCreateModal }] =
    useDisclosure(false);
  const [detailModalOpened, { open: openDetailModal, close: closeDetailModal }] =
    useDisclosure(false);

  const initialValue: CreateGatheringRequestType = {
    title: '',
    introduce: '',
    dateTime: '',
    location: '',
    totalCount: 0,
    imageUrl: null,
  };

  return (
    <div className="container mx-auto my-0 max-w-pc px-5 lg:px-0">
      <Button onClick={openCreateModal}>약속 만들기</Button>
      <CreateGatheringModalContainer
        opened={createModalOpened}
        close={closeCreateModal}
        data={initialValue}
      />
      <Button onClick={openDetailModal}>Open modal</Button>
      <GatheringDetailModalContainer
        opened={detailModalOpened}
        close={closeDetailModal}
        data={mockData}
      />
    </div>
  );
}
