import { useGetReviewableQuery } from '@/src/_queries/my-gathering/reviewable-gathering-list';
import { useInfiniteScroll } from '@/src/hooks/use-infinite-scroll';
import { WritableGatheringCardInformResponse } from '@/src/types/writable-gathering-card';
import WritableGatheringCard from './writable-gathering-card';

export default function ReviewableGatheringCardList() {
  const { queryKey, queryFn } = useGetReviewableQuery();

  const { data, ref, isFetchingNextPage } = useInfiniteScroll<WritableGatheringCardInformResponse>({
    queryKey,
    queryFn,
    getNextPageParam: (lastPage) => (lastPage.hasNext ? lastPage.content.length : undefined),
  });

  // 데이터가 없을 때 표시
  const isDataEmpty =
    !data ||
    data.pages.length === 0 ||
    data.pages.every((page) => Array.isArray(page.content) && page.content.length === 0);

  return (
    <div className="flex flex-col items-center gap-4">
      {/* 데이터가 비었을 때 메시지 */}
      {isDataEmpty ? (
        <div className="text-gray-500">아직 모임이 없습니다.</div>
      ) : (
        // 카드 컴포넌트 배열 렌더링
        data.pages.map((page, pageIndex) => (
          <div key={`${pageIndex + 1} card`} className="w-full">
            {Array.isArray(page.content) &&
              page.content.map((item) => (
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
              ))}
          </div>
        ))
      )}
      {/* 무한 스크롤 로딩 상태 */}
      <div ref={ref} className="h-10 w-full text-center text-gray-500">
        {isFetchingNextPage && '로딩 중...'}
      </div>
    </div>
  );
}
