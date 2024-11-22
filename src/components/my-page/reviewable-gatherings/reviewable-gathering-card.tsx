'use client';

import { useState } from 'react';
import Image from 'next/image';
import { formatCompactDateTime24H } from '@/src/utils/format-date';
import Button from '@/src/components/common/button';
import Profiles from '@/src/components/common/profile/profiles';
import { ParticipantType } from '@/src/types/reviewable-gathering-card';
import person from '@/public/assets/icons/person.svg';
import ReviewingModal from '../reviewing-modal/reviewing-modal';

interface ReviewableGatheringCardProps {
  id: number;
  gatheringName: string;
  location: string;
  dateTime: string;
  currentCount: number;
  totalCount: number;
  imageUrl: string;
  participants: ParticipantType[];
}

export default function ReviewableGatheringCard({
  id,
  currentCount,
  dateTime,
  location,
  gatheringName,
  imageUrl,
  participants,
  totalCount,
}: ReviewableGatheringCardProps) {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const formatDate = formatCompactDateTime24H(dateTime);

  const profiles = participants.map((participant) => ({
    id: participant.id,
    nickname: participant.nickname,
    profileImageUrl: participant.profileImageUrl,
  }));

  return (
    <div className="relative flex w-full max-w-[1200px] flex-wrap gap-4 border-b-[2px] border-b-gray-200 py-6">
      {/* 이미지 영역 */}
      <div className="relative h-28 w-28 flex-shrink-0 overflow-hidden rounded-[12px] md:h-[166px] md:w-[294px]">
        <Image
          src={imageUrl}
          alt={gatheringName}
          fill
          sizes="(max-width: 744px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="h-full w-full object-cover"
        />
      </div>
      {/* 텍스트 및 버튼 영역 */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* 모임 이름 */}
        <div className="mb-[15px] space-y-1">
          <span className="block truncate text-xl font-semibold text-gray-800">
            {gatheringName}
          </span>
          <span className="block truncate text-base font-medium text-gray-700">{location}</span>
        </div>
        {/* 참여 인원 */}
        <div className="flex items-center pb-1">
          <div className="relative inline-block h-[20px] w-[20px] flex-shrink-0">
            <Image
              alt="참여 인원"
              src={person}
              fill
              sizes="(max-width: 744px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="h-full w-full object-contain"
            />
          </div>
          <span className="mr-2 text-base font-medium text-gray-700">
            {currentCount}/{totalCount}
          </span>
          <Profiles profiles={profiles} />
        </div>
        {/* 날짜 */}
        <div className="mt-auto text-sm font-medium text-gray-700">{formatDate}</div>
      </div>
      {/* 리뷰 작성 버튼 */}
      <Button
        className="btn-filled absolute bottom-6 right-0 p-[4px_10px] text-sm md:p-[6px_14px] md:text-base"
        onClick={() => setIsModalOpened(true)}
      >
        <span className="block md:hidden">리뷰 작성</span>
        <span className="hidden md:block">리뷰 작성하기</span>
      </Button>
      {/* 모달 */}
      <ReviewingModal
        gatheringId={id}
        opened={isModalOpened}
        close={() => {
          setIsModalOpened(false);
        }}
      />
    </div>
  );
}
