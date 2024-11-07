import { fetchApi } from '@/src/utils/api';

export type GatheringList = {
  id: number;
  title: string;
  dateTime: string;
  location: string;
  currentCount: number;
  totalCount: number;
  imageUrl: string;
  isLiked: boolean;
};

export async function getGatheringList(): Promise<GatheringList[]> {
  return fetchApi<GatheringList[]>('/gatherings', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
