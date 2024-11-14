'use client';

import { useEffect, useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { useGetGatheringDetailQuery } from '@/src/_queries/detail/gathering-detail-queries';
import { ApiError } from '@/src/utils/api';
import GatheringDetailModalContainer from '@/src/app/(crew)/crew/_components/gathering-detail-modal/container';
import Toast from '@/src/components/common/toast';
import { GatheringType } from '@/src/types/gathering-data';
import GatheringCardPresenter from './presenter';

interface GatheringCardContainerProps extends GatheringType {
  className?: string;
  crewId: number;
  onLike: (gatheringId: number) => Promise<void>;
  onUnlike: (gatheringId: number) => Promise<void>;
}

export default function GatheringCard({
  id,
  title,
  dateTime,
  location,
  currentCount,
  totalCount,
  imageUrl,
  liked: initialIsLiked,
  className,
  crewId,
  onLike,
  onUnlike,
}: GatheringCardContainerProps) {
  const [opened, { open, close }] = useDisclosure(false);
  const [isLiked, setIsLiked] = useState(initialIsLiked);

  // 날짜 비교
  const gatheringDate = new Date(dateTime);
  const today = new Date();
  const isPast = gatheringDate < today;

  // 24시간 이내인지 확인
  const timeDifference = gatheringDate.getTime() - today.getTime();
  const isWithin24Hours = timeDifference > 0 && timeDifference <= 24 * 60 * 60 * 1000;

  // 마감 시간 문자열 생성
  const deadlineMessage = `오늘 ${gatheringDate.getHours()}시 마감`;

  // 찜하기 상태 업데이트
  const handleLikeToggle = async () => {
    try {
      if (isLiked) {
        await onUnlike(id);
        setIsLiked(false);
      } else {
        await onLike(id);
        setIsLiked(true);
      }
    } catch (error) {
      Toast({ message: '찜 상태를 업데이트하는 데 실패했습니다.', type: 'error' });
    }
  };

  const { data: gatheringData, error } = useGetGatheringDetailQuery(crewId, id);

  useEffect(() => {
    if (error) {
      if (error instanceof ApiError) {
        try {
          const errorData = JSON.parse(error.message);

          if (errorData.status === 'NOT_FOUND') {
            Toast({ message: '모임 정보를 찾을 수 없습니다.', type: 'error' });
          }
        } catch {
          Toast({ message: `Error ${error.status}: ${error.message}`, type: 'error' });
        }
      } else {
        Toast({ message: '데이터 통신에 실패했습니다.', type: 'error' });
      }
    }
  }, [error]);

  const openModal = () => {
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
      {opened && gatheringData && (
        <GatheringDetailModalContainer opened={opened} close={close} data={gatheringData} />
      )}
    </>
  );
}
