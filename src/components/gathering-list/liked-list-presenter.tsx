import { Pagination } from '@mantine/core';
import { cn } from '@/src/utils/cn';
import GatheringCard from '@/src/components/common/gathering-card/container';
import { GatheringResponseType } from '@/src/types/gathering-data';

interface LikedListPresenterProps {
  gatheringData: GatheringResponseType;
  onPageChange: (page: number) => void;
  onLike: (gatheringId: number) => void;
  onUnlike: (gatheringId: number) => void;
  page: number;
}

export default function LikedListPresenter({
  gatheringData,
  onPageChange,
  onLike,
  onUnlike,
  page,
}: LikedListPresenterProps) {
  const { content, pageSize, totalPages } = gatheringData;

  return (
    <div className="mx-auto max-w-[1200px] px-4">
      <div
        className={cn(
          'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
          'mx-auto place-content-start justify-items-center gap-4',
          'md:min-h-[1064px] lg:min-h-[704px]',
        )}
      >
        {content.map((card) => (
          <GatheringCard
            {...card}
            key={card.id}
            liked
            onLike={() => onLike(card.id)}
            onUnlike={() => onUnlike(card.id)}
          />
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Pagination
          total={totalPages}
          value={page}
          onChange={onPageChange}
          classNames={{
            control: cn(
              'data-[active="true"]:text-blue-500 data-[active="true"]:font-bold',
              'border-none bg-transparent hover:bg-transparent',
            ),
          }}
          styles={{
            control: {
              '&[data-active]': {
                backgroundColor: 'transparent',
                fontWeight: 'var(--pagination-active-font-weight)',
                color: 'var(--pagination-active-color)',
                boxShadow: 'none',
              },
            },
          }}
          size="sm"
        />
      </div>
    </div>
  );
}
