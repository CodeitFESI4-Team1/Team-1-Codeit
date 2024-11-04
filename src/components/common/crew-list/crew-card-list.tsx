import React, { forwardRef } from 'react';
import { InfiniteData } from '@tanstack/react-query';
import { CrewCardInformResponse } from '@/src/types/crew-card';
import CrewCard from './crew-card';

export interface CrewCardListProps {
  data: InfiniteData<CrewCardInformResponse> | undefined;
  isFetchingNextPage: boolean;
}

function CrewCardList(
  { data, isFetchingNextPage }: CrewCardListProps,
  ref: React.Ref<HTMLDivElement>,
) {
  const crewDataList = data?.pages.flatMap((page) => page.data) ?? [];

  if (!crewDataList) return <p>loading...</p>;

  return (
    <>
      <ul className="mx-auto grid w-full grid-cols-1 gap-x-4 gap-y-6 md:grid-cols-2">
        {crewDataList.map((inform) => (
          <li key={inform.crewId} className="w-full">
            <CrewCard
              id={inform.crewId}
              capacity={inform.capacity}
              isConfirmed={inform.isConfirmed}
              location={inform.location}
              name={inform.name}
              thumbnail={inform.images[0].imagePath}
              participantCount={inform.participantCount}
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
