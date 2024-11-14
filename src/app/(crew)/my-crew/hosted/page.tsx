'use client';

import { useGetMyCrewHostedQuery } from '@/src/_queries/crew/my-crew-hosted-list-query';
import { useInfiniteScroll } from '@/src/hooks/use-infinite-scroll';
import CrewCardList from '@/src/components/common/crew-list/crew-card-list';

export default function MyCrewParticipationPage() {
  const { data, ref, isFetchingNextPage } = useInfiniteScroll(
    useGetMyCrewHostedQuery({
      pageable: { page: 0, size: 6, sort: ['createdAt,desc'] },
    }),
  );
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
