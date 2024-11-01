import { fetchApi } from '@/src/utils/api';
import { LoginRequest, LoginResponse } from '@/src/types/\bauth';

export function loginUser(data: LoginRequest): Promise<{ data: LoginResponse }> {
  return fetchApi<{ data: LoginResponse }>('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}
