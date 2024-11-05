'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button, Menu } from '@mantine/core';
import { formatDateWithYear } from '@/src/utils/format-date';
import { ReviewerType } from '@/src/types/review';
import { Profile } from '../profile';
import ReviewHearts from '../review-heart/hearts';

export interface GatheringInform {
  id: number;
  image: string;
  name: string;
}

interface ReviewCardProps {
  rate: number;
  comment: string;
  createdAt: string;
  crewId: number;
  clickable?: boolean;
  isMine?: boolean;

  crewName?: string;
  gatheringLocation?: string;
  gatheringName?: string;

  reviewer?: ReviewerType;
}

export default function ReviewCard({
  rate,
  comment,
  createdAt,
  crewId,
  clickable = false,
  isMine = false,
  crewName,
  gatheringName,
  gatheringLocation,
  reviewer,
}: ReviewCardProps) {
  const [prefetched, setPrefetched] = useState(new Set());
  const CREWPAGE = `crew/detail/${crewId}`;
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (clickable) router.push(CREWPAGE);
  };

  const handlePrefetch = () => {
    if (clickable && !prefetched.has(CREWPAGE)) router.prefetch(CREWPAGE);
    setPrefetched(new Set(prefetched).add(CREWPAGE));
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const { year, month, day } = formatDateWithYear(createdAt);
  const reviewDate = `${year}/${month}/${day}`;

  if (!isMine && !reviewer) throw new Error('나의 카드 리뷰 리스트일시 isMine이 true여야 합니다.');

  return (
    <div className="w-full">
      {isMine && (
        <div className="mb-3 flex w-fit items-center gap-2">
          <span className="text-xl font-semibold text-gray-800">{gatheringName} |</span>
          <span className="text-base font-medium text-gray-700">{gatheringLocation}</span>
        </div>
      )}
      <div
        role="presentation"
        onClick={handleClick}
        onMouseEnter={handlePrefetch}
        className={`flex h-full items-end gap-[15px] ${!isMine ? 'border-b-[2px] border-b-[#e6e6e6] py-4' : 'rounded-[12px] p-6 shadow-bg'} bg-white lg:gap-[40px] ${clickable ? 'cursor-pointer' : 'cursor-default'}`}
      >
        <div className="flex-start flex w-full flex-col items-start justify-between pr-[20px] lg:pr-[40px]">
          {isMine && (
            <span className="mb-6 w-full border-b-[2px] border-b-[#E5E7EB] pb-2">{crewName}</span>
          )}
          <div className="flex-start flex flex-col">
            <ReviewHearts score={rate} />
            <p className="mb-2 mt-2.5 text-sm font-medium">{comment}</p>
          </div>
          <div className={`flex w-fit flex-shrink-0 items-center text-xs ${isMine ? 'mt-4' : ''}`}>
            {!isMine && (
              <>
                {reviewer && <Profile size="small" />}
                <span className="relative mr-3 block w-fit px-2 after:absolute after:right-0 after:content-['|']">
                  {reviewer?.nickname}
                </span>
              </>
            )}
            <span className="text-gray-500">{reviewDate}</span>
          </div>
        </div>
        {isMine && (
          <Button
            variant="outline"
            className="flex-shrink-0 p-[6px_14px] text-base font-semibold"
            onClick={handleDelete}
          >
            리뷰 삭제하기
          </Button>
        )}
      </div>
    </div>
  );
}
