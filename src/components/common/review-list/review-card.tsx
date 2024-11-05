'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Menu } from '@mantine/core';
import ReviewHearts from '@/src/components/common/review-heart/hearts';
import menu from '@/public/assets/icons/ic-menu.svg';

// import { formatDate } from '@/src/utils/format-date';
// import { formatDate } from '@/src/utils/format-date';

export type Gathering = {
  teamId: number;
  id: number;
  type: string;
  name: string;
  dateTime: Date;
  location: string;
  image: string;
};

export type User = {
  teamId: number;
  id: number;
  name: string;
  image: string;
};

export type Review = {
  teamId: number;
  id: number;
  score: number;
  comment: string;
  createdAt: Date;
  gathering: Gathering;
  user: User;
};

export type ReviewList = Review[];

/**
 * ReviewCard 컴포넌트
 *
 * @param {number} [props.score] - 평점
 * @param {string} [props.comment] - 리뷰 내용
 * @param {Date} [props.createdAt] - 게시 일시
 * @param {User} [props.user] - 게시인
 * @param {boolean} [props.imageAvailable] - 썸네일 이미지 유무, 기본값 'false'
 * @param {boolean} [props.clickable] - 클릭 가능한지, 기본값 'false'
 * @param {boolean}[props.isMine] - 내가 작성한 리뷰인지, 기본값 'false'
 * @param {GatheringInform} [props.gathering] - 크루 관련 정보
 * @returns {JSX.Element} - ReviewCard
 */

export interface GatheringInform {
  id: number;
  image: string;
  name: string;
}

interface ReviewCardProps {
  score: number;
  comment: string;
  createdAt: Date;
  user: User;
  imageAvailable?: boolean;
  clickable?: boolean;
  isMine?: boolean;
  gathering: GatheringInform;
}

export default function ReviewCard({
  score,
  comment,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  createdAt,
  user,
  imageAvailable = false,
  clickable = false,
  isMine = false,
  gathering,
}: ReviewCardProps) {
  const [prefetched, setPrefetched] = useState(new Set());
  const CREWPAGE = `/detail/${gathering.id}`;
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
      {imageAvailable && (
        <div className="relative min-h-[120px] w-[120px] flex-shrink-0 md:min-h-[180px] md:w-[180px] lg:h-[200px] lg:w-[200px]">
          <Image src={gathering.image} alt={gathering.name} fill objectFit="cover" />
        </div>
      )}
      <div
        className={`flex-start flex w-full flex-col items-start py-4 pr-[20px] lg:pr-[40px] ${imageAvailable ? 'justify-between' : 'pl-[20px] lg:pl-[40px]'}`}
      >
        <div className="flex-start flex flex-col">
          <ReviewHearts score={score} />
          <p className="mb-2 mt-2.5 text-sm font-medium">{comment}</p>
        </div>
        <div className="flex w-full justify-between">
          <div className="flex w-fit flex-shrink-0 items-center text-xs">
            {!isMine && (
              <>
                <span className="relative h-6 w-6 overflow-hidden rounded-full">
                  <Image src={user.image} alt={user.name} fill objectFit="cover" />
                </span>
                <span className="relative mr-3 block w-fit px-2 after:absolute after:right-0 after:content-['|']">
                  {user.name}
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
