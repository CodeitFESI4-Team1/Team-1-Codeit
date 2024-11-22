import { Skeleton } from '@mantine/core';

interface ReviewCardSkeletonProps {
  isMine?: boolean;
}

export default function ReviewCardSkeleton({ isMine = false }: ReviewCardSkeletonProps) {
  return (
    <div className="w-full">
      {isMine && <Skeleton className="mb-3 h-6 w-48" />}
      <div
        role="presentation"
        className={`flex h-full items-end gap-[15px] ${
          isMine ? 'rounded-[12px] p-6 shadow-bg' : 'border-b-[2px] border-[#F3F4F6] py-4'
        } bg-white lg:gap-[40px]`}
      >
        <div className="flex-start flex w-full flex-col items-start justify-between pr-[20px] lg:pr-[40px]">
          {isMine && <Skeleton className="mb-6 h-5 w-full border-b-[2px] border-[#E5E7EB] pb-2" />}

          <div className="flex-start flex flex-col space-y-4">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>

          <div className={`flex w-fit flex-shrink-0 items-center text-xs ${isMine ? 'mt-4' : ''}`}>
            {!isMine && (
              <>
                <Skeleton className="h-8 w-8 rounded-full" />
                <Skeleton className="h-4 w-24" />
              </>
            )}
            <Skeleton className="h-4 w-12" />
          </div>
        </div>
      </div>
    </div>
  );
}
