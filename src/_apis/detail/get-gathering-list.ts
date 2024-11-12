import { fetchApi } from '@/src/utils/api';
import { GatheringType } from '@/src/types/gathering-data';

export async function getGatheringList(): Promise<GatheringType[]> {
  return fetchApi<GatheringType[]>('/gatherings', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
