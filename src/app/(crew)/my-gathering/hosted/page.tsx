'use client';

import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useGetHostedGatheringListQuery } from '@/src/_queries/gathering/gathering-queries';
import GatheringListWithDate from '@/src/app/(crew)/my-gathering/_component/gathering-list-with-date';
import PopOverCalendar from '@/src/components/common/input/pop-over-calendar';
import { GatheringCardProps } from '@/src/types/gathering-data';

export default function MyGatheringHostedPage() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [hostedGatheringList, setHostedGatheringList] = useState<GatheringCardProps[]>();

  const { data, isLoading, refetch } = useQuery(useGetHostedGatheringListQuery());

  useEffect(() => {
    setHostedGatheringList(data);
  }, [data]);

  useEffect(() => {
    refetch();
  }, [selectedDate]);

  return (
    <div>
      <div className="py-4 md:py-6">
        <PopOverCalendar value={selectedDate} onChange={(d) => setSelectedDate(d)} />
      </div>
      {hostedGatheringList && <GatheringListWithDate gatheringList={hostedGatheringList} />}
    </div>
  );
}
