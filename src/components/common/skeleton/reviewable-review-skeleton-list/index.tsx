import ReviewableReviewSkeleton from '../reviewable-review-skeleton';

interface ReviewableReviewSkeletonListProps {
  num: number;
}

export default function ReviewableReviewSkeletonList({ num }: ReviewableReviewSkeletonListProps) {
  return (
    <div className="grid grid-cols-1 gap-12" aria-label="콘텐츠 로딩 중">
      {[...Array(num)].map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <ReviewableReviewSkeleton key={index} />
      ))}
    </div>
  );
}
