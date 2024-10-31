import { fetchApi } from '@/src/utils/api';

type User = {
  id: number;
  name: string;
  profile_url: string;
};

export function getUsers(): Promise<{ data: User[] }> {
  return fetchApi<{ data: User[] }>('http://localhost:3000/api/test-api');
}
