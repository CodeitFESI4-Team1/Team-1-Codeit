import { fetchApi } from '@/src/utils/api';
import { GatheringType } from '@/src/types/gathering-data';

export async function getGatheringList(id: number): Promise<GatheringType[]> {
  const url = `/api/crews/${id}/gatherings`;

  const response = await fetchApi<{ data: GatheringType[] }>(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
}
