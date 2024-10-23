'use client';

import { useState } from 'react';
import GatheringCardPresenter from './presenter';

interface GatheringCardContainerProps {
  title: string;
  date: string;
  location: string;
  currentCount: number;
  totalCount: number;
  imageUrl: string;
  isLiked: boolean;
  // onLikeToggle: () => void;
  className?: string;
}

export default function GatheringCard({
  title,
  date,
  location,
  currentCount,
  totalCount,
  imageUrl,
  isLiked: initialIsLiked,
  className,
}: GatheringCardContainerProps) {
  // 날짜 비교
  const gatheringDate = new Date(date);
  const today = new Date();
  const isPast = gatheringDate < today;

  // 임시 찜하기
  const [isLiked, setIsLiked] = useState(initialIsLiked);

  // 추후 찜하기 컴포넌트 작성되면 수정
  const handleLikeToggle = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <GatheringCardPresenter
      isPast={isPast}
      title={title}
      date={date}
      location={location}
      currentCount={currentCount}
      totalCount={totalCount}
      imageUrl={imageUrl}
      isLiked={isLiked}
      onLikeToggle={handleLikeToggle}
      onClick={() => alert('카드클릭!')}
      className={className}
    />
  );
}
