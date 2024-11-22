import { fetchApi } from '@/src/utils/api';
import { ApiResponse, MyReviewResponse } from '@/src/types/review';

export function getMyReviews(page: number, size: number): Promise<MyReviewResponse> {
  // 최종 반환 타입
  const url = `/api/review/memberReviews?page=${page}&size=${size}`;
  return fetchApi<ApiResponse<MyReviewResponse>>(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => {
    return response.data;
  });
}

// 리뷰 삭제 API
export function deleteReview(reviewId: number): Promise<void> {
  const url = `/api/review/${reviewId}`;
  return fetchApi<void>(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
