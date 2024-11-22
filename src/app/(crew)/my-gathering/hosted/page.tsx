'use client';

import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useGetHostedGatheringListQuery } from '@/src/_queries/my-gathering/hosted-gathering-list-queries';
import { formatDateToRequest } from '@/src/utils/format-date';
import GatheringListWithDate from '@/src/app/(crew)/my-gathering/_component/gathering-list-with-date';
import PopOverCalendar from '@/src/components/common/input/pop-over-calendar';
import MyGatheringSkeletonList from '@/src/components/common/skeleton/my-gathering-skeleton-list';
import { GatheringCardProps } from '@/src/types/gathering-data';

export default function MyGatheringHostedPage() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [hostedGatheringList, setHostedGatheringList] = useState<GatheringCardProps[]>();

  const { data, isLoading, refetch } = useQuery(
    useGetHostedGatheringListQuery(formatDateToRequest(selectedDate)),
  );

  useEffect(() => {
    setHostedGatheringList(data);
  }, [data]);

  useEffect(() => {
    refetch();
  }, [selectedDate]);

  if (hostedGatheringList?.length === 0) {
    return (
      <section className="py-16 text-center">
        <h3 className="text-xl font-bold text-blue-500">내가 만든 약속이 아직 없어요</h3>
        <p className="mt-4 text-gray-600">크루에서 약속을 만들어보세요 🙌</p>
      </section>
    );
  }

  return (
    <div>
      <div className="py-4 md:py-6">
        <PopOverCalendar value={selectedDate} onChange={(d) => setSelectedDate(d)} />
      </div>
      {isLoading && <MyGatheringSkeletonList num={6} />}
      {hostedGatheringList && <GatheringListWithDate gatheringList={hostedGatheringList} />}
    </div>
  );
}
