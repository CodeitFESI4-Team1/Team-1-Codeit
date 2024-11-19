import { fetchApi } from '@/src/utils/api';

export async function reissue(): Promise<{ token: string | null }> {
  return fetchApi<{ headers: Headers }>(
    '/auths/reissue',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    },
    5000,
    true,
  ).then((response) => {
    const token = response.headers.get('Authorization');
    return { token };
  });
}
