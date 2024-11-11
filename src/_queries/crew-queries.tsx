import { ConditionTypes, CrewCardInformResponse, PageableTypes } from '@/src/types/crew-card';
import { getCrewList } from '../_apis/crew/get-crew-list';

export function useGetCrewQuery(condition: ConditionTypes) {
  return {
    queryKey: ['crew'],
    queryFn: ({ pageParam = 0 }) =>
      getCrewList(condition, { page: pageParam, size: 6, sort: ['string'] }),
    getNextPageParam: (lastPage: CrewCardInformResponse, allPages: CrewCardInformResponse[]) =>
      lastPage.hasNext ? allPages.length : undefined,
  };
}
