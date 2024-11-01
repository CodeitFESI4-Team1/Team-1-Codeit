import { CrewCardInformResponse } from '@/src/types/crew-card';
import { ReviewInformResponse } from '@/src/types/review';
import { crewData } from '@/src/mock/crew-data';
import { CrewReviewData, MyReviewData } from '@/src/mock/review-data';

// NOTE: 크루 데이터 fetch
export const fetchCrewData = (page: number, limit: number) => {
  const startIndex = page * limit;
  const endIndex = startIndex + limit;
  const data = crewData.data.slice(startIndex, endIndex);

  return new Promise<CrewCardInformResponse>((resolve) => {
    setTimeout(() => {
      resolve({
        data,
        hasNextPage: endIndex < crewData.data.length,
      });
    }, 500);
  });
};

// const { data, ref, isFetchingNextPage } = useInfiniteScroll<CrewCardInformResponse>({
//   queryKey: ['crew'],
//   queryFn: ({ pageParam = 0 }) => fetchCrewData(pageParam, 3);
//   getNextPageParam: (lastPage, allPages) =>
//     lastPage.hasNextPage ? allPages.length + 1 : undefined,
// });

// NOTE : 크루 리뷰 데이터 fetch
export const fetchCrewReviewData = (page: number, limit: number) => {
  const startIndex = page * limit;
  const endIndex = startIndex + limit;
  const data = CrewReviewData.data.slice(startIndex, endIndex);

  return new Promise<ReviewInformResponse>((resolve) => {
    setTimeout(() => {
      resolve({
        data,
        hasNextPage: endIndex < crewData.data.length,
      });
    });
  });
};

// NOTE : 크루 리뷰 데이터 fetch
export const fetchMyReviewData = (page: number, limit: number) => {
  const startIndex = page * limit;
  const endIndex = startIndex + limit;
  const data = MyReviewData.data.slice(startIndex, endIndex);

  return new Promise<ReviewInformResponse>((resolve) => {
    setTimeout(() => {
      resolve({
        data,
        hasNextPage: endIndex < crewData.data.length,
      });
    });
  });
};
