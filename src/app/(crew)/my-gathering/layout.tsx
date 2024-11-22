'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Tabs from '@/src/components/common/tab';

const myGatheringTabs = [
  { id: 'my-gathering-joined', label: '내가 참여한 약속', route: '/my-gathering/joined' },
  { id: 'my-gathering-hosted', label: '내가 만든 약속', route: '/my-gathering/hosted' },
];

export default function MyGatheringLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const currentPath = usePathname();
  const [currentTab, setCurrentTab] = useState('');

  useEffect(() => {
    const activeTabId = myGatheringTabs.find((tab) => tab.route === currentPath)?.id;
    if (activeTabId) setCurrentTab(activeTabId);
  }, [currentPath]);

  const handleTabClick = (id: string) => {
    const targetRoute = myGatheringTabs.find((tab) => tab.id === id)?.route;
    if (targetRoute) router.push(targetRoute);
  };

  return (
    <div className="px-3 py-4 md:px-8 md:py-16 lg:px-11.5">
      <div className="hidden pb-6 text-3xl font-bold text-gray-900 md:block">나의 약속</div>
      <Tabs tabs={myGatheringTabs} activeTab={currentTab} onTabClick={(id) => handleTabClick(id)} />
      <div className="mt-10 hidden w-full border-t-2 border-gray-200 md:block" />
      {children}
    </div>
  );
}
