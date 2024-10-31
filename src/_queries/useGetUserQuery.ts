import { getUsers } from '@/src/_apis/getUser';

export function transformUserData(data: {
  data: { id: number; name: string; profile_url: string }[];
}) {
  return data.data.map((user) => ({
    id: user.id,
    name: user.name,
    profileUrl: user.profile_url,
  }));
}

export function getUsersQuery() {
  return {
    queryKey: ['users'],
    queryFn: getUsers,
    select: transformUserData,
  };
}
