'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@mantine/core';

const buttonData = [
  { id: 1, label: '내가 참여한 약속', route: '/my-gathering/participation' },
  { id: 2, label: '내가 만든 약속', route: '/my-gathering/creation' },
  { id: 3, label: '찜한 약속', route: '/my-gathering/favorite' },
];

const getSelectedButtonIndex = (currentPath: string) => {
  return buttonData.findIndex(({ route }) => currentPath.endsWith(route.split('/').pop()!)) + 1;
};

export default function MyGatheringLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentPath = usePathname();

  const [selectedButton, setSelectedButton] = useState(getSelectedButtonIndex(currentPath));

  useEffect(() => {
    const newIdx = getSelectedButtonIndex(currentPath);
    setSelectedButton(newIdx);
  }, [currentPath]);

  return (
    <div className="m-4 mt-[45px] grid grid-cols-3 gap-4 md:mx-[46px]">
      {buttonData.map(({ id, label, route }) => (
        <Link key={id} href={route}>
          <Button
            className={`${id === selectedButton ? 'btn-filled' : 'btn-outlined'} w-full text-lg font-bold`}
          >
            {label}
          </Button>
        </Link>
      ))}
      {children}
    </div>
  );
}
