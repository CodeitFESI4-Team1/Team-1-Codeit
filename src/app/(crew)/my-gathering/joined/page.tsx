'use client';

import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useGetJoinedGatheringListQuery } from '@/src/_queries/my-gathering/joined-gathering-list-queries';
import { formatDateToRequest } from '@/src/utils/format-date';
import GatheringListWithDate from '@/src/app/(crew)/my-gathering/_component/gathering-list-with-date';
import PopOverCalendar from '@/src/components/common/input/pop-over-calendar';
import MyGatheringSkeletonList from '@/src/components/common/skeleton/my-gathering-skeleton-list';
import { GatheringCardProps } from '@/src/types/gathering-data';

export default function MyGatheringJoinedPage() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [joinedGatheringList, setJoinedGatheringList] = useState<GatheringCardProps[]>();

  const { data, isLoading, refetch } = useQuery(
    useGetJoinedGatheringListQuery(formatDateToRequest(selectedDate)),
  );

  useEffect(() => {
    setJoinedGatheringList(data);
  }, [data]);

  useEffect(() => {
    refetch();
  }, [selectedDate]);

  return (
    <div>
      <div className="py-4 md:py-6">
        <PopOverCalendar value={selectedDate} onChange={(d) => setSelectedDate(d)} />
      </div>
      {true && <MyGatheringSkeletonList num={6} />}
      {joinedGatheringList && <GatheringListWithDate gatheringList={joinedGatheringList} />}
    </div>
  );
}
