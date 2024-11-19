import { fetchApi } from '@/src/utils/api';
import { CreateCrewRequestTypes, CreateCrewResponseTypes } from '@/src/types/create-crew';

export async function createCrew(data: CreateCrewRequestTypes) {
  try {
    const response: { data: CreateCrewResponseTypes; status: number } = await fetchApi(
      `/api/crews`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Include authentication credentials
        body: JSON.stringify(data),
      },
    );
    if (!response.data) {
      throw new Error('Failed to create crew: No data received');
    }

    return response.data;
  } catch (error) {
    throw error;
  }
}
