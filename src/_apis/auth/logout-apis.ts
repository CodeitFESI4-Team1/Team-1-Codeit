import { fetchApi } from '@/src/utils/api';

export function logout(): Promise<void> {
  return fetchApi('/auths/logout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
