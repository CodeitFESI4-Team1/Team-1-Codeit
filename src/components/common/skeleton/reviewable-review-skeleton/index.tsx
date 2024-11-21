import { Skeleton } from '@mantine/core';

export default function ReviewableReviewSkeleton() {
  return (
    <div className="flex gap-5">
      <Skeleton className="h-[166px] w-[230px] rounded-xl" />
      <div className="relative flex flex-1 flex-col gap-4">
        <Skeleton className="h-4 w-40" />
        <Skeleton className="h-4 w-20" />
        <Skeleton className="absolute bottom-0 h-4 w-28" />
        <Skeleton className="absolute bottom-0 right-0 h-10 w-28 rounded-xl" />
      </div>
    </div>
  );
}
