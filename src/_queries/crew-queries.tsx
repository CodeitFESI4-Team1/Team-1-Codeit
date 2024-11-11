import { ConditionTypes, CrewCardInformResponse, PageableTypes } from '@/src/types/crew-card';
import { getCrewList } from '../_apis/crew/get-crew-list';

export function useGetCrewListQuery(condition: ConditionTypes) {
  return {
    queryKey: [
      condition.keyword,
      condition.mainLocation,
      condition.mainCategory,
      condition.subCategory,
      condition.sortType,
    ],
    queryFn: ({ pageParam = 0 }) =>
      getCrewList(condition, { page: pageParam, size: 6, sort: ['string'] }),
    getNextPageParam: (lastPage: CrewCardInformResponse, allPages: CrewCardInformResponse[]) =>
      lastPage.hasNext ? allPages.length : undefined,
  };
}
