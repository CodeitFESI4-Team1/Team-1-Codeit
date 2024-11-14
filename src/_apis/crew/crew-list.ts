import { fetchApi } from '@/src/utils/api';
import { ConditionTypes, MainCrewListResponse, PageableTypes } from '@/src/types/crew-card';

export async function getCrewList(condition: ConditionTypes, pageable: PageableTypes) {
  const { keyword, mainLocation, mainCategory, subCategory, sortType } = condition;
  const { page, size, sort = ['string'] } = pageable;

  try {
    const response: { data: MainCrewListResponse } = await fetchApi(
      `/api/crews/search?keyword=${keyword}&mainLocation=${mainLocation}&mainCategory=${mainCategory}&subCategory=${subCategory}&sortType=${sortType}&page=${page}&size=${size}&sort=${sort}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // 인증 정보를 요청에 포함
      },
    );
    if (!response.data) {
      throw new Error('Failed to get crew list: No data received');
    }

    return response.data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
  return null;
}
