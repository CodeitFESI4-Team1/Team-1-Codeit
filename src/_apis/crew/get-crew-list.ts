import { fetchApi } from '@/src/utils/api';
import { MainCrewList, MainCrewListResponse } from '@/src/types/crew-card';

export async function getCrewList(page: number, limit: number): Promise<MainCrewListResponse> {
  try {
    const response = await fetchApi<MainCrewListResponse>(
      `/crews?_page=${page + 1}&_limit=${limit}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    if (!Array.isArray(response)) {
      throw new Error('서버 응답이 올바른 형식이 아닙니다.');
    }
    const data = response as MainCrewList[];
    const hasNext = data.length === limit;

    return { data, hasNext };
  } catch (error) {
    throw new Error('크루 리스트를 불러오는데 실패했습니다.');
  }
}
