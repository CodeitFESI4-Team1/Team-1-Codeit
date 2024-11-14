'use client';

import { UserType } from '@/src/types/user';
import ProfileCardPresenter from './presenter';

export interface ProfileCardTypes {
  data: UserType;
}

export default function ProfileCard({ data }: ProfileCardTypes) {
  // TODO : API 연결
  const handleEdit = () => {};
  return <ProfileCardPresenter data={data} onEdit={handleEdit} />;
}
