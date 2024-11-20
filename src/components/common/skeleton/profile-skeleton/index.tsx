import { Skeleton } from '@mantine/core';

export default function ProfileSkeleton() {
  return (
    <div className="flex items-center gap-6.5" aria-label="콘텐츠 로딩 중">
      <Skeleton circle className="h-28 w-28" />
      <div className="flex flex-col gap-3">
        <Skeleton className="h-6 w-40" />
        <Skeleton className="h-4 w-36" />
      </div>
    </div>
  );
}
