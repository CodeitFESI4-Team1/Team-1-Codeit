'use client';

import { useState } from 'react';
import Button from '@/src/components/common/button';
import CreationList from './_components/creation-list';
import FavoriteList from './_components/favorite-list';
import ParticipationList from './_components/participation-list';

export default function MyGatheringPage() {
  const [selectedButton, setSelectedButton] = useState<number>(1);

  const buttonData = [
    { id: 1, label: '내가 참여한 약속', component: <ParticipationList /> },
    { id: 2, label: '내가 만든 약속', component: <CreationList /> },
    { id: 3, label: '찜한 약속', component: <FavoriteList /> },
  ];

  return (
    <div className="m-4 mt-[45px] grid grid-cols-3 gap-4 md:mx-[46px]">
      {buttonData.map(({ id, label }) => (
        <Button
          key={id}
          className={`${id === selectedButton ? 'btn-filled' : 'btn-outlined'} text-lg font-bold`}
          onClick={() => setSelectedButton(id)}
        >
          {label}
        </Button>
      ))}
      <div className="mt-6">
        {buttonData.find((button) => button.id === selectedButton)?.component}
      </div>
    </div>
  );
}
