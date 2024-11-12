import { fetchApi } from '@/src/utils/api';
import { CrewDetail } from '@/src/types/crew-card';

export async function getCrewDetail(id: number): Promise<CrewDetail> {
  const url = `/api/crews/${id}`;
  // console.log('getCrewDetail 함수 호출됨'); // 호출 여부 확인
  // console.log('API 요청 URL (getCrewDetail):', url); // getCrewDetail에서 URL 확인

  return fetchApi<CrewDetail>(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
