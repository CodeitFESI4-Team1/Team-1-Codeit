import { getCrewList } from '@/src/_apis/crew/crew-list';
import { ConditionTypes, MainCrewListResponse, PageableTypes } from '@/src/types/crew-card';

export function useGetCrewListQuery({
  condition,
  pageable,
}: {
  condition: ConditionTypes;
  pageable: PageableTypes;
}) {
  const { size, sort = ['string'] } = pageable;
  return {
    queryKey: [
      'crewLists',
      condition.keyword,
      condition.mainLocation,
      condition.mainCategory,
      condition.subCategory,
      condition.sortType,
    ],
    queryFn: ({ pageParam = 0 }) =>
      getCrewList(condition, {
        page: pageParam,
        size,
        sort,
      }).then((response) => {
        if (response === undefined || response === null) {
          throw new Error('Response is undefined');
        }
        return response;
      }),
    getNextPageParam: (lastPage: MainCrewListResponse, allPages: MainCrewListResponse[]) =>
      lastPage.hasNext ? allPages.length : undefined,
  };
}
