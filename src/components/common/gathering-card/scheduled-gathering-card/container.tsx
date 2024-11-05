import { useCallback } from 'react';
import ScheduledGatheringCardPresenter from './presenter';

interface ScheduledGatheringCardContainerProps {
  data: {
    id: number;
    crewTitle: string;
    crewMainLocation: string;
    crewSubLocation: string;
    title: string;
    dateTime: string;
    currentCount: number;
    totalCount: number;
    imageUrl: string;
    isLiked: boolean;
  };
}

export default function ScheduledGatheringCardContainer({
  data,
}: ScheduledGatheringCardContainerProps) {
  const handleCardClick = useCallback(() => {
    alert('카드 클릭됨'); // TODO: 모달 열기 로직 구현
  }, []);

  const handleLikeToggle = useCallback(() => {
    alert('좋아요 토글됨'); // TODO: 좋아요 토글 로직 구현
  }, []);

  return (
    <ScheduledGatheringCardPresenter
      data={data}
      onClick={handleCardClick}
      onLikeToggle={handleLikeToggle}
    />
  );
}
