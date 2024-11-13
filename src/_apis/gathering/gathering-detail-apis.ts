import { fetchApi } from '@/src/utils/api';
import { GatheringDetailType } from '@/src/types/gathering-data';

export async function GetGatheringDetail(
  crewId: number,
  gatheringId: number,
): Promise<GatheringDetailType> {
  const url = `/api/crews/${crewId}/gatherings/${gatheringId}`;

  const response = await fetchApi<{ data: GatheringDetailType }>(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
}
