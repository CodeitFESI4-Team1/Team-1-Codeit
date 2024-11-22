import GatheringSkeleton from '../gathering-skeleton';

interface GatheringSkeletonListProps {
  num: number;
}

export default function GatheringSkeletonList({ num }: GatheringSkeletonListProps) {
  return (
    <div
      className="grid w-full gap-4 md:grid-cols-2 lg:max-w-[1200px] lg:grid-cols-3"
      aria-label="콘텐츠 로딩 중"
    >
      {[...Array(num)].map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <GatheringSkeleton key={`GatheringSkeleton-${index}`} />
      ))}
    </div>
  );
}
