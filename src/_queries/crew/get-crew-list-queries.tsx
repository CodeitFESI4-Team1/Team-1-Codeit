import { ConditionTypes, MainCrewListResponse, PageableTypes } from '@/src/types/crew-card';
import { getCrewList } from '../../_apis/crew/get-crew-list';

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
      getCrewList(condition, { page: pageParam, size: 6, sort: [condition.sortType] }).then(
        (response) => {
          if (response === undefined) {
            throw new Error('Response is null');
          }
          return response;
        },
      ),
    getNextPageParam: (lastPage: MainCrewListResponse, allPages: MainCrewListResponse[]) =>
      lastPage.hasNext ? allPages.length : undefined,
  };
}
