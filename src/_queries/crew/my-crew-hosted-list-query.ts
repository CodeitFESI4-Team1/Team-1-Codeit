import { getMyCrewHostedList } from '@/src/_apis/crew/my-crew-hosted-list';
import { MyCrewListResponse } from '@/src/types/crew-card';

export function useGetMyCrewHostedQuery() {
  return {
    queryKey: ['my-crew-creation'],
    queryFn: ({ pageParam = 0 }) =>
      getMyCrewHostedList({ page: pageParam, size: 6, sort: ['string'] }).then((response) => {
        if (response === undefined) {
          throw new Error('Response is undefined');
        }
        return response;
      }),
    getNextPageParam: (lastPage: MyCrewListResponse, allPages: MyCrewListResponse[]) =>
      lastPage.hasNext ? allPages.length : undefined,
  };
}
