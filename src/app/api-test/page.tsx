'use client';

import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import { getUsersQuery } from '@/src/_queries/useGetUserQuery';

// react-query 예시

export default function TestPage() {
  const { data: users } = useQuery(getUsersQuery());
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
