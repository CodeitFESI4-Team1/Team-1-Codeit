import { useQuery } from '@tanstack/react-query';
import { getGatheringList } from '@/src/_apis/crew/crew-gathering-list-apis';
import { GatheringType } from '@/src/types/gathering-data';

export function useGetGatheringListQuery(id: number) {
  return useQuery<GatheringType[], Error>({
    queryKey: ['gatheringList', id],
    queryFn: () => getGatheringList(id),
    enabled: !!id,
  });
}
