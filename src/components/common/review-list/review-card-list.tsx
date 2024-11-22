import { InfiniteData } from '@tanstack/react-query';
import { MyReview } from '@/src/types/review';
import ReviewCard from './review-card';

// ReviewCardListProps 타입 정의
interface ReviewCardListProps {
  data: InfiniteData<{
    content: MyReview[];
    hasNext: boolean;
  }>;
  refetch: () => void;
}

export default function ReviewCardList({ data, refetch }: ReviewCardListProps) {
  const reviewDataList = data.pages.flatMap((page) => page.content || []);

  // 데이터가 없을 경우 처리
  if (!reviewDataList.length) {
    return (
      <div className="flex justify-center py-10">
        <p className="text-xl font-semibold">남긴 리뷰가 없습니다</p>
        <p className="text-lg font-semibold">크루에 가입하고 약속을 잡아보세요!</p>
      </div>
    );
  }

  return (
    <ul className="mx-auto flex h-full w-full flex-col gap-8">
      {reviewDataList.map((review) => (
        <li key={review.id} className="h-auto min-h-[112px]">
          <ReviewCard
            crewId={review.crewId}
            id={review.id}
            comment={review.comment}
            createdAt={review.createdAt}
            rate={review.rate}
            clickable
            isMine
            crewName={review.crewName}
            gatheringName={review.gatheringName}
            refetch={refetch}
          />
        </li>
      ))}
    </ul>
  );
}
