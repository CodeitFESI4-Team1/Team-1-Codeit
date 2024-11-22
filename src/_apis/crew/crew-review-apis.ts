import { fetchApi } from '@/src/utils/api';
import { CrewReviewResponse } from '@/src/types/review';

// 크루 리뷰 조회
export async function getCrewReviews(crewId: number, page: number): Promise<CrewReviewResponse> {
  const url = `/api/review/${crewId}?page=${page}&size=5`;

  const response = await fetchApi<{ data: CrewReviewResponse }>(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.data;
}
