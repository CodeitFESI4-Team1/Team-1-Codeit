import { useQuery } from '@tanstack/react-query';
import { getCrewDetail } from '@/src/_apis/crew/crew-detail-apis';

export function useGetCrewDetailQuery(id: number) {
  return useQuery({
    queryKey: ['crewDetail', id],
    queryFn: () => getCrewDetail(id),
  });
}
