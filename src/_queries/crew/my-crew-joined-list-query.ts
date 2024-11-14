import { getMyCrewJoinedList } from '@/src/_apis/crew/my-crew-joined-list';
import { MyCrewListResponse } from '@/src/types/crew-card';

export function useGetMyCrewJoinedQuery() {
  return {
    queryKey: ['my-crew-participation'],
    queryFn: ({ pageParam = 0 }) =>
      getMyCrewJoinedList({ page: pageParam, size: 6, sort: ['string'] }).then((response) => {
        if (response === undefined) {
          throw new Error('Response is undefined');
        }
        return response;
      }),
    getNextPageParam: (lastPage: MyCrewListResponse, allPages: MyCrewListResponse[]) =>
      lastPage.hasNext ? allPages.length : undefined,
  };
}
