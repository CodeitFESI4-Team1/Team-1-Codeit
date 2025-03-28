import { fetchApi } from '@/src/utils/api';
import { LoginRequest, LoginResponse } from '@/src/types/auth';

export function login(data: LoginRequest): Promise<{ data: LoginResponse }> {
  return fetchApi<{ data: LoginResponse; headers: Headers }>(
    '/auths/login',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    },
    5000,
    true,
  ).then((response) => {
    const token = response.headers.get('Authorization');
    return { data: { token } };
  });
}
