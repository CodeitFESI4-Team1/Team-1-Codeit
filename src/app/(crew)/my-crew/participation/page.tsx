'use client';

import { useGetMyCrewParticipationQuery } from '@/src/_queries/crew-queries';
import { useInfiniteScroll } from '@/src/hooks/use-infinite-scroll';
import CrewCardList from '@/src/components/common/crew-list/crew-card-list';

export default function MyCrewParticipationPage() {
  const { data, ref, isFetchingNextPage } = useInfiniteScroll(useGetMyCrewParticipationQuery());
  return (
    <div>
      <CrewCardList
        inWhere="my-crew"
        data={data}
        ref={ref}
        isFetchingNextPage={isFetchingNextPage}
      />
    </div>
  );
}
