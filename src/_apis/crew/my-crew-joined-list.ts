import { fetchApi } from '@/src/utils/api';
import { MyCrewListResponse, PageableTypes } from '@/src/types/crew-card';

export async function getMyCrewJoinedList(pageable: PageableTypes) {
  const { page, size, sort = ['string'] } = pageable;

  const response: { data: MyCrewListResponse } = await fetchApi(
    `/api/crews/joined?page=${page}&size=${size}&sort=${sort}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', // 인증 정보를 요청에 포함
    },
  );
  return response.data;
}
