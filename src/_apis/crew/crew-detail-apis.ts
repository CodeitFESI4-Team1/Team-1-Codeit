import { fetchApi } from '@/src/utils/api';
import { CrewDetail } from '@/src/types/crew-card';

export async function getCrewDetail(id: number): Promise<CrewDetail> {
  const url = `/api/crews/${id}`;

  const response = await fetchApi<{ data: CrewDetail }>(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
}