import MyReviewSkeleton from '../my-review-skeleton';

export default function MyReviewSkeletonList({ num }: { num: number }) {
  return (
    <ul className="flex flex-col items-center gap-4">
      {[...Array(num)].map((_, idx) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={`gathering-card-skeleton-${idx}`} className="w-full">
          <MyReviewSkeleton />
        </li>
      ))}
    </ul>
  );
}
