'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Button } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useApiQuery } from '@/src/hooks/useApi';
import Check from '@/public/assets/icons/ic-check.svg';
import Person from '@/public/assets/icons/ic-person.svg';
import ProgressBar from '../progress-bar';
import Profiles from './profiles';

export type ImageList = {
  imagePath: string;
}[];

export type CrewCardInform = {
  crewId: number;
  type: string;
  subType: string;
  name: string;
  location: string;
  detailedLocation: string;
  participantCount: number;
  capacity: number;
  images: ImageList;
  createdBy: number;
  createdDate: Date;
  updatedDate: Date;
  canceledAt?: Date;
  isConfirmed: boolean;
};

/**
 * CrewCard 컴포넌트
 * @param {number} id - 크루 id
 * @param {string} name - 크루 이름
 * @param {string} location - 크루 지역
 * @param {number} participantCount - 현재 참여 인원
 * @param {number} capacity - 수용 인원
 * @param {boolean} isConfirmed - 개설확정여부
 * @param {string} thumbnail - 메인 이미지
 * @param {Date} canceledDate - 취소날짜
 * @param {boolean} isWide - wide된 상태에서 달라지는 ui 적용
 * @param {boolean} isAlone - 리스트에 속하지 않고 혼자 쓰이는 카드인지
 * @returns {JSX.Element}
 */

interface CrewCardProps {
  id: number;
  name: string;
  location: string;
  participantCount: number;
  capacity: number;
  isConfirmed: boolean;
  thumbnail: string;
  canceledDate?: Date;
  isWide: boolean;
  isAlone?: boolean;
}

export default function CrewCard({
  id,
  name,
  location,
  participantCount,
  capacity,
  isConfirmed,
  thumbnail,
  canceledDate = undefined,
  isAlone = false,
  isWide = !!isAlone,
}: CrewCardProps) {
  const [prefetched, setPrefetched] = useState(new Set());
  const CREWPAGE = `/detail/${id}`;
  const router = useRouter();

  const handleCardClick = () => {
    router.push(CREWPAGE);
  };
  const handleCardMouseUp = () => {
    if (!prefetched.has(CREWPAGE) && !canceledDate) router.prefetch(CREWPAGE);
    setPrefetched(new Set(prefetched).add(CREWPAGE));
  };

  // NOTE: maxLength에 따라 ... 로 줄이는 함수
  function truncatedText({ text, maxLength }: { text: string; maxLength: number }) {
    const truncated = text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
    return truncated;
  }

  const isTablet = useMediaQuery('(min-width: 745px) and (max-width: 1200px)');
  const isDesktop = useMediaQuery('(min-width:1201px)');
  let textLength;

  if (isTablet) {
    textLength = 12;
  } else if (isDesktop) {
    textLength = 20;
  } else {
    textLength = 11;
  }

  // NOTE: 모임 목록 API 받아오기
  const gatheringList = ['gathering1', 'gathering2'];

  return (
    <div
      role="presentation"
      onClick={handleCardClick}
      onMouseEnter={handleCardMouseUp}
      className={`relative flex h-fit cursor-pointer flex-col overflow-hidden rounded-[14px] bg-white shadow-section md:flex-row ${isAlone ? 'w-[369px] md:h-[270px] md:w-[770px] lg:w-[1108px]' : 'w-full md:h-[203px]'}`}
    >
      <span
        className={`relative w-full flex-shrink-0 md:w-1/2 ${!isWide ? 'lg:w-[203px]' : ''} ${isAlone ? 'h-[270px]' : 'h-[167px] md:h-full'}`}
      >
        <Image fill objectFit="cover" alt={name} src={thumbnail} />
      </span>
      <div className="flex w-full flex-col justify-normal gap-8 p-4 md:justify-between md:gap-0">
        <div>
          <div
            className={`flex flex-col items-start gap-2 ${!isWide ? 'lg:flex-col lg:items-start' : 'md:flex-row md:items-center'}`}
          >
            <span className="typo-xl-semibold">
              {truncatedText({ text: name, maxLength: textLength })}
            </span>
            <span className="typo-base-medium">| {location}</span>
          </div>
          <span className="typo-sm-semibold text-blue-600">
            {`현재 ${gatheringList.length}개의 약속이 개설되어 있습니다.`}
          </span>
        </div>
        <div
          className={`flex w-full gap-8 border-t-[2px] border-t-[#E5E7EB] pt-[31px] ${!isWide ? 'lg:gap-4' : ''}`}
        >
          <div className="flex flex-grow flex-col items-start gap-2">
            <span className="typo-sm-medium flex w-full items-center justify-between">
              <span className="flex items-center">
                <Image src={Person} alt="모임 인원" width={20} height={20} />
                <span>
                  {participantCount}/{capacity}
                </span>
                <span className="ml-[22px] hidden md:block">
                  <Profiles id={2} shows={2} />
                </span>
              </span>

              {isConfirmed && (
                <span className="flex items-center gap-[2px] text-blue-600">
                  <Image src={Check} alt="확인" width={24} height={24} /> <span> 개설 확정</span>
                </span>
              )}
            </span>
            <ProgressBar
              mainBarColor="bg-blue-50"
              progressBarColor="bg-blue-400"
              total={capacity}
              current={participantCount}
            />
          </div>
        </div>
      </div>
      {canceledDate && (
        <div className="absolute flex h-full w-full cursor-default items-center justify-center bg-black bg-opacity-60 text-center text-white">
          취소된 모임이에요.🥲 <br /> 다음 기회에 만나요!
        </div>
      )}
    </div>
  );
}
