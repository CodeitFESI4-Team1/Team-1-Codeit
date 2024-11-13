import { getMyCrewParticipationList } from '@/src/_apis/crew/my-crew-participation-list';
import { MyCrewListResponse } from '@/src/types/crew-card';

export function useGetMyCrewParticipationQuery() {
  return {
    queryKey: ['my-crew-participation'],
    queryFn: ({ pageParam = 0 }) =>
      getMyCrewParticipationList({ page: pageParam, size: 6, sort: ['string'] }).then(
        (response) => {
          if (response === undefined) {
            throw new Error('Response is undefined');
          }
          return response;
        },
      ),
    getNextPageParam: (lastPage: MyCrewListResponse, allPages: MyCrewListResponse[]) =>
      lastPage.hasNext ? allPages.length : undefined,
  };
}
