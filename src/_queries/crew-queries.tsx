import { MainCrewList } from '@/src/types/crew-card';
import { getCrewList } from '../_apis/crew/get-crew-list';

export function useGetCrewQuery() {
  interface QueryParams {
    pageParam?: number;
  }

  interface Page {
    hasNext: boolean;
  }

  return {
    queryKey: ['crew'],
    queryFn: ({ pageParam = 0 }: QueryParams) => getCrewList(pageParam, 3),
    getNextPageParam: (lastPage: Page, allPages: Page[]) =>
      lastPage.hasNext ? allPages.length + 1 : undefined,
    select: (data: MainCrewList[]) => data, // 그대로 반환
  };
}
