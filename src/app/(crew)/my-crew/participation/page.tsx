'use client';

import { useGetMyCrewJoinedQuery } from '@/src/_queries/crew/my-crew-joined-list-query';
import { useInfiniteScroll } from '@/src/hooks/use-infinite-scroll';
import CrewCardList from '@/src/components/common/crew-list/crew-card-list';

export default function MyCrewParticipationPage() {
  const { data, ref, isFetchingNextPage } = useInfiniteScroll(useGetMyCrewJoinedQuery());
  return (
    <div>
      <CrewCardList
        inWhere="my-crew"
        data={data ?? { pages: [], pageParams: [] }}
        ref={ref}
        isFetchingNextPage={isFetchingNextPage}
      />
    </div>
  );
}
