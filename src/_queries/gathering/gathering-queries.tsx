import {
  getHostedGatheringList,
  getJoinedGatheringList,
} from '@/src/_apis/gathering/gathering-apis';
import { GatheringCardProps } from '@/src/types/gathering-data';

export function useGetJoinedGatheringListQuery() {
  return {
    queryKey: ['gatheringDetail'],
    queryFn: getJoinedGatheringList,
    select: (data: GatheringCardProps[]) => data,
  };
}

export function useGetHostedGatheringListQuery() {
  return {
    queryKey: ['gatheringDetail'],
    queryFn: getHostedGatheringList,
    select: (data: GatheringCardProps[]) => data,
  };
}
