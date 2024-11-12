'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Tabs from '@/src/components/common/tab';

const myGatheringTabs = [
  { id: 'my-gathering-participation', label: '참여한 약속', route: '/my-gathering/participation' },
  { id: 'my-gathering-creation', label: '만든 약속', route: '/my-gathering/creation' },
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
    <div className="px-3 py-8 md:px-8 md:py-12.5 lg:px-11.5">
      <Tabs
        variant="default"
        tabs={myGatheringTabs}
        activeTab={currentTab}
        onTabClick={(id) => handleTabClick(id)}
      />
      {children}
    </div>
  );
}
