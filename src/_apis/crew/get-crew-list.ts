import { fetchApi } from '@/src/utils/api';
import { CrewCardInform, CrewCardInformResponse } from '@/src/types/crew-card';

export async function getCrewList(page: number, limit: number): Promise<CrewCardInformResponse> {
  const response = await fetchApi<CrewCardInformResponse>(
    `/crews?_page=${page + 1}&_limit=${limit}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  const data = response as unknown as CrewCardInform[];
  const hasNextPage = data.length === limit;
  return { data, hasNextPage };
}
