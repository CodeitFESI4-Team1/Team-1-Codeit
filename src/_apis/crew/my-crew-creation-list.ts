import { fetchApi } from '@/src/utils/api';
import { MyCrewListResponse, PageableTypes } from '@/src/types/crew-card';

export async function getMyCrewCreationList(pageable: PageableTypes) {
  const { page, size, sort = ['string'] } = pageable;

  try {
    const response = await fetchApi<MyCrewListResponse>(
      `/api/crews/hosted?page=${page}&size=${size}&sort=${sort}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // 인증 정보를 요청에 포함
      },
    );
    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return undefined;
  }
}
