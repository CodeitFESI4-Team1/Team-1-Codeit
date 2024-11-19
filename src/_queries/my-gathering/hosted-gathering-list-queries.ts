import { getHostedGatheringList } from '@/src/_apis/my-gathering/hosted-gathering-list-apis';
import { GatheringCardProps } from '@/src/types/gathering-data';

export function useGetHostedGatheringListQuery(startDate: string) {
  return {
    queryKey: ['gatheringDetail', startDate],
    queryFn: () => getHostedGatheringList(startDate),
    select: (data: GatheringCardProps[]) => data,
  };
}
