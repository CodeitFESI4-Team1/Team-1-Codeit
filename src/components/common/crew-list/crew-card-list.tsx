import React from 'react';
import { InfiniteData } from '@tanstack/react-query';
import {
  MainCrewList,
  MainCrewListResponse,
  MyCrewList,
  MyCrewListResponse,
} from '@/src/types/crew-card';
import CrewCard from './crew-card';

// CrewCardListProps 타입을 구분하여 정의
interface CrewCardListProps {
  data: InfiniteData<MyCrewListResponse | MainCrewListResponse, unknown>;
  inWhere?: 'my-crew' | 'main-crew';
}

export default function CrewCardList({ data, inWhere }: CrewCardListProps) {
  const crewDataList =
    inWhere === 'my-crew'
      ? data.pages.flatMap((page) => page.content as MyCrewList[])
      : data.pages.flatMap((page) => page.content as MainCrewList[]);

  const gridColsStyle = inWhere === 'my-crew' ? '' : 'lg:grid-cols-2';

  // 초기 로딩시 데이터 없을때
  if (!data.pages.length) return null;

  if (!crewDataList.length)
    return (
      <div className="flex justify-center py-10">
        <p>데이터가 없습니다.</p>
      </div>
    );

  return (
    <ul className={`mx-auto grid w-full grid-cols-1 gap-x-2 gap-y-2 ${gridColsStyle}`}>
      {crewDataList.map((inform) => {
        // MainCrewList에서만 isConfirmed 계산
        const isConfirmed =
          inWhere !== 'my-crew' &&
          (inform as MainCrewList).participantCount !== undefined &&
          (inform as MainCrewList).totalCount !== undefined &&
          (inform as MainCrewList).participantCount === (inform as MainCrewList).totalCount;

        return (
          <li key={inform?.id} className="w-full">
            <CrewCard
              inWhere={inWhere}
              id={inform?.id}
              title={inform?.title}
              mainLocation={inform?.mainLocation}
              subLocation={inform?.subLocation}
              imageUrl={
                inform?.imageUrl === 'string'
                  ? 'https://media.istockphoto.com/id/1396814518/vector/image-coming-soon-no-photo-no-thumbnail-image-available-vector-illustration.jpg?s=612x612&w=0&k=20&c=hnh2OZgQGhf0b46-J2z7aHbIWwq8HNlSDaNp2wn_iko='
                  : inform?.imageUrl
              }
              totalCount={inform?.totalCount}
              participantCount={
                inWhere === 'my-crew'
                  ? (inform as MyCrewList)?.currentCount
                  : (inform as MainCrewList)?.participantCount
              }
              totalGatheringCount={
                inWhere === 'my-crew'
                  ? (inform as MyCrewList)?.totalGathering
                  : (inform as MainCrewList)?.totalGatheringCount
              }
              crewMembers={inWhere === 'my-crew' ? (inform as MyCrewList)?.crewMembers : undefined}
              isConfirmed={isConfirmed}
            />
          </li>
        );
      })}
    </ul>
  );
}
