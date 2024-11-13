import { fetchApi } from '@/src/utils/api';
import { GatheringCardProps, GatheringDetailType } from '@/src/types/gathering-data';

export function getJoinedGatheringList(): Promise<GatheringCardProps[]> {
  return fetchApi<{ data: GatheringCardProps[] }>('/api/gatherings/joined', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.data);
}

export function getHostedGatheringList(): Promise<GatheringCardProps[]> {
  return fetchApi<{ data: GatheringCardProps[] }>('/api/gatherings/hosted', {
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
