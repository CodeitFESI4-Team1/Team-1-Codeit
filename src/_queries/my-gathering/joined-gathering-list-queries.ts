import { getJoinedGatheringList } from '@/src/_apis/my-gathering/joined-gathering-list-apis';
import { GatheringCardProps } from '@/src/types/gathering-data';

export function useGetJoinedGatheringListQuery(startDate: string) {
  return {
    queryKey: ['gatheringDetail', startDate],
    queryFn: () => getJoinedGatheringList(startDate),
    select: (data: GatheringCardProps[]) => data,
  };
}
