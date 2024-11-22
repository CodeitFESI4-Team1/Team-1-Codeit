import ReviewCardSkeleton from './review-card';

interface SkeletonListProps {
  type: 'mine' | 'crew';
}

export default function ReviewListSkeleton({ type }: SkeletonListProps) {
  return (
    <div className="space-y-10">
      {type === 'mine' && (
        <ul className="mx-auto flex h-full w-full flex-col gap-8">
          {Array.from({ length: 3 }).map((_, idx) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={`mine-skeleton-${idx}`} className="h-auto min-h-[112px]">
              <ReviewCardSkeleton isMine />
            </li>
          ))}
        </ul>
      )}
      {type === 'crew' && (
        <div className="mb-6 grid flex-grow gap-4">
          {Array.from({ length: 2 }).map((_, idx) => (
            // eslint-disable-next-line react/no-array-index-key
            <ReviewCardSkeleton key={`crew-skeleton-${idx}`} />
          ))}
        </div>
      )}
    </div>
  );
}
