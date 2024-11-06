import { useCallback, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useGetGatheringQuery } from '@/src/_queries/gathering/gathering-queries';
import GatheringDetailModalContainer from '@/src/app/(crew)/crew/_components/gathering-detail-modal/container';
import { GatheringDetailType } from '@/src/types/gathering-data';
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
  const [isOpened, setIsOpened] = useState(false);
  const { data: modalData } = useQuery<GatheringDetailType>(useGetGatheringQuery());

  const handleCardClick = useCallback(() => {
    setIsOpened(true);
    // TODO: retry or refetch사용해서 useQuery부분 안으로 넣기
  }, []);

  const handleLikeToggle = useCallback(() => {
    alert('좋아요 토글됨'); // TODO: 좋아요 토글 로직 구현
  }, []);

  return (
    <div>
      <ScheduledGatheringCardPresenter
        data={data}
        onClick={handleCardClick}
        onLikeToggle={handleLikeToggle}
      />
      {modalData && (
        <GatheringDetailModalContainer
          opened={isOpened}
          close={() => {
            setIsOpened(false);
          }}
          data={modalData}
        />
      )}
    </div>
  );
}
