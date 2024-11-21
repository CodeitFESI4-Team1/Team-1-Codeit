import ReviewableGatheringSkeleton from '../reviewable-gathering-skeleton';

interface ReviewableGatheringSkeletonListProps {
  num: number;
}

export default function ReviewableGatheringSkeletonList({
  num,
}: ReviewableGatheringSkeletonListProps) {
  return (
    <div className="grid grid-cols-1 gap-12" aria-label="콘텐츠 로딩 중">
      {[...Array(num)].map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <ReviewableGatheringSkeleton key={index} />
      ))}
    </div>
  );
}
