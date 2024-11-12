import React, { forwardRef } from 'react';
import { Loader } from '@mantine/core';
import { InfiniteData } from '@tanstack/react-query';
import { MainCrewListResponse, MyCrewListResponse } from '@/src/types/crew-card';
import CrewCard from './crew-card';

// CrewCardListProps 타입을 구분하여 정의
interface MainCrewCardListProps {
  data: InfiniteData<MainCrewListResponse> | undefined;
  isFetchingNextPage: boolean;
  inWhere?: undefined;
}

interface MyCrewCardListProps {
  data: InfiniteData<MyCrewListResponse> | undefined;
  isFetchingNextPage: boolean;
  inWhere: 'my-crew';
}

// 유니온 타입으로 정의
type CrewCardListProps = MainCrewCardListProps | MyCrewCardListProps;

function CrewCardList(
  { data, isFetchingNextPage, inWhere }: CrewCardListProps,
  ref: React.Ref<HTMLDivElement>,
) {
  const crewDataList = data?.pages.flatMap((page) => page.content);
  const gridColsStyle = inWhere === 'my-crew' ? '' : 'lg:grid-cols-2';

  if (!crewDataList?.length)
    return (
      <div className="flex justify-center py-10">
        <Loader size="sm" />
      </div>
    );

  return (
    <>
      <ul className={`mx-auto grid w-full grid-cols-1 gap-x-2 gap-y-2 ${gridColsStyle}`}>
        {crewDataList.map((inform) => (
          <li key={inform.id} className="w-full">
            <CrewCard
              inWhere={inWhere}
              id={inform.id}
              totalCount={inform.totalCount}
              isConfirmed={inform.isConfirmed}
              mainLocation={inform.mainLocation}
              subLocation={inform.subLocation}
              title={inform.title}
              imageUrl={inform.imageUrl}
              participantCount={inform.participantCount}
              totalGatheringCount={inform.totalGatheringCount}
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
