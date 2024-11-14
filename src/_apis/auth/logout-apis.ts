import { fetchApi } from '@/src/utils/api';
import { LogoutRequest } from '@/src/types/auth';

export function logout(data: LogoutRequest): Promise<void> {
  return fetchApi(
    '/auths/logout',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    },
    5000,
    true,
  );
}
