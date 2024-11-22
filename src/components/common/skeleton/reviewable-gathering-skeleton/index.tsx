import { Skeleton } from '@mantine/core';

export default function ReviewableGatheringSkeleton() {
  return (
    <div className="flex gap-5">
      <Skeleton className="relative h-28 w-28 flex-shrink-0 flex-grow-0 rounded-[12px] md:h-[166px] md:w-[294px]" />
      <div className="relative flex flex-1 flex-col gap-4">
        <Skeleton className="h-4 w-40" />
        <Skeleton className="h-4 w-20" />
        <Skeleton className="absolute bottom-0 h-4 w-28" />
        <Skeleton className="absolute bottom-0 right-0 h-9 w-18 rounded-xl md:h-10 md:w-28" />
      </div>
    </div>
  );
}
