import { toast } from 'react-toastify';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { GetGatheringDetail, createGathering } from '@/src/_apis/gathering/gathering-detail-apis';
import { CreateGatheringRequestTypes } from '@/src/types/gathering-data';

export function useGetGatheringDetailQuery(
  crewId: number,
  gatheringId: number,
  options?: { enabled?: boolean },
) {
  return useQuery({
    queryKey: ['gatheringDetail', crewId, gatheringId],
    queryFn: () => GetGatheringDetail(crewId, gatheringId),
    ...options,
  });
}

export function useCreateGatheringQuery(crewId: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateGatheringRequestTypes) => createGathering(crewId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['gatheringList', crewId],
        refetchType: 'all',
      });
      toast.success('크루가 생성되었습니다.');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
}
