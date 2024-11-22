import { getMyReviews } from '@/src/_apis/review/my-review-apis';
import { MyReviewResponse } from '@/src/types/review';

export function useGetMyReviewsQuery({ size }: { size: number }) {
  return {
    queryKey: ['myReviews'],
    queryFn: ({ pageParam = 0 }: { pageParam?: number }) => getMyReviews(pageParam, size),
    getNextPageParam: (lastPage: MyReviewResponse, allPages: MyReviewResponse[]) => {
      return lastPage.hasNext ? allPages.length : undefined;
    },
  };
}
