import { StaticImageData } from 'next/image';
import { fetchApi } from '@/src/utils/api';
import { GetImageUrlResponseTypes } from '@/src/types/create-crew';

export async function getImageUrl(
  file: File | string | null,
  type: 'MEMBER' | 'CREW' | 'GATHERING',
) {
  try {
    const formData = new FormData();
    if (file instanceof File) {
      formData.append('file', file);
    }

    const response = await fetchApi<GetImageUrlResponseTypes>(`/api/images?type=${type}`, {
      method: 'POST',
      body: formData,
    });
    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return undefined;
  }
}
