import { Skeleton } from '@mantine/core';

export default function CrewSkeleton() {
  return (
    <div className="flex overflow-hidden rounded-xl">
      <Skeleton className="h-[203px] w-[230px]" />
      <div className="relative flex flex-1 flex-col gap-2 p-6">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-4 w-40" />
        <Skeleton className="absolute bottom-6 left-6 right-6 h-2 w-auto" />
      </div>
    </div>
  );
}
