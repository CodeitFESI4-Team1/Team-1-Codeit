import { fetchApi } from '@/src/utils/api';
import { GatheringCardProps, GatheringDetailType } from '@/src/types/gathering-data';

export function getJoinedGatheringList(startDate: string): Promise<GatheringCardProps[]> {
  const url = `/api/gatherings/joined?startDate=${startDate}`;
  return fetchApi<{ data: GatheringCardProps[] }>(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.data);
}

export function getHostedGatheringList(startDate: string): Promise<GatheringCardProps[]> {
  const url = `/api/gatherings/hosted?startDate=${startDate}`;
  return fetchApi<{ data: GatheringCardProps[] }>(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.data);
}

export function getGathering(): Promise<GatheringDetailType> {
  return fetchApi<GatheringDetailType>('/gatheringDetail/1', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response); // TODO: data 추출
}
