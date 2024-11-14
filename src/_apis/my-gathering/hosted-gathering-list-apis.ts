import { fetchApi } from '@/src/utils/api';
import { GatheringCardProps } from '@/src/types/gathering-data';

export function getHostedGatheringList(startDate: string): Promise<GatheringCardProps[]> {
  const url = `/api/gatherings/hosted?startDate=${startDate}`;
  return fetchApi<{ data: GatheringCardProps[] }>(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.data);
}
