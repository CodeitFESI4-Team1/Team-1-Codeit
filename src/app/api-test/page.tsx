'use client';

import Image from 'next/image';
import { getUsersQuery } from '@/src/_queries/useGetUserQuery';
import { useQuery } from '@tanstack/react-query';
import { ApiError } from '@/src/utils/api';

// react-query 예시

export default function TestPage() {
  const { data: users, error, isLoading, isError } = useQuery(getUsersQuery());

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError && error instanceof ApiError) {
    return (
      <div>
        Error {error.status}: {error.message}
      </div>
    );
  }
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users?.map((user) => (
          <li key={user.id}>
            <h2>{user.name}</h2>
            <Image src={user.profileUrl} alt={`${user.name}'s profile`} width={50} height={50} />
          </li>
        ))}
      </ul>
    </div>
  );
}

// SSR

// import Image from 'next/image';
// import { getUsers } from '@/src/_apis/getUser';
// import { transformUserData } from '@/src/_queries/useGetUserQuery';

// export default async function TestPage() {
//   const rawData = await getUsers();
//   const users = transformUserData(rawData);

//   return (
//     <div>
//       <h1>Users</h1>
//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>
//             <h2>{user.name}</h2>
//             <Image src={user.profileUrl} alt={`${user.name}'s profile`} width={50} height={50} />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
