import { forwardRef } from 'react';
import { InfiniteData } from '@tanstack/react-query';
import { ReviewInformResponse } from '@/src/types/review';
import ReviewCard from './review-card';

interface ReviewCardListProps {
  data: InfiniteData<ReviewInformResponse> | undefined;
  isFetchingNextPage: boolean;
  clickable?: boolean;
  isMine?: boolean;
}

function ReviewCardList(
  { data, isFetchingNextPage, clickable = false, isMine = false }: ReviewCardListProps,
  ref: React.Ref<HTMLDivElement>,
) {
  const reviewDataList = data?.pages.flatMap((page) => [...page.data]) ?? [];

  if (!reviewDataList) return <p>Loading...</p>;

  return (
    <>
      <ul className="mx-auto h-full w-[343px] md:w-[820px] lg:w-[1200px]">
        {reviewDataList.map((review, index) => (
          <li key={`${review.rate - index}`} className="h-auto min-h-[112px]">
            <ReviewCard
              crewId={review.crewId}
              comment={review.comment}
              createdAt={review.createdAt}
              rate={review.rate}
              isMine={isMine}
              clickable={clickable}
              crewName={'crewName' in review ? review.crewName : undefined}
              gatheringName={'gatheringName' in review ? review.gatheringName : undefined}
              reviewer={'reviewer' in review ? review.reviewer : undefined}
            />
          </li>
        ))}
      </ul>
      {isFetchingNextPage ? <p>loading...</p> : <div ref={ref} className="h-[1px]" />}
    </>
  );
}

export default forwardRef(ReviewCardList);
