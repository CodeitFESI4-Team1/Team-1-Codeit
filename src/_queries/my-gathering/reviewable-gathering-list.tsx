'use client';

import { getReviewableGatherings } from '@/src/_apis/gathering/reviewable-gathering';
import { PageableTypes } from '@/src/types/crew-card';
import { ReviewableGatheringCardInformResponse } from '@/src/types/reviewable-gathering-card';

export function useGetReviewableQuery({ pageable }: { pageable: PageableTypes }) {
  const { size, sort = ['string'] } = pageable;
  return {
    queryKey: ['reviewableGathering'],
    queryFn: ({ pageParam = 0 }) =>
      getReviewableGatherings({ page: pageParam, size, sort }).then((response) => {
        if (response === undefined || response === null) {
          throw new Error('약속 목록을 불러오는 데 실패했습니다.');
        }
        return response;
      }),
    getNextPageParam: (
      lastPage: ReviewableGatheringCardInformResponse,
      allPages: ReviewableGatheringCardInformResponse[],
    ) => (lastPage.hasNext ? allPages.length : undefined),
  };
}
