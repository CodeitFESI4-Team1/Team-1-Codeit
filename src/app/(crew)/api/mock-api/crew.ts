import { CrewCardInformResponse } from '@/src/types/crew-card';
import { crewData } from '@/src/mock/crew-data';

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

export const getCrewData = async (page: number, limit: number): Promise<CrewCardInformResponse> => {
  const response = await fetch(`http://localhost:3009/crews?_page=${page + 1}&_limit=${limit}`);
  const data = await response.json();

  // hasNextPage는 데이터가 limit 개수만큼 채워지지 않은 경우 false로 설정
  const hasNextPage = data.length === limit;

  return {
    data,
    hasNextPage,
  };
};
