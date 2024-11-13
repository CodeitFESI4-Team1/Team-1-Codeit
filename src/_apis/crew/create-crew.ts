import { fetchApi } from '@/src/utils/api';
import { CreateCrewRequestTypes, CreateCrewResponseTypes } from '@/src/types/create-crew';

export async function createCrew(data: CreateCrewRequestTypes) {
  try {
    const response = await fetchApi<CreateCrewResponseTypes>(`/api/crews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', // 인증 정보를 요청에 포함
      body: JSON.stringify(data),
    });
    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return undefined;
  }
}
