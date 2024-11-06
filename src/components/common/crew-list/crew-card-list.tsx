import React, { forwardRef } from 'react';
import { Loader } from '@mantine/core';
import { InfiniteData } from '@tanstack/react-query';
import { CrewCardInformResponse } from '@/src/types/crew-card';
import CrewCard from './crew-card';

export interface CrewCardListProps {
  data: InfiniteData<CrewCardInformResponse> | undefined;
  isFetchingNextPage: boolean;
  inWhere?: 'my-crew';
}

function CrewCardList(
  { data, isFetchingNextPage, inWhere }: CrewCardListProps,
  ref: React.Ref<HTMLDivElement>,
) {
  const crewDataList = data?.pages.flatMap((page) => page.data) ?? [];
  const gridColsStyle = inWhere === 'my-crew' ? '' : 'lg:grid-cols-2';

  if (!crewDataList)
    return (
      <div className="flex justify-center py-10">
        <Loader size="sm" />
      </div>
    );

  return (
    <>
      <ul className={`mx-auto grid w-full grid-cols-1 gap-x-2 gap-y-2 ${gridColsStyle}`}>
        {crewDataList.map((inform) => (
          <li key={inform.crewId} className="w-full">
            <CrewCard
              inWhere={inWhere}
              id={inform.crewId}
              capacity={inform.capacity}
              isConfirmed={inform.isConfirmed}
              location={inform.location}
              name={inform.name}
              thumbnail={inform.images[0].imagePath}
              participantCount={inform.participantCount}
              gatheringCount={inform.gatheringCount}
              crewMember={inform.crewMember}
            />
          </li>
        ))}
      </ul>
      {isFetchingNextPage ? (
        <div className="flex justify-center py-10">
          <Loader size="sm" />
        </div>
      ) : (
        <div ref={ref} className="h-[1px]" />
      )}
    </>
  );
}

export default forwardRef(CrewCardList);
