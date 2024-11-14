import { fetchApi } from '@/src/utils/api';
import { SignupRequest, SignupResponse } from '@/src/types/auth';

export function signup(data: SignupRequest): Promise<SignupResponse> {
  return fetchApi<{ data: { refreshToken: string }; headers: Headers }>(
    '/auths/signup',
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
    const { refreshToken } = response.data;
    return { token, refreshToken };
  });
}
