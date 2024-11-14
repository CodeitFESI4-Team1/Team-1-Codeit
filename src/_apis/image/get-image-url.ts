import { fetchApi } from '@/src/utils/api';
import { GetImageUrlResponseTypes } from '@/src/types/create-crew';

export async function getImageUrl(
  file: File | string | null,
  type: 'MEMBER' | 'CREW' | 'GATHERING',
) {
  const formData = new FormData();
  if (file instanceof File) {
    formData.append('file', file);
  }

  const response: { data: GetImageUrlResponseTypes } = await fetchApi(`/api/images?type=${type}`, {
    method: 'POST',
    body: formData,
  });
  return response?.data;
}
