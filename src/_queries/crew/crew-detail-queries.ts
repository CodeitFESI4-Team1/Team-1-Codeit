import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createCrew, editCrew } from '@/src/_apis/crew/crew';
import { getCrewDetail } from '@/src/_apis/crew/crew-detail-apis';
import { CreateCrewRequestTypes } from '@/src/types/create-crew';

export function useGetCrewDetailQuery(id: number) {
  return useQuery({
    queryKey: ['crewDetail', id],
    queryFn: () => getCrewDetail(id),
  });
}

export function useCreateCrewQuery() {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateCrewRequestTypes) => createCrew(data),
    onSuccess: (data) => {
      if (data === null || data === undefined) {
        return;
      }
      queryClient.invalidateQueries({ queryKey: ['crewLists', 'crewDetail'] });
      router.push(`/crew/detail/${data.crewId}`);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
}

export function useEditCrewQuery(id: number) {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateCrewRequestTypes) => editCrew(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['crewDetail'] });
      if (router) {
        router.back();
      }
    },
  });
}
