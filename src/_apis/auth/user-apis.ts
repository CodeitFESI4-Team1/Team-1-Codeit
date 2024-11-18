import { fetchApi } from '@/src/utils/api';
import { User } from '@/src/types/auth';

export function getUser(): Promise<User> {
  return fetchApi<{ data: User }>('/auths/user', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.data);
}

// 회원정보 수정
export async function updateUserProfile(file: File): Promise<void> {
  const url = `/auths/user`;

  const formData = new FormData();
  formData.append('file', file);

  await fetchApi(url, {
    method: 'PUT',
    body: formData,
  });
}

export async function fetchUpdatedUser() {
  return fetchApi<{ data: User }>('/auths/user', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
    },
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
}
