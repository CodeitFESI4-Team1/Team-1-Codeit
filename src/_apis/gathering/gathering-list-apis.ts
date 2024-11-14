import { fetchApi } from '@/src/utils/api';
import { WritableGatheringCardList } from '@/src/types/writable-gathering-card';

export async function getReviewableGatherings(page: number) {
  const response = await fetchApi<WritableGatheringCardList>(`/api/gatherings/reviewable/${page}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response) {
    return null;
  }
  const reviewableCardList = response.content;
  return reviewableCardList;
}
