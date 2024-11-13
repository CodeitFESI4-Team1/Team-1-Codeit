import {
  getHostedGatheringList,
  getJoinedGatheringList,
} from '@/src/_apis/gathering/gathering-apis';
import { GatheringCardProps } from '@/src/types/gathering-data';

export function useGetJoinedGatheringListQuery(startDate: string) {
  return {
    queryKey: ['gatheringDetail', startDate],
    queryFn: () => getJoinedGatheringList(startDate),
    select: (data: GatheringCardProps[]) => data,
  };
}

export function useGetHostedGatheringListQuery(startDate: string) {
  return {
    queryKey: ['gatheringDetail', startDate],
    queryFn: () => getHostedGatheringList(startDate),
    select: (data: GatheringCardProps[]) => data,
  };
}
