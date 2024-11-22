import MyReviewSkeleton from '../my-review-skeleton';

export default function MyReviewSkeletonList() {
  return (
    <ul className="flex flex-col items-center gap-4">
      {Array.from({ length: 3 }).map((_, idx) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={`gathering-card-skeleton-${idx}`} className="w-full">
          <MyReviewSkeleton />
        </li>
      ))}
    </ul>
  );
}
