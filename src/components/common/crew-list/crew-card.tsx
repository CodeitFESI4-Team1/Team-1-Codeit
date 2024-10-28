'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Button } from '@mantine/core';
import Check from '@/public/assets/icons/ic-check.svg';
import Person from '@/public/assets/icons/ic-person.svg';
import ProgressBar from '../progress-bar';

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
}: CrewCardProps) {
  const [prefetched, setPrefetched] = useState(new Set());
  const CREWPAGE = `/detail/${id}`;

  const router = useRouter();
  const handleButtonClick = () => {
    router.push(CREWPAGE);
  };
  const handleButtonMouseUp = () => {
    if (!prefetched.has(CREWPAGE)) router.prefetch(CREWPAGE);
    setPrefetched(new Set(prefetched).add(CREWPAGE));
  };

  return (
    <div className="relative flex h-fit w-full flex-col overflow-hidden rounded-[14px] bg-white shadow-section md:h-[204px] md:flex-row">
      <span className="relative h-[156px] w-full flex-shrink-0 md:h-full md:w-[280px]">
        <Image fill objectFit="cover" alt={name} src={thumbnail} />
      </span>
      <div className="flex w-full flex-col justify-normal gap-8 p-4 md:justify-between md:gap-0">
        <div className="flex items-center gap-2">
          <span className="typo-xl-semibold">{name}</span>
          <span>|</span>
          <span className="typo-base-medium">{location}</span>
        </div>
        <div className="flex w-full gap-8">
          <div className="flex flex-grow flex-col items-start gap-2">
            <span className="typo-sm-medium flex items-center gap-2">
              <span className="flex">
                <Image src={Person} alt="모임 인원" width={20} height={20} />
                <span>
                  {participantCount}/{capacity}
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
          <Button
            onClick={handleButtonClick}
            onMouseEnter={handleButtonMouseUp}
            className="typo-sm-semibold flex-shrink-0 bg-blue-500 p-[6px_14px] lg:typo-base-semibold"
          >
            크루 페이지로
          </Button>
        </div>
      </div>
      {canceledDate && (
        <div className="absolute flex h-full w-full items-center justify-center bg-black bg-opacity-60 text-center text-white">
          취소된 모임이에요.🥲 <br /> 다음 기회에 만나요!
        </div>
      )}
    </div>
  );
}
