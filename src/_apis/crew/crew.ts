import { fetchApi } from '@/src/utils/api';
import {
  CreateCrewRequestTypes,
  CreateCrewResponseTypes,
  EditCrewRequestTypes,
  EditCrewResponseTypes,
} from '@/src/types/create-crew';

export async function createCrew(data: CreateCrewRequestTypes) {
  try {
    const response: { data: CreateCrewResponseTypes } = await fetchApi(`/api/crews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', // Include authentication credentials
      body: JSON.stringify(data),
    });
    if (!response.data) {
      throw new Error('Failed to create crew: No data received');
    }

    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function editCrew(id: number, data: EditCrewRequestTypes) {
  try {
    await fetchApi(`/api/crews/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', // Include authentication credentials
      body: JSON.stringify(data),
    });
  } catch (error) {
    throw error;
  }
}
