import { getMyCrewJoinedList } from '@/src/_apis/crew/my-crew-joined-list';
import { MyCrewListResponse, PageableTypes } from '@/src/types/crew-card';

export function useGetMyCrewJoinedQuery({ pageable }: { pageable: PageableTypes }) {
  const { size, sort = ['string'] } = pageable;
  return {
    queryKey: ['myCrewJoined'],
    queryFn: ({ pageParam = 0 }) =>
      getMyCrewJoinedList({ page: pageParam, size, sort }).then((response) => {
        if (response === undefined || response === null) {
          throw new Error('크루 목록을 불러오는데 실패했습니다.');
        }
        return response;
      }),
    getNextPageParam: (lastPage: MyCrewListResponse, allPages: MyCrewListResponse[]) =>
      lastPage.hasNext ? allPages.length : undefined,
  };
}
