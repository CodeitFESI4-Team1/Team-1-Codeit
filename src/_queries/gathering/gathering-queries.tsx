import { getGathering } from '@/src/_apis/gathering/gathering-apis';
import { getReviewableGatherings } from '@/src/_apis/gathering/reviewable-gathering';
import { transformKeysToCamel } from '@/src/utils/transform-keys';
import { GatheringDetailType } from '@/src/types/gathering-data';
import { WritableGatheringCardInform } from '@/src/types/writable-gathering-card';

export function useGetGatheringQuery() {
  return {
    queryKey: ['gatheringDetail'],
    queryFn: getGathering,
    select: (data: GatheringDetailType) => transformKeysToCamel(data),
  };
}

export function useGetReviewableQuery() {
  return {
    queryKey: ['reviewableGathering'],
    queryFn: getReviewableGatherings,
  };
}
