'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Menu } from '@mantine/core';
import { ReviewerType } from '@/src/types/review';
import Heart from '@/public/assets/icons/ic-heart';
import menu from '@/public/assets/icons/ic-menu.svg';

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
  gatheringName?: string;

  reviewer?: ReviewerType;
}

// NOTE: 추후 reviewHeart 컴포넌트로 교체
function MockScore({ score }: { score: number }) {
  const filledHearts = Math.ceil((score / 100) * 5);

  return (
    <div className="flex gap-[5px]">
      {Array.from({ length: 5 }).map((_, index) => (
        <Heart key={`${score - index}`} fill={index < filledHearts ? '#3388FF' : '#E5E7EB'} />
      ))}
    </div>
  );
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
  reviewer,
}: ReviewCardProps) {
  const [prefetched, setPrefetched] = useState(new Set());
  const CREWPAGE = `/detail/${crewId}`;
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

  // const reviewDate = formatDate(createdAt);

  return (
    <div
      role="presentation"
      onClick={handleClick}
      onMouseEnter={handlePrefetch}
      className={`flex h-full gap-[15px] border-b-[2px] border-b-[#e6e6e6] lg:gap-[40px] ${clickable ? 'cursor-pointer' : 'cursor-default'}`}
    >
      <div
        className={`flex-start 'justify-between' flex w-full flex-col items-start py-4 pr-[20px] lg:pr-[40px]`}
      >
        <div className="flex-start flex flex-col">
          <MockScore score={rate} />
          <p className="mb-2 mt-2.5 text-sm font-medium">{comment}</p>
        </div>
        <div className="flex w-full justify-between">
          <div className="flex w-fit flex-shrink-0 items-center text-xs">
            {!isMine && (
              <>
                <span className="relative h-6 w-6 overflow-hidden rounded-full">
                  {reviewer && (
                    <Image src={reviewer.imageUrl} alt={reviewer.nickname} fill objectFit="cover" />
                  )}
                </span>
                <span className="relative mr-3 block w-fit px-2 after:absolute after:right-0 after:content-['|']">
                  {reviewer?.nickname}
                </span>
              </>
            )}
            {/* <span className="text-gray-500">{reviewDate}</span> */}
          </div>
          {isMine && (
            <Menu position="top" offset={2}>
              <Menu.Target>
                <Image
                  src={menu}
                  alt="더보기메뉴"
                  className="block rounded-full hover:bg-[#f2f2f2]"
                  width={25}
                  height={25}
                  onClick={(e: React.MouseEvent) => {
                    e.stopPropagation();
                  }}
                />
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item onClick={handleDelete}>삭제하기</Menu.Item>
              </Menu.Dropdown>
            </Menu>
          )}
        </div>
      </div>
    </div>
  );
}
