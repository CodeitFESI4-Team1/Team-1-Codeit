import { fetchApi } from '@/src/utils/api';
import { WritableGatheringCardInformResponse } from '@/src/types/writable-gathering-card';

export async function getReviewableGatherings({
  pageParam = 0,
}: {
  pageParam?: number;
}): Promise<WritableGatheringCardInformResponse> {
  return fetchApi<WritableGatheringCardInformResponse>(
    `/api/gathering/reviewable?page=${pageParam}`,
  );
}
