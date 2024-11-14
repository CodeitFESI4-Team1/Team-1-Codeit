import { useQuery } from '@tanstack/react-query';
import { GetGatheringDetail } from '@/src/_apis/gathering/gathering-detail-apis';

export function useGetGatheringDetailQuery(crewId: number, gatheringId: number) {
  return useQuery({
    queryKey: ['gatheringDetail', crewId, gatheringId],
    queryFn: () => GetGatheringDetail(crewId, gatheringId),
  });
}
