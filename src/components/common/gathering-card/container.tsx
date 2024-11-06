'use client';

import { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import GatheringDetailModalContainer from '@/src/app/(crew)/crew/_components/gathering-detail-modal/container';
import { GatheringDetailType } from '@/src/types/gathering-data';
import GatheringCardPresenter from './presenter';

interface GatheringCardContainerProps {
  id: number;
  title: string;
  dateTime: string;
  location: string;
  currentCount: number;
  totalCount: number;
  imageUrl: string;
  isLiked: boolean;
  // onLikeToggle: () => void;
  className?: string;
}

const dummyGatheringData: GatheringDetailType = {
  id: 1,
  title: '모임이름',
  dateTime: '2024-12-31T10:00:00',
  location: '경기 과천시 중앙동 관악산',
  currentCount: 2,
  totalCount: 10,
  imageUrl:
    'https://images.unsplash.com/photo-1601758260892-a62c486ace97?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  isLiked: false,
  introduce: '이 모임은 예시 모임입니다. 함께 즐거운 시간을 보낼 수 있는 모임이에요!',
  isGatherCaptain: true,
  isParticipant: true,
  participants: [
    {
      id: 1,
      profileImageUrl: 'https://i.pinimg.com/564x/e2/25/bb/e225bb492dc7a20a549f3c0abec28eb8.jpg',
      nickname: '가나다',
      email: 'hong@example.com',
    },
    {
      id: 2,
      profileImageUrl: 'https://i.pinimg.com/564x/9d/b8/86/9db886bb5475cc35a7f450831f4125bc.jpg',
      nickname: '라마바',
      email: 'kim@example.com',
    },
    {
      id: 3,
      profileImageUrl: '',
      nickname: '가나다',
      email: 'lee@example.com',
    },
  ],
};

export default function GatheringCard({
  id,
  title,
  dateTime,
  location,
  currentCount,
  totalCount,
  imageUrl,
  isLiked: initialIsLiked,
  className,
}: GatheringCardContainerProps) {
  const [opened, { open, close }] = useDisclosure(false);

  // 날짜 비교
  const gatheringDate = new Date(dateTime);
  const today = new Date();
  const isPast = gatheringDate < today;

  // 24시간 이내인지 확인
  const timeDifference = gatheringDate.getTime() - today.getTime();
  const isWithin24Hours = timeDifference > 0 && timeDifference <= 24 * 60 * 60 * 1000;

  // 마감 시간 문자열 생성
  const deadlineMessage = `오늘 ${gatheringDate.getHours()}시 마감`;

  // 임시 찜하기
  const [isLiked, setIsLiked] = useState(initialIsLiked);

  // 추후 찜하기 컴포넌트 작성되면 수정
  const handleLikeToggle = () => {
    setIsLiked((prev) => !prev);
  };

  const openModal = () => {
    // TODO: 모임 상세보기 API 연결
    open();
  };

  return (
    <>
      <GatheringCardPresenter
        id={id}
        isPast={isPast}
        deadlineMessage={deadlineMessage}
        isWithin24Hours={isWithin24Hours}
        title={title}
        dateTime={dateTime}
        location={location}
        currentCount={currentCount}
        totalCount={totalCount}
        imageUrl={imageUrl}
        isLiked={isLiked}
        onLikeToggle={handleLikeToggle}
        onClick={openModal}
        className={className}
      />
      {opened && (
        <GatheringDetailModalContainer opened={opened} close={close} data={dummyGatheringData} />
      )}
    </>
  );
}
