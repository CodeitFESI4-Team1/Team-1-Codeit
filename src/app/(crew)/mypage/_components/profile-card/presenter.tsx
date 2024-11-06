'use client';

import { Button } from '@mantine/core';
import { Profile } from '@/src/components/common/profile';
import { UserType } from '@/src/types/user';

export interface ProfileCardProps {
  data: UserType;
  onEdit: () => void;
}

export default function ProfileCard({ data, onEdit }: ProfileCardProps) {
  return (
    <div className="flex items-end justify-between">
      <div className="flex items-center gap-6.5">
        <figure className="h-30 w-30">
          <Profile size="full" imageUrl={data?.profileImageUrl ?? ''} />
        </figure>
        <div className="flex flex-col gap-2">
          <p className="text-2xl font-semibold text-gray-900">{data?.nickname} 님, 안녕하세요🙌</p>
          <dl className="flex text-base font-medium text-gray-700">
            <dt className="flex-shrink-0 flex-grow-0 basis-20">Email</dt>
            <dd className="flex-1">{data?.email}</dd>
          </dl>
        </div>
      </div>
      <Button
        type="button"
        onClick={onEdit}
        className="rounded-lg bg-blue-500 px-3.5 py-1.5 font-pretendard text-base font-semibold"
      >
        프로필 정보 수정
      </Button>
    </div>
  );
}
