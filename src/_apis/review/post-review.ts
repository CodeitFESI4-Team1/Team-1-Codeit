import { fetchApi } from '@/src/utils/api';

export interface PostReviewParams {
  gatheringId: number;
  point: number;
  reviewText: string;
}

export async function postReview(
  gatheringId: number,
  point: number,
  reviewText: string,
): Promise<ResponseType> {
  const response = await fetchApi<ResponseType>(`/api/review/${gatheringId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ rate: point, comment: reviewText }),
  });
  return response;
}
