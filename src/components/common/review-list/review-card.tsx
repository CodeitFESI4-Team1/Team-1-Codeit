'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Button, Menu } from '@mantine/core';
import Heart from '@/public/assets/icons/ic-heart';
import menu from '@/public/assets/icons/ic-menu.svg';

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

// NOTE: 추후 reviewHeart 컴포넌트로 교체
function MockScore({ score }: { score: number }) {
  const filledHearts = Math.ceil((score / 100) * 5);

  return (
    <div className="flex gap-2">
      {Array.from({ length: 5 }).map((_, index) => (
        <Heart key={`${score - index}`} fill={index < filledHearts ? '#EA580C' : '#E5E7EB'} />
      ))}
    </div>
  );
}

export default function ReviewCard({
  score,
  comment,
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

  // NOTE: Date를 YYYY.MM.DD 형식으로 변환
  const formatDate = (date: Date) => {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');

    return `${yyyy}.${mm}.${dd}`;
  };

  const reviewDate = formatDate(createdAt);

  return (
    <div
      role="presentation"
      onClick={handleClick}
      onMouseEnter={handlePrefetch}
      className={`flex gap-[15px] lg:gap-[40px] border-b-[2px] h-full border-b-[#e6e6e6] ${clickable ? 'cursor-pointer' : 'cursor-default'}`}
    >
      {imageAvailable && (
        <div className="relative w-[120px] h-[120px] lg:h-[200px] md:h-[180px] md:w-[180px] lg:w-[200px] flex-shrink-0 bg-red-500">
          <Image src={gathering.image} alt={gathering.name} fill objectFit="cover" />
        </div>
      )}
      <div
        className={`flex-start flex w-full flex-col items-start py-4 pr-[20px] lg:pr-[40px] ${imageAvailable ? 'justify-between' : 'pl-[20px] lg:pl-[40px]'}`}
      >
        <div className="flex flex-start flex-col">
          <MockScore score={score} />
          <p className="mb-2 mt-2.5 text-sm font-medium">{comment}</p>
        </div>
        <div className="flex justify-between w-full">
          <div className="flex items-center text-xs w-fit flex-shrink-0">
            {!isMine && (
              <>
                <span className="relative h-6 w-6 rounded-full overflow-hidden">
                  <Image src={user.image} alt={user.name} fill objectFit="cover" />
                </span>
                <span className="relative block w-fit px-2 after:absolute after:right-0 after:content-['|'] mr-3">
                  {user.name}
                </span>
              </>
            )}
            <span className="text-gray-500">{reviewDate}</span>
          </div>
          {isMine && (
            <>
              <Menu position="top" offset={2}>
                <Menu.Target>
                  <Image
                    src={menu}
                    alt="더보기메뉴"
                    className="block md:hidden rounded-full border-[1px] border-[#DBDBDB]"
                    width={25}
                    height={25}
                    onClick={(e: React.MouseEvent) => {
                      e.stopPropagation();
                    }}
                  />
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item onClick={handleDelete}>리뷰 삭제하기</Menu.Item>
                </Menu.Dropdown>
              </Menu>
              <Button onClick={handleDelete} className="hidden md:block">
                리뷰 삭제하기
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
