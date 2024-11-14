import { fetchApi } from '@/src/utils/api';
import { User } from '@/src/types/auth';

export function getUser(): Promise<{ data: User }> {
  return fetchApi<{ data: User }>('/auths/user', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
