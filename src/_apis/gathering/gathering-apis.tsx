import { fetchApi } from '@/src/utils/api';
import { GatheringDetailType } from '@/src/types/gathering-data';

export function getGathering(): Promise<GatheringDetailType> {
  return fetchApi<GatheringDetailType>('/gatheringDetail/1', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response); // TODO: data 추출
}
