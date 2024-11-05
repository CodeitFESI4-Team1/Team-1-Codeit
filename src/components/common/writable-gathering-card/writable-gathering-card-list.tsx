import { forwardRef } from 'react';
import { InfiniteData } from '@tanstack/react-query';
import { WritableGatheringCardInformResponse } from '@/src/types/writable-gathering-card';
import WritableGatheringCard from './writable-gathering-card';

interface WritableGatheringCardListProps {
  data: InfiniteData<WritableGatheringCardInformResponse> | undefined;
  isFetchingNextPage: boolean;
}

function WritableGatheringCardList(
  { data, isFetchingNextPage }: WritableGatheringCardListProps,
  ref: React.Ref<HTMLDivElement>,
) {
  const writableGatheringCardList = data?.pages.flatMap((page) => page.data) ?? [];

  if (!writableGatheringCardList) return <p>loading...</p>;

  return (
    <>
      <ul>
        {writableGatheringCardList.map((inform) => (
          <li key={inform.id}>
            <WritableGatheringCard
              currentCount={inform.currentCount}
              dateTime={inform.dateTime}
              gatheringName={inform.title}
              id={inform.id}
              imageUrl={inform.imageUrl}
              participants={inform.participants}
              totalCount={inform.totalCount}
            />
          </li>
        ))}
      </ul>
      {isFetchingNextPage ? <p>loading...</p> : <div ref={ref} className="h-[1px]" />}
    </>
  );
}

export default forwardRef(WritableGatheringCardList);
