'use client';

import { useState } from 'react';
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

  return (
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
      // eslint-disable-next-line no-alert
      onClick={() => alert('카드클릭!')}
      className={className}
    />
  );
}
