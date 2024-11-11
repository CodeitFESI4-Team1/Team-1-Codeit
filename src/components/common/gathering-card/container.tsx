'use client';

import { useEffect, useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { getGathering } from '@/src/_apis/gathering/gathering-apis';
import GatheringDetailModalContainer from '@/src/app/(crew)/crew/_components/gathering-detail-modal/container';
import { GatheringDetailType, GatheringType } from '@/src/types/gathering-data';
import GatheringCardPresenter from './presenter';

interface GatheringCardContainerProps extends GatheringType {
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
  liked: initialIsLiked,
  className,
}: GatheringCardContainerProps) {
  const [opened, { open, close }] = useDisclosure(false);
  const [gatheringData, setGatheringData] = useState<GatheringDetailType | null>(null);
  const [error, setError] = useState(false);

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

  // Fix: 추후 수정
  useEffect(() => {
    const fetchGatheringDetail = async () => {
      setError(false);
      try {
        const data = await getGathering();
        setGatheringData(data);
      } catch {
        setError(true);
      }
    };

    if (opened) {
      fetchGatheringDetail();
    }
  }, [opened]);

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
