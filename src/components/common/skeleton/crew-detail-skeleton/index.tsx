import { Skeleton } from '@mantine/core';

export default function CrewDetailSkeleton() {
  return (
    <div className="mx-auto flex max-w-[1200px] flex-col gap-6">
      {/* 상단 이미지와 정보 영역 */}
      <div className="relative h-96 w-full overflow-hidden rounded-lg p-6 shadow-sm">
        <Skeleton className="absolute inset-0 h-full w-full" />
        <div className="absolute bottom-6 left-6 space-y-4">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-6 w-64" />
          <Skeleton className="h-10 w-32" />
        </div>
        <div className="absolute bottom-6 right-6 flex items-center space-x-2">
          <Skeleton className="h-6 w-6 rounded-full" />
          <Skeleton className="h-6 w-6 rounded-full" />
        </div>
      </div>

      {/* 소개 및 참여 인원 영역 */}
      <div className="flex flex-col gap-4 md:flex-row lg:flex-1">
        {/* 크루장, 소개 영역 */}
        <div className="md:basis-4/7 flex h-64 w-full flex-col space-y-4 rounded-lg p-4 shadow-sm">
          <div className="flex items-center space-x-3">
            <Skeleton className="h-14 w-14 rounded-full" />
            <div className="flex flex-col space-y-1">
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-4 w-40" />
            </div>
          </div>
          <div className="w-full border-t border-gray-200 pt-4">
            <Skeleton className="mb-2 h-5 w-24" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
          </div>
        </div>

        {/* 참여 인원 영역 */}
        <div className="md:basis-3/7 flex h-64 w-full flex-col rounded-lg p-4 shadow-sm">
          <div className="mb-2 flex items-center justify-between">
            <div className="flex items-center">
              <Skeleton className="h-6 w-6 rounded-full" />
              <Skeleton className="mx-2 h-4 w-12" />
              <Skeleton className="h-4 w-12" />
            </div>
            <Skeleton className="h-6 w-24" />
          </div>
          <Skeleton className="h-4 w-full" />
          <div className="mt-4 h-40 space-y-4 overflow-y-auto">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <Skeleton className="h-10 w-10 rounded-full" />
                <Skeleton className="h-4 w-20" />
              </div>
              <div className="flex items-center space-x-2">
                <Skeleton className="h-10 w-10 rounded-full" />
                <Skeleton className="h-4 w-20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
