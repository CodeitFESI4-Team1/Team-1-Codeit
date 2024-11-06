'use client';

import { UserType } from '@/src/types/user';
import ProfileCard from './presenter';

export interface ProfileCardContainerTypes {
  data: UserType;
}

export default function ProfileCardContainer({ data }: ProfileCardContainerTypes) {
  // TODO : API 연결
  const handleEdit = () => {};
  return <ProfileCard data={data} onEdit={handleEdit} />;
}
