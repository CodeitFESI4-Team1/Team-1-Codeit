import { MainCrewList } from '@/src/types/crew-card';
import { getCrewList } from '../_apis/crew/get-crew-list';
import { getMyCrewParticipationList } from '../_apis/crew/get-my-crew-participation-list';

interface QueryParams {
  pageParam?: number;
}

interface Page {
  hasNext: boolean;
}

export function useGetCrewQuery() {
  return {
    queryKey: ['crew'],
    queryFn: ({ pageParam = 0 }: QueryParams) => getCrewList(pageParam, 3),
    getNextPageParam: (lastPage: Page, allPages: Page[]) =>
      lastPage.hasNext ? allPages.length + 1 : undefined,
    select: (data: MainCrewList[]) => data, // 그대로 반환
  };
}

export function useGetMyCrewParticipationQuery() {
  return {
    queryKey: ['my-crew'],
    queryFn: ({ pageParam = 0 }) =>
      getMyCrewParticipationList({ page: pageParam, size: 6, sort: ['string'] }),
    getNextPageParam: (lastPage: Page, allPages: Page[]) =>
      lastPage.hasNext ? allPages.length : undefined,
  };
}
