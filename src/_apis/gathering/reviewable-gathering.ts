import { fetchApi } from '@/src/utils/api';
import { PageableTypes } from '@/src/types/crew-card';
import { ReviewableGatheringCardInformResponse } from '@/src/types/reviewable-gathering-card';

export async function getReviewableGatherings(pageable: PageableTypes) {
  const { page, size, sort = ['string'] } = pageable;
  const response: { data: ReviewableGatheringCardInformResponse } = await fetchApi(
    `/api/gatherings/reviewable?page=${page}&size=${size}&sort=${sort}`,
  );
  if (!response.data) {
    throw new Error('Failed to get reviewable gatherings');
  }
  return response.data;
}
