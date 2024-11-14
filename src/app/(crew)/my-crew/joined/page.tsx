'use client';

import { Loader } from '@mantine/core';
import { useGetMyCrewJoinedQuery } from '@/src/_queries/crew/my-crew-joined-list-query';
import { useInfiniteScroll } from '@/src/hooks/use-infinite-scroll';
import CrewCardList from '@/src/components/common/crew-list/crew-card-list';

export default function MyCrewJoinedPage() {
  const { data, status, ref, isFetchingNextPage } = useInfiniteScroll(
    useGetMyCrewJoinedQuery({
      pageable: { page: 0, size: 6, sort: ['createdAt,desc'] },
    }),
  );
  return (
    <div>
      <CrewCardList
        inWhere="my-crew"
        data={data ?? { pages: [], pageParams: [] }}
        isFetchingNextPage={isFetchingNextPage}
      />
      {status === 'pending' ? (
        <div className="flex justify-center py-10">
          <Loader size="sm" />
        </div>
      ) : (
        <div ref={ref} className="h-[1px]" />
      )}
      {status === 'error' && <p className="py-10 text-center">에러가 발생했습니다.</p>}
    </div>
  );
}
