'use client';

import { useGetReviewableQuery } from '@/src/_queries/my-gathering/reviewable-gathering-list';
import { useInfiniteScroll } from '@/src/hooks/use-infinite-scroll';
import ReviewableGatheringSkeletonList from '@/src/components/common/skeleton/reviewable-gathering-skeleton-list';
import ReviewableGatheringCard from './reviewable-gathering-card';

export default function ReviewableGatheringCardList() {
  const { data, ref, isFetchingNextPage, isLoading } = useInfiniteScroll(
    useGetReviewableQuery({
      pageable: { page: 0, size: 6, sort: ['dateTime,desc'] },
    }),
  );
  // 데이터가 없을 때 표시
  const isDataEmpty =
    !data ||
    data.pages.length === 0 ||
    data.pages.every((page) => Array.isArray(page.content) && page.content.length === 0);

  if (isLoading)
    return (
      <div className="py-6">
        <ReviewableGatheringSkeletonList num={6} />
      </div>
    );
  return (
    <ul className="flex flex-col items-center gap-4">
      {/* 데이터가 비었을 때 메시지 */}
      {isDataEmpty ? (
        <div className="text-gray-500">아직 모임이 없습니다.</div>
      ) : (
        // 카드 컴포넌트 배열 렌더링
        data.pages.map((page, pageIndex) => (
          <li key={`${pageIndex + 1} card`} className="w-full">
            {Array.isArray(page.content) &&
              page.content.map((item) => (
                <ReviewableGatheringCard
                  key={item.id + 1}
                  id={item.id}
                  location={item.location}
                  gatheringName={item.title}
                  dateTime={item.dateTime}
                  currentCount={item.currentCount}
                  totalCount={item.totalCount}
                  imageUrl={item.imageUrl}
                  participants={item.participants}
                />
              ))}
          </li>
        ))
      )}
      {/* 무한 스크롤 로딩 상태 */}
      <div ref={ref} className="h-10 w-full text-center text-gray-500">
        {isFetchingNextPage && '로딩 중...'}
      </div>
    </ul>
  );
}
