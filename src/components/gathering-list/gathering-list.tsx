'use client';

import { useState } from 'react';
import { Pagination } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { GatheringType } from '@/src/types/gathering-data';
import GatheringCard from '../common/gathering-card/container';

/* eslint-disable react/no-array-index-key */

interface GatheringListProps {
  gatheringData: {
    data: GatheringType[];
    pagination: {
      totalCount: number;
      page: number;
      limit: number;
    };
  };
}

export default function GatheringList({ gatheringData }: GatheringListProps) {
  const [page, setPage] = useState(1);
  const isMobile = useMediaQuery('(max-width: 744px)');
  const isTablet = useMediaQuery('(min-width: 745px) and (max-width: 1200px)');
  const isDesktop = useMediaQuery('(min-width: 1201px)');

  // 카드 크기 설정
  let cardClassName = '';
  if (isMobile) {
    cardClassName = 'w-[340px] max-w-[400px]';
  } else if (isTablet) {
    cardClassName = 'w-[360px] max-w-[500px]';
  } else {
    cardClassName = 'w-[380px]';
  }

  // 데이터 추출
  const { data, pagination } = gatheringData;
  const limit = pagination?.limit ?? 6;
  const currentPageData = data.slice((page - 1) * limit, page * limit);

  // 페이지네이션을 위한 동적 여백 설정
  const totalCards = currentPageData.length;

  return (
    <div className="mx-auto max-w-[1200px] px-4">
      <div className="justify-items-center grid grid-cols-1 md:grid-cols-2 md:max-w-[1016px] lg:grid-cols-3 gap-4 mx-auto">
        {currentPageData.map((card, id) => (
          <GatheringCard key={id} {...card} className={cardClassName} />
        ))}

        {/* 빈 카드를 추가하여 페이지네이션 위치를 고정 */}
        {isDesktop &&
          totalCards < 4 &&
          Array.from({ length: 4 - totalCards }).map((_, index) => (
            <div key={index} className="w-[380px] h-[280px] bg-transparent" />
          ))}
        {isTablet &&
          totalCards < 3 &&
          Array.from({ length: 3 - totalCards }).map((_, index) => (
            <div key={index} className="w-[360px] h-[280px] bg-transparent" />
          ))}
        {isTablet &&
          totalCards >= 3 &&
          totalCards < 5 &&
          Array.from({ length: 5 - totalCards }).map((_, index) => (
            <div key={index} className="w-[360px] h-[280px] bg-transparent" />
          ))}
      </div>
      <div className="flex justify-center mt-8">
        <Pagination
          total={Math.ceil(pagination.totalCount / limit)}
          value={page}
          onChange={setPage}
          color="indigo"
          radius="md"
        />
      </div>
    </div>
  );
}
