'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Button } from '@mantine/core';
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
  isWide,
}: CrewCardProps) {
  const [prefetched, setPrefetched] = useState(new Set());
  const [maxLength, setMaxLength] = useState(getMaxLength(window.innerWidth));
  // NOTE : 반응형에 따른 제목 text 자르기 위한 useEffect
  useEffect(() => {
    const handleResize = () => {
      setMaxLength(12);
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  });

  const CREWPAGE = `/detail/${id}`;

  const router = useRouter();
  const handleCardClick = () => {
    router.push(CREWPAGE);
  };
  const handleCardMouseUp = () => {
    if (!prefetched.has(CREWPAGE)) router.prefetch(CREWPAGE);
    setPrefetched(new Set(prefetched).add(CREWPAGE));
  };

  // NOTE: textLength에 따라 ... 로 줄이는 함수
  function truncatedText({ text, textLength }: { text: string; textLength: number }) {
    const truncated = text.length > textLength ? `${text.slice(0, textLength)}...` : text;
    return truncated;
  }

  // NOTE: 반응형에 따른 제목 최대 길이 변경
  function getMaxLength(width: number) {
    if (width > 1200) return 20;
    if (width > 744) return 12;
    return 11;
  }

  return (
    <div
      role="presentation"
      onClick={handleCardClick}
      onMouseEnter={handleCardMouseUp}
      className="relative flex h-fit w-full cursor-pointer flex-col overflow-hidden rounded-[14px] bg-white shadow-section md:h-[204px] md:flex-row"
    >
      <span
        className={`relative h-[156px] w-full flex-shrink-0 md:h-full md:w-1/2 ${!isWide ? 'lg:w-[203px]' : ''}`}
      >
        <Image fill objectFit="cover" alt={name} src={thumbnail} />
      </span>
      <div className="flex w-full flex-col justify-normal gap-8 p-4 md:justify-between md:gap-0">
        <div
          className={`flex flex-col items-start gap-2 ${!isWide ? 'lg:flex-col lg:items-start' : 'md:flex-row md:items-center'}`}
        >
          <span className="typo-xl-semibold">
            {truncatedText({ text: name, textLength: maxLength })}
          </span>
          <span className="typo-base-medium">| {location}</span>
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
