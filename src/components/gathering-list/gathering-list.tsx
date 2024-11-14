'use client';

import { useState } from 'react';
import { Pagination } from '@mantine/core';
import { cn } from '@/src/utils/cn';
import GatheringCard from '@/src/components/common/gathering-card/container';
import { GatheringResponseType } from '@/src/types/gathering-data';

interface GatheringListProps {
  gatheringData: GatheringResponseType;
}

export default function GatheringList({ gatheringData }: GatheringListProps) {
  const [page, setPage] = useState(1);

  // 데이터 추출
  const { content, pageSize, totalElements } = gatheringData;
  const limit = pageSize ?? 6;
  const currentPageData = content.slice((page - 1) * limit, page * limit);

  return (
    <div className="mx-auto max-w-[1200px] px-4">
      <div
        className={cn(
          'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
          'mx-auto justify-items-center gap-4',
          'md:min-h-[962px] lg:min-h-[636px]',
        )}
      >
        {currentPageData.map((card) => (
          <GatheringCard {...card} key={card.id} liked={true} />
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Pagination
          total={Math.ceil(totalElements / limit)}
          value={page}
          onChange={setPage}
          classNames={{
            control: cn(
              'data-[active="true"]:text-blue-500 data-[active="true"]:font-bold',
              'border-none bg-transparent hover:bg-transparent',
            ),
          }}
          styles={{
            control: {
              '&[data-active]': {
                backgroundColor: 'transparent',
                fontWeight: 'var(--pagination-active-font-weight)',
                color: 'var(--pagination-active-color)',
                boxShadow: 'none',
              },
            },
          }}
          size="sm"
        />
      </div>
    </div>
  );
}
