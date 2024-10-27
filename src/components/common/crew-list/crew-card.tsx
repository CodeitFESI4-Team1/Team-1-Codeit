import Image from 'next/image';
import { Button } from '@mantine/core';
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
  name: string;
  location: string;
  participantCount: number;
  capacity: number;
  isConfirmed: boolean;
  thumbnail: string;
  canceledDate?: Date;
}

export default function CrewCard({
  name,
  location,
  participantCount,
  capacity,
  isConfirmed,
  thumbnail,
  canceledDate = undefined,
}: CrewCardProps) {
  return (
    <div className="relative flex w-full flex-col h-fit md:flex-row md:h-[204px] rounded-[14px] overflow-hidden">
      <span className="relative h-[156px] md:h-full w-full md:w-[280px] flex-shrink-0">
        <Image fill objectFit="cover" alt={name} src={thumbnail} />
      </span>
      <div className="p-4 w-full flex flex-col justify-between">
        <div className="flex gap-2">
          <span>{name}</span>
          <span>|</span>
          <span>{location}</span>
        </div>
        <div className="flex gap-8 w-full">
          <div className="flex-grow">
            <span>
              {participantCount}/{capacity}
            </span>
            {isConfirmed && <span>개설 확정</span>}
            <ProgressBar total={capacity} current={participantCount} />
          </div>
          <Button className="flex-shrink-0">크루 페이지로</Button>
        </div>
      </div>
      {canceledDate && (
        <div className="absolute bg-black bg-opacity-60 w-full h-full flex items-center justify-center text-white">
          취소된 모임이에요.
        </div>
      )}
    </div>
  );
}
