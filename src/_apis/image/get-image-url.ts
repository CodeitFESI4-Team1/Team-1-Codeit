import { fetchApi } from '@/src/utils/api';
import Toast from '@/src/components/common/toast';
import { GetImageUrlResponseTypes } from '@/src/types/create-crew';

export async function getImageUrl(
  file: File | string | null,
  type: 'MEMBER' | 'CREW' | 'GATHERING',
) {
  const formData = new FormData();
  if (file instanceof File) {
    try {
      const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
      const ALLOWED_TYPES = ['image/jpeg', 'image/png'];

      if (file.size > MAX_FILE_SIZE) {
        Toast({ message: '파일 크기는 5MB를 초과할 수 없습니다.', type: 'error' });
        throw new Error('파일 크기 초과');
      }
      if (!ALLOWED_TYPES.includes(file.type)) {
        Toast({ message: '지원하지 않는 파일 형식입니다.', type: 'error' });
        throw new Error('지원하지 않는 파일 형식');
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
