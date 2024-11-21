'use client';

import { useGetMyCrewJoinedQuery } from '@/src/_queries/crew/my-crew-joined-list-query';
import { useInfiniteScroll } from '@/src/hooks/use-infinite-scroll';
import CrewCardList from '@/src/components/common/crew-list/crew-card-list';
import CrewSkeletonList from '@/src/components/common/skeleton/crew-skeleton-list';

export default function MyCrewJoinedPage() {
  const { data, isLoading, error, ref, isFetchingNextPage } = useInfiniteScroll(
    useGetMyCrewJoinedQuery({
      pageable: { page: 0, size: 6, sort: ['createdAt,desc'] },
    }),
  );
  return (
    <div>
      <CrewCardList inWhere="my-crew" data={data ?? { pages: [], pageParams: [] }} />
      {isLoading || isFetchingNextPage ? (
        <CrewSkeletonList num={6} column={1} />
      ) : (
        <div ref={ref} className="h-[1px]" />
      )}
      {error && <p className="py-10 text-center">에러가 발생했습니다.</p>}
    </div>
  );
}
