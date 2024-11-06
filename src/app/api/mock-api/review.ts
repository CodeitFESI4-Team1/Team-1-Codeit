import { CrewReviewInformResponse, ReviewInformResponse } from '@/src/types/review';
import { CrewReviewData, MyReviewData } from '@/src/mock/review-data';

// NOTE : 크루 리뷰 데이터 fetch
export const fetchCrewReviewData = (page: number, limit: number = 6) => {
  const startIndex = page * limit;
  const endIndex = startIndex + limit;
  const data = CrewReviewData.data.slice(startIndex, endIndex);

  return new Promise<CrewReviewInformResponse>((resolve) => {
    setTimeout(() => {
      resolve({
        data,
        totalItems: CrewReviewData.data.length,
      });
    });
  });
};

// NOTE : 나의 리뷰 데이터 fetch
export const fetchMyReviewData = (page: number, limit: number) => {
  const startIndex = page * limit;
  const endIndex = startIndex + limit;
  const data = MyReviewData.data.slice(startIndex, endIndex);

  return new Promise<ReviewInformResponse>((resolve) => {
    setTimeout(() => {
      resolve({
        data,
        hasNextPage: endIndex < MyReviewData.data.length,
      });
    });
  });
};

// const { data, ref, isFetchingNextPage } = useInfiniteScroll<ReviewInformResponse>({
//   queryKey: ['review'],
//   queryFn: ({ pageParam = 0 }) => fetchMyReviewData(pageParam, 3);
//   getNextPageParam: (lastPage, allPages) =>
//     lastPage.hasNextPage ? allPages.length + 1 : undefined,
// });
