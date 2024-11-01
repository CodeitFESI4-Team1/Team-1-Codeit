import React, { forwardRef } from 'react';
import { InfiniteData } from '@tanstack/react-query';
import { CrewCardInformResponse } from '@/src/types/crew-card';
import CrewCard from './crew-card';

export interface CrewCardListProps {
  data: InfiniteData<CrewCardInformResponse> | undefined;
  isFetchingNextPage: boolean;
  isWide?: boolean;
}

function CrewCardList(
  { data, isFetchingNextPage, isWide = false }: CrewCardListProps,
  ref: React.Ref<HTMLDivElement>,
) {
  const crewDataList = data?.pages.flatMap((page) => page.data) ?? [];

  if (!crewDataList) return <p>loading...</p>;

  return (
    <>
      <ul
        className={`mx-auto mb-8 flex w-[343px] flex-col gap-8 md:w-[744px] lg:w-[1107px] ${!isWide ? 'lg:grid lg:grid-cols-2 lg:gap-x-4 lg:gap-y-8' : ''}`}
      >
        {crewDataList.map((inform) => (
          <li key={inform.crewId}>
            <CrewCard
              id={inform.crewId}
              capacity={inform.capacity}
              isConfirmed={inform.isConfirmed}
              location={inform.location}
              name={inform.name}
              thumbnail={inform.images[0].imagePath}
              participantCount={inform.participantCount}
              isWide={isWide}
              isClickable
              gatheringCount={inform.gatheringCount}
            />
          </li>
        ))}
      </ul>
      {isFetchingNextPage ? <p>loading...</p> : <div ref={ref} className="h-[1px]" />}
    </>
  );
}

export default forwardRef(CrewCardList);
