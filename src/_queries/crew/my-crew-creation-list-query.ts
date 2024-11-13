import { getMyCrewCreationList } from '@/src/_apis/crew/my-crew-creation-list';
import { MyCrewListResponse } from '@/src/types/crew-card';

export function useGetMyCrewCreationQuery() {
  return {
    queryKey: ['my-crew-creation'],
    queryFn: ({ pageParam = 0 }) =>
      getMyCrewCreationList({ page: pageParam, size: 6, sort: ['string'] }).then((response) => {
        if (response === undefined) {
          throw new Error('Response is undefined');
        }
        return response;
      }),
    getNextPageParam: (lastPage: MyCrewListResponse, allPages: MyCrewListResponse[]) =>
      lastPage.hasNext ? allPages.length : undefined,
  };
}
