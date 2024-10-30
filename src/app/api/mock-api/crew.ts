import { CrewCardInformResponse } from '@/src/types/crew-card';
import { crewData } from '@/src/mock/crew-dats';

// NOTE : 임시 API
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

// NOTE : useInfiniteScroll과 함께 쓰는법
// const { data, ref, isFetchingNextPage } = useInfiniteScroll<CrewCardInformResponse>({
//   queryKey: ['crew'],
//   queryFn: ({ pageParam = 1 }) => {
//     const currentPage = pageParam === 0 ? 1 : pageParam;
//     return fetchCrewData(currentPage, 3);
//   },
//   getNextPageParam: (lastPage, allPages) =>
//     lastPage.hasNextPage ? allPages.length + 1 : undefined,
// });
