'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import ProgressBar from '@/src/components/common/progress-bar/index';
import { MainCrewList } from '@/src/types/crew-card';
import Check from '@/public/assets/icons/ic-check.svg';
import IcoUser from '@/public/assets/icons/ic-user.svg';
import Profiles from './profiles';

interface CrewCardProps extends MainCrewList {
  inWhere?: 'my-crew' | 'main-crew';
}

export default function CrewCard({
  id,
  title,
  mainLocation,
  subLocation,
  participantCount,
  totalCount,
  imageUrl,
  isConfirmed,
  totalGatheringCount,
  crewMembers,
  inWhere,
}: CrewCardProps) {
  const [prefetched, setPrefetched] = useState(new Set());
  const CREWPAGE = `/crew/detail/${id}`;
  const router = useRouter();

  const handleCardClick = () => {
    router.push(CREWPAGE);
  };

  const handleCardMouseUp = () => {
    if (!prefetched.has(CREWPAGE)) {
      router.prefetch(CREWPAGE);
      setPrefetched(new Set(prefetched).add(CREWPAGE));
    }
  };

  return (
    <div
      role="presentation"
      onClick={() => router.push(CREWPAGE)}
      className="relative mx-auto flex h-[430px] w-full animate-fade cursor-pointer flex-col overflow-hidden rounded-[14px] bg-white shadow-bg md:h-[203px] md:flex-row"
    >
      {/* 썸네일 */}
      <div className="relative h-[203px] w-full flex-shrink-0 md:w-[230px]">
        <Image fill objectFit="cover" alt={title} src={imageUrl} />
      </div>

      <div className="flex w-full flex-col justify-between p-6 sm:h-[238px] sm:px-4 sm:pt-4 md:h-[203px]">
        <div>
          <div className="flex flex-col gap-1">
            <span className="max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap pr-4 text-lg font-semibold">
              {title}
            </span>
            <span className="text-base font-medium">
              | {mainLocation} {subLocation}
            </span>
          </div>
          <span className="text-sm font-semibold text-blue-600">
            {`현재 ${totalGatheringCount}개의 약속이 개설되어 있습니다.`}
          </span>
        </div>
        <div className="flex w-full gap-8 pt-[31px]">
          <div className="flex flex-grow flex-col items-start gap-2">
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center space-x-2">
                <Image src={IcoUser} alt="모집 인원 중 참여 인원" width={20} height={20} />
                <span className="text-base font-medium">
                  {participantCount}/{totalCount}
                </span>
                {inWhere === 'my-crew' && (
                  <span>
                    <Profiles size="medium" profiles={crewMembers ?? []} />
                  </span>
                )}
              </div>
              {isConfirmed && (
                <span className="flex items-center gap-[1px] text-blue-600">
                  <Image src={Check} alt="아이콘" width={24} height={24} aria-hidden="true" />
                  <span className="text-sm font-medium"> 모집 완료</span>
                </span>
              )}
            </div>
            <ProgressBar total={totalCount} current={participantCount} />
          </div>
        </div>
      </div>
    </div>
  );
}
