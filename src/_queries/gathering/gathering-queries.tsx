import { getGathering } from '@/src/_apis/gathering/gathering-apis';
import { transformKeysToCamel } from '@/src/utils/transform-keys';
import { GatheringDetailType } from '@/src/types/gathering-data';

export function useGetGatheringQuery() {
  return {
    queryKey: ['gatheringDetail'],
    queryFn: getGathering,
    select: (data: GatheringDetailType) => transformKeysToCamel(data),
  };
}
