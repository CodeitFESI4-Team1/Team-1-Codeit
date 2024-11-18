import { fetchApi } from '@/src/utils/api';
import { MyCrewListResponse, PageableTypes } from '@/src/types/crew-card';

export async function getMyCrewJoinedList(pageable: PageableTypes) {
  const { page, size, sort = ['string'] } = pageable;

  try {
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
    if (!response.data) {
      throw new Error('Failed to get my crew joined list');
    }
    return response.data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`내가 가입한 크루 목록 조회 실패`);
    return null;
  }
}
