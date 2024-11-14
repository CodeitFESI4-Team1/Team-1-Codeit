import { fetchApi } from '@/src/utils/api';
import { CreateCrewRequestTypes, CreateCrewResponseTypes } from '@/src/types/create-crew';

export async function createCrew(data: CreateCrewRequestTypes) {
  const response: { data: CreateCrewResponseTypes } = await fetchApi(`/api/crews`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include', // 인증 정보를 요청에 포함
    body: JSON.stringify(data),
  });
  return response?.data;
}
