import { fetchApi } from '@/src/utils/api';
import validateFile from '@/src/utils/validate-file';
import Toast from '@/src/components/common/toast';
import { GetImageUrlResponseTypes } from '@/src/types/create-crew';

export async function getImageUrl(
  file: File | string | null,
  type: 'MEMBER' | 'CREW' | 'GATHERING',
) {
  const formData = new FormData();
  if (file instanceof File) {
    try {
      if (validateFile(file)) {
        throw new Error('Invalid file');
      }
      formData.append('file', file);

      const response: { data: GetImageUrlResponseTypes } = await fetchApi(
        `/api/images?type=${type}`,
        {
          method: 'POST',
          body: formData,
        },
      );
      if (!response.data) {
        throw new Error('Failed to get image: No data received');
      }

      return response.data;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  }
  return null;
}
