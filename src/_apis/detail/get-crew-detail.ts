import { fetchApi } from '@/src/utils/api';
import { CrewDetail } from '@/src/types/crew-card';

export async function getCrewDetail(): Promise<{ data: CrewDetail }> {
  const response = await fetchApi<CrewDetail[]>('/crewDetail', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return { data: response[0] };
}
