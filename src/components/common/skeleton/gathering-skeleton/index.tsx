import { Skeleton } from '@mantine/core';

export default function GatheringSkeleton() {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl">
      <Skeleton className="h-[160px] w-full" />
      <div className="relative flex min-h-[184px] flex-col gap-2 p-4">
        <Skeleton className="h-4 w-40" />
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-4 w-24" />
        <div className="mb-14 mt-4 flex items-end justify-between">
          <Skeleton className="h-4 w-24" />
          <Skeleton circle className="h-8 w-8" />
        </div>
        <Skeleton className="absolute bottom-4 left-4 right-4 h-10 w-auto rounded-xl" />
      </div>
    </div>
  );
}
