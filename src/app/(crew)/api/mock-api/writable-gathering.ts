import { WritableGatheringCardInformResponse } from '@/src/types/writable-gathering-card';
import { WritableGatheringData } from '@/src/mock/writable-gathering-data';

export const fetchWritableGatheringData = (page: number, limit: number) => {
  const startIndex = page * limit;
  const endIndex = startIndex + limit;
  const data = WritableGatheringData.data.slice(startIndex, endIndex);

  return new Promise<WritableGatheringCardInformResponse>((resolve) => {
    setTimeout(() => {
      resolve({
        data,
        hasNextPage: endIndex < WritableGatheringData.data.length,
      });
    }, 500);
  });
};
