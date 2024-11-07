import { CrewCardInformResponse } from '@/src/types/crew-card';
import { crewData } from '@/src/mock/crew-data';

const MOCK_DB_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

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
  try {
    const response = await fetch(`${MOCK_DB_BASE_URL}/crews?_page=${page + 1}&_limit=${limit}`);
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }
    const data = await response.json();
    // hasNextPage는 데이터가 limit 개수만큼 채워지지 않은 경우 false로 설정
    const hasNextPage = data.length === limit;
    return { data, hasNextPage };
  } catch (error) {
    throw new Error(`Fetch error`);
  }
};
