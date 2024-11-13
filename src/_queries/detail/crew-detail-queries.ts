import { useQuery } from '@tanstack/react-query';
import { getCrewDetail } from '@/src/_apis/detail/get-crew-detail';

export function useGetCrewDetailQuery(id: number) {
  return useQuery({
    queryKey: ['crewDetail', id],
    queryFn: () => getCrewDetail(id),
  });
}
