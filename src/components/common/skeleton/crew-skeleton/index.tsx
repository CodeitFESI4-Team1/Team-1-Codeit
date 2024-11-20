import { Skeleton } from '@mantine/core';

export default function CrewSkeleton() {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl md:flex-row">
      <Skeleton className="h-[203px] md:w-[230px]" />
      <div className="md:min-h-auto relative flex min-h-[203px] flex-1 flex-col gap-2 p-6">
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-4 w-40" />
        <Skeleton className="absolute bottom-6 left-6 right-6 h-2 w-auto" />
      </div>
    </div>
  );
}
