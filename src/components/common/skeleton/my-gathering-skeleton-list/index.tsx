import { Skeleton } from '@mantine/core';
import MyGatheringSkeleton from '../my-gathering-skeleton';

interface MyGatheringSkeletonListProps {
  num: number;
}

export default function MyGatheringSkeletonList({ num }: MyGatheringSkeletonListProps) {
  return (
    <div>
      {[...Array(num)].map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={index} className="py-4 md:flex md:py-0">
          <div className="w-1/6">
            <div className="flex flex-col gap-2">
              <Skeleton className="hidden h-4 w-36 md:block" />
              <Skeleton className="hidden h-4 w-20 md:block" />
            </div>
          </div>
          <div className="relative -mb-3.5 w-0.5 bg-gray-200">
            <div className="md:corner-dot" />
          </div>
          <div className="flex-1 pb-6 md:pl-8">
            <MyGatheringSkeleton />
          </div>
        </div>
      ))}
    </div>
  );
}
