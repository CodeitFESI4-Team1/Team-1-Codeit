'use client';

import { useState } from 'react';
import Image from 'next/image';
import Profiles from '@/src/components/common/crew-list/profiles';
import Button from '@/src/components/common/input/button';
import { ParticipantType } from '@/src/types/reviewable-gathering-card';
import person from '@/public/assets/icons/person.svg';
import ReviewingModal from '../reviewing-modal/reviewing-modal';

interface ReviewableGatheringCardProps {
  id: number;
  gatheringName: string;
  dateTime: string;
  currentCount: number;
  totalCount: number;
  imageUrl: string;
  participants: ParticipantType[];
}

// NOTE: 추후 합치기
export function formatDateWithYear(dateString: string) {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return { year, month, day };
}

export default function ReviewableGatheringCard({
  id,
  currentCount,
  dateTime,
  gatheringName,
  imageUrl,
  participants,
  totalCount,
}: ReviewableGatheringCardProps) {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const { year, month, day } = formatDateWithYear(dateTime);

  const profiles = participants.map((participant) => ({
    id: participant.id,
    nickname: participant.nickname,
    profileImageUrl: participant.profileImageUrl,
  }));

  return (
    <div className="flex w-full max-w-[1200px] gap-[20px] border-b-[2px] border-b-gray-200 py-[24px]">
      <span className="relative h-[166px] w-[294px] overflow-hidden rounded-[12px]">
        <Image
          src={imageUrl}
          alt={gatheringName}
          fill
          sizes="(max-width: 744px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="h-full w-full object-cover"
        />
      </span>
      <div className="flex w-full items-end justify-between">
        <div className="flex h-full flex-col items-start justify-between">
          <div>
            <div className="mb-[15px] flex items-center">
              <span className="text-xl font-semibold text-gray-800">{gatheringName}</span>
            </div>
            <div className="flex w-fit items-center">
              <span className="relative inline-block h-[20px] w-[20px]">
                <Image
                  alt="참여 인원"
                  src={person}
                  fill
                  sizes="(max-width: 744px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="h-full w-full object-contain"
                />
              </span>
              <span className="mr-[22px] text-base font-medium text-gray-700">
                {currentCount}/{totalCount}
              </span>
              <Profiles profiles={profiles} />
            </div>
          </div>
          <div className="text-sm font-medium text-gray-700">{`${year}년 ${month}월 ${day}일`}</div>
        </div>
        <Button
          className="bg-blue-500 p-[6px_14px] text-base font-semibold text-white"
          onClick={() => setIsModalOpened(true)}
        >
          리뷰 작성하기
        </Button>
      </div>
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
