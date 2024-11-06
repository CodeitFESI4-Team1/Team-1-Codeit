import { fetchApi } from '@/src/utils/api';

type GatheringList = {
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
  const response = await fetchApi<GatheringList[]>('/api/mock-api/detail?type=gatherings', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.map((item) => ({
    ...item,
    dateTime: item.dateTime,
    currentCount: item.currentCount,
    totalCount: item.totalCount,
    isLiked: item.isLiked ?? false,
  }));
}
