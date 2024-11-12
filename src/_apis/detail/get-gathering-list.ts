import { fetchApi } from '@/src/utils/api';
import { GatheringType } from '@/src/types/gathering-data';

export async function getGatheringList(id: number): Promise<GatheringType[]> {
  const url = `/api/crews/${id}/gatherings`;

  return fetchApi<GatheringType[]>(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
