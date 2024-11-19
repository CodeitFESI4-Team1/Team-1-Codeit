import { fetchApi } from '@/src/utils/api';
import { ReviewableGatheringCardInformResponse } from '@/src/types/reviewable-gathering-card';

export async function getReviewableGatherings({
  pageParam = 0,
}: {
  pageParam?: number;
}): Promise<ReviewableGatheringCardInformResponse> {
  return fetchApi<ReviewableGatheringCardInformResponse>(
    `/api/gatherings/reviewable?page=${pageParam}`,
  );
}
