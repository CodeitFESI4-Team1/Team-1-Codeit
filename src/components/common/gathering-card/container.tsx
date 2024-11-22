'use client';

import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useDisclosure } from '@mantine/hooks';
import { useGetGatheringDetailQuery } from '@/src/_queries/gathering/gathering-detail-queries';
import GatheringDetailModalContainer from '@/src/app/(crew)/crew/detail/[id]/_components/gathering-detail-modal/container';
import { GatheringType } from '@/src/types/gathering-data';
import GatheringCardPresenter from './presenter';

interface GatheringCardContainerProps extends GatheringType {
  className?: string;
  crewId: number;
  onLike: (gatheringId: number) => Promise<void>;
  onUnlike: (gatheringId: number) => Promise<void>;
  onModalAction: () => void;
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
  onModalAction,
}: GatheringCardContainerProps) {
  const [opened, { open, close }] = useDisclosure(false);
  const [isLiked, setIsLiked] = useState(initialIsLiked);
  const gatheringDate = new Date(dateTime);
  const today = new Date();
  const isPast = gatheringDate < today;

  // 24시간 이내인지 확인
  const timeDifference = gatheringDate.getTime() - today.getTime();
  const isWithin24Hours = timeDifference > 0 && timeDifference <= 24 * 60 * 60 * 1000;

  // 마감 시간 문자열 생성
  const deadlineMessage = `오늘 ${gatheringDate.getHours()}시 마감`;

  // API 데이터 가져오기 (모달이 열릴 때만 호출)
  const {
    data: gatheringData,
    error,
    refetch,
  } = useGetGatheringDetailQuery(crewId, id, {
    enabled: false, // 초기에는 비활성화
  });

  // 모달 열기
  const openModal = () => {
    refetch(); // 모달 열릴 때 데이터 가져오기
    open();
  };

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
    } catch (likeError) {
      toast.error('찜 상태를 업데이트하는 데 실패했습니다.');
    }
  };

  // 에러 처리
  useEffect(() => {
    if (error) {
      toast.error('데이터를 가져오는 데 실패했습니다.');
    }
  }, [error]);

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
        <GatheringDetailModalContainer
          opened={opened}
          close={close}
          data={gatheringData}
          onUpdate={onModalAction}
        />
      )}
    </>
  );
}
