import { Skeleton } from '@mantine/core';

export default function MyReviewSkeleton() {
  return (
    <div className="flex flex-col">
      <Skeleton className="h-6 w-32" />
      <div className="relative flex flex-col gap-2 p-6">
        <Skeleton className="mb-4 h-4 w-40" />
        <Skeleton className="h-6 w-32" />
        <Skeleton className="h-4 w-60" />
        <Skeleton className="absolute bottom-6 h-4 w-20" />
        <Skeleton className="absolute bottom-6 right-6 h-9 w-30" />
      </div>
    </div>
  );
}
