import MyReviewSkeleton from '../my-review-skeleton';

interface MyReviewSkeletonListProps {
  num: number;
}

export default function MyReviewSkeletonList({ num }: MyReviewSkeletonListProps) {
  return (
    <div className="grid grid-cols-1 gap-6" aria-label="콘텐츠 로딩 중">
      {[...Array(num)].map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <MyReviewSkeleton key={index} />
      ))}
    </div>
  );
}
