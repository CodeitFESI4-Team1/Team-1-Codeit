import { getMyCrewHostedList } from '@/src/_apis/crew/my-crew-hosted-list';
import { MyCrewListResponse, PageableTypes } from '@/src/types/crew-card';

export function useGetMyCrewHostedQuery({ pageable }: { pageable: PageableTypes }) {
  const { size, sort = ['string'] } = pageable;
  return {
    queryKey: ['myCrewHosted'],
    queryFn: ({ pageParam = 0 }) =>
      getMyCrewHostedList({ page: pageParam, size, sort }).then((response) => {
        if (response === undefined) {
          throw new Error('크루 목록을 불러오는데 실패했습니다.');
        }
        return response;
      }),
    getNextPageParam: (lastPage: MyCrewListResponse, allPages: MyCrewListResponse[]) =>
      lastPage.hasNext ? allPages.length : undefined,
  };
}
