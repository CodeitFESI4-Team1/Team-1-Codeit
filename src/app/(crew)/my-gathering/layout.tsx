'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@mantine/core';

const buttonData = [
  { id: 1, label: '참여한 약속', route: '/my-gathering/participation' },
  { id: 2, label: '만든 약속', route: '/my-gathering/creation' },
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
    <div className="mt-4 md:mx-[46px] md:mt-[45px]">
      <div className="m-4 grid grid-cols-3 gap-2 md:gap-4">
        {buttonData.map(({ id, label, route }) => (
          <Link key={id} href={route}>
            <Button
              className={`${id === selectedButton ? 'btn-filled' : 'btn-outlined'} w-full text-sm font-bold md:text-lg`}
            >
              {label}
            </Button>
          </Link>
        ))}
      </div>
      {children}
    </div>
  );
}
