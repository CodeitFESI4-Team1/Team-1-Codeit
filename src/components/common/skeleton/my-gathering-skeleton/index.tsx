import { Skeleton } from '@mantine/core';

export default function MyGatheringSkeleton() {
  return (
    <div className="flex flex-col gap-4">
      <Skeleton className="h-6 w-40" />
      <div className="flex w-full flex-col md:flex-row">
        <Skeleton className="h-40 w-full rounded-t-lg md:h-44 md:w-1/3 md:rounded-l-lg md:rounded-r-none" />
        <div className="relative flex w-full flex-col gap-4 p-4">
          <Skeleton className="h-4 w-48" />
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-4 w-24" />
          <div className="flex items-end justify-between">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-10 w-40 rounded-xl md:w-1/2" />
          </div>
        </div>
      </div>
    </div>
  );
}
