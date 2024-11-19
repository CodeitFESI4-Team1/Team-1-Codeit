'use client';

import { Menu } from '@mantine/core';
import { Profile } from '@/src/components/common/profile';
import { UserType } from '@/src/types/user';

export interface ProfileCardProps {
  data: UserType;
  onEdit: () => void;
  onDelete: () => void;
}

export default function ProfileCardPresenter({ data, onEdit, onDelete }: ProfileCardProps) {
  return (
    <div className="flex items-end justify-between">
      <div className="flex items-center gap-6.5">
        <figure className="h-20 w-20 md:h-30 md:w-30 lg:h-30 lg:w-30">
          <Menu
            shadow="sm"
            width={170}
            offset={-5}
            withArrow
            arrowPosition="side"
            position="bottom-start"
          >
            <Menu.Target>
              <div className="h-full w-full">
                <Profile editable imageUrl={data?.profileImageUrl ?? ''} />
              </div>
            </Menu.Target>
            <Menu.Dropdown className="translate-x-16 translate-y-2 transform md:translate-x-24 md:translate-y-0 lg:translate-x-24 lg:translate-y-0">
              <Menu.Item onClick={onEdit}>프로필 이미지 수정하기</Menu.Item>
              <Menu.Item color="red" onClick={onDelete}>
                기본 프로필로 돌아가기
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </figure>
        <div className="flex flex-col gap-2">
          <p className="text-xl font-semibold text-gray-900 md:text-2xl lg:text-2xl">
            {data?.nickname} 님, 안녕하세요🙌
          </p>
          <dl className="flex text-base font-medium text-gray-700">
            <dt className="flex-shrink-0 flex-grow-0 basis-20">Email</dt>
            <dd className="flex-1">{data?.email}</dd>
          </dl>
        </div>
      </div>
    </div>
  );
}
