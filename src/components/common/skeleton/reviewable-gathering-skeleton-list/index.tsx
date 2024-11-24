import ReviewableGatheringSkeleton from '../reviewable-gathering-skeleton';

interface ReviewableGatheringSkeletonListProps {
  num: number;
}

export default function ReviewableGatheringSkeletonList({
  num,
}: ReviewableGatheringSkeletonListProps) {
  return (
    <div className="grid grid-cols-1 gap-12" aria-label="콘텐츠 로딩 중">
      {[...Array(num)].map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <ReviewableGatheringSkeleton key={`ReviewableGatheringSkeleton-${index}`} />
      ))}
    </div>
  );
}

// TODO: `{[...Array(num)].map((_, index) => ())}` 형태가 아래 파일에서 반복되는 데 이 부분을 추상화 할 수는 없을까요?
// src/components/common/skeleton/crew-skeleton-list/index.tsx
// src/components/common/skeleton/gathering-skeleton-list/index.tsx
// src/components/common/skeleton/my-gathering-skeleton-list/index.tsx
// src/components/common/skeleton/my-review-skeleton-list/index.tsx
// src/components/common/skeleton/reviewable-gathering-skeleton-list/index.tsx
