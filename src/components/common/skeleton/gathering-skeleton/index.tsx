import { Skeleton } from '@mantine/core';

export default function GatheringSkeleton() {
  return (
    <div className="relative h-[380px] w-full overflow-hidden rounded-lg bg-white shadow-sm">
      <div className="relative h-40 w-full">
        <Skeleton className="h-full w-full rounded-t-lg" />
      </div>
      <div className="flex min-h-[220px] flex-col justify-between p-4">
        <div>
          <Skeleton className="mb-2 h-6 w-1/3" />
          <Skeleton className="mb-4 h-6 w-2/3" />
          <Skeleton className="h-4 w-1/2" />
        </div>
        <div className="mt-6">
          <Skeleton className="h-4 w-1/3" />
          <div className="mt-4 h-10" />
        </div>
      </div>
    </div>
  );
}
