import { fetchApi } from '@/src/utils/api';
import { MyCrewListResponse, PageableTypes } from '@/src/types/crew-card';

export async function getMyCrewParticipationList(
  pageable: PageableTypes,
): Promise<MyCrewListResponse> {
  const { page, size, sort = ['string'] } = pageable;

  try {
    const response = await fetchApi<MyCrewListResponse>(
      `/crews/joined?page=${page}&size=${size}&sort=${sort}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6ImFjY2VzcyIsInVzZXJJZCI6MiwidXNlckVtYWlsIjoieW91bEBlbWFpbC5jb20iLCJpYXQiOjE3MzEzODE1OTIsImV4cCI6MTczMTM4ODc5Mn0.UjOEqAfDAsUuHuQX9rsCGIlYjMOjjRZzwvDPB9KILNU`,
        },
        credentials: 'include', // 인증 정보를 요청에 포함
      },
    );
    return response;
  } catch (error) {
    throw new Error('크루 리스트를 불러오는데 실패했습니다.');
  }
}
