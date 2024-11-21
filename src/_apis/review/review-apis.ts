import { fetchApi } from '@/src/utils/api';

export interface PostReviewParams {
  gatheringId?: number;
  point: number;
  reviewText: string;
}

export async function postReview(params: PostReviewParams): Promise<ResponseType> {
  const { gatheringId, point, reviewText } = params;

  const response = await fetchApi<ResponseType>(`/api/review/${gatheringId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ rate: point, comment: reviewText }),
  });
  return response;
}
