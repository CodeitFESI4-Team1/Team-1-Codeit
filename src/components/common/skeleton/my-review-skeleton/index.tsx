import { Skeleton } from '@mantine/core';

export default function MyReviewSkeleton() {
  return (
    <div className="relative flex w-full max-w-[1200px] flex-wrap gap-4 border-b-[2px] border-b-gray-200 py-6">
      <Skeleton className="relative h-28 w-28 flex-shrink-0 rounded-[12px] md:h-[166px] md:w-[294px]" />

      <div className="flex min-w-0 flex-1 flex-col">
        <div className="mb-[15px] space-y-1">
          <Skeleton className="h-6 w-1/2" />
          <Skeleton className="h-5 w-1/3" />
        </div>
        <div className="flex items-center gap-2 pb-1">
          <Skeleton className="h-5 w-5 rounded-full" />
          <Skeleton className="h-5 w-12" />
        </div>
        <div className="mt-auto">
          <Skeleton className="h-4 w-1/4" />
        </div>
      </div>
    </div>
  );
}
