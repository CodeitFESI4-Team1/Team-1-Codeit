'use client';

import { Loader } from '@mantine/core';
import { useGetMyCrewHostedQuery } from '@/src/_queries/crew/my-crew-hosted-list-query';
import { useInfiniteScroll } from '@/src/hooks/use-infinite-scroll';
import CrewCardList from '@/src/components/common/crew-list/crew-card-list';

export default function MyCrewHostedPage() {
  const { data, isLoading, error, ref, isFetchingNextPage } = useInfiniteScroll(
    useGetMyCrewHostedQuery({
      pageable: { page: 0, size: 6, sort: ['createdAt,desc'] },
    }),
  );
  return (
    <div>
      <CrewCardList inWhere="my-crew" data={data ?? { pages: [], pageParams: [] }} />
      {isLoading || isFetchingNextPage ? (
        <div className="flex justify-center py-10">
          <Loader size="sm" />
        </div>
      ) : (
        <div ref={ref} className="h-[1px]" />
      )}
      {error && <p className="py-10 text-center">에러가 발생했습니다.</p>}
    </div>
  );
}