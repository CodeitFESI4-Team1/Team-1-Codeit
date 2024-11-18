import { useGetReviewableQuery } from '@/src/_queries/gathering/gathering-queries';
import { useInfiniteScroll } from '@/src/hooks/use-infinite-scroll';
import { WritableGatheringCardInformResponse } from '@/src/types/writable-gathering-card';
import WritableGatheringCard from './writable-gathering-card';

export default function ReviewableGatheringCardList() {
  const { queryKey, queryFn } = useGetReviewableQuery();

  const { data, ref, isFetchingNextPage } = useInfiniteScroll<WritableGatheringCardInformResponse>({
    queryKey,
    queryFn,
    getNextPageParam: (lastPage) => (lastPage.hasNext ? lastPage.data.length : undefined),
  });

  return (
    <div className="flex flex-col items-center gap-4">
      {data?.pages.map((page) =>
        page.data.map((item) => (
          <WritableGatheringCard
            key={item.id}
            id={item.id}
            gatheringName={item.title}
            dateTime={item.dateTime}
            currentCount={item.currentCount}
            totalCount={item.totalCount}
            imageUrl={item.imageUrl}
            participants={item.participants}
          />
        )),
      )}
      <div ref={ref} className="h-10 w-full text-center text-gray-500">
        {isFetchingNextPage && '로딩 중...'}
      </div>
    </div>
  );
}
