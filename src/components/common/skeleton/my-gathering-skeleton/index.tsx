import { Skeleton } from '@mantine/core';

export default function MyGatheringSkeleton() {
  return (
    <div className="flex gap-6 p-6">
      <Skeleton className="h-28 w-28 rounded-xl md:h-32 md:w-32" />
      <div className="relative flex flex-col gap-3">
        <Skeleton className="h-4 w-40" />
        <div className="flex gap-2">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-4 w-24" />
        </div>
        <Skeleton className="absolute bottom-0 h-4 w-24" />
      </div>
    </div>
  );
}
