import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { ApiError } from 'next/dist/server/api-utils';
import { useGetGatheringDetailQuery } from '@/src/_queries/gathering/gathering-detail-queries';
import GatheringDetailModalContainer from '@/src/app/(crew)/crew/detail/[id]/_components/gathering-detail-modal/container';
import ScheduledGatheringCardPresenter from './presenter';

interface ScheduledGatheringCardContainerProps {
  data: {
    id: number;
    crewId: number;
    crewTitle: string;
    crewMainLocation: string;
    crewSubLocation: string;
    title: string;
    dateTime: string;
    currentCount: number;
    totalCount: number;
    imageUrl: string;
    liked: boolean;
  };
}

export default function ScheduledGatheringCardContainer({
  data,
}: ScheduledGatheringCardContainerProps) {
  const [isOpened, setIsOpened] = useState(false);
  const { data: gatheringData, error } = useGetGatheringDetailQuery(data.crewId, data.id);

  useEffect(() => {
    if (error) {
      if (error instanceof ApiError) {
        const errorData = JSON.parse(error.message);
        if (errorData.status === 'NOT_FOUND') {
          toast.error('모임 정보를 찾을 수 없습니다.');
        }
      } else {
        toast.error('데이터 통신에 실패했습니다.');
      }
    }
  }, [error]);

  const handleCardClick = useCallback(() => setIsOpened(true), []);
  const handleCloseModal = useCallback(() => setIsOpened(false), []);

  return (
    <div>
      <ScheduledGatheringCardPresenter data={data} onClick={handleCardClick} />
      {gatheringData && (
        <GatheringDetailModalContainer
          opened={isOpened}
          close={handleCloseModal}
          data={gatheringData}
        />
      )}
    </div>
  );
}
