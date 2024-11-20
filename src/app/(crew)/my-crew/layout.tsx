'use client';

import { ReactNode, useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Tabs from '@/src/components/common/tab';

export default function MyCrewLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const currentPath = usePathname();
  const myCrewTabs = [
    { label: '내가 참여한 크루', id: 'joined-crew', route: '/my-crew/joined' },
    { label: '내가 만든 크루', id: 'hosted-crew', route: '/my-crew/hosted' },
  ];
  const [currentTab, setCurrentTab] = useState(myCrewTabs[0].id);

  const handleTabClick = (id: string) => {
    const targetRoute = myCrewTabs.find((tab) => tab.id === id)?.route;
    if (targetRoute) router.push(targetRoute);
  };

  useEffect(() => {
    const activeTabId = myCrewTabs.find((tab) => tab.route === currentPath)?.id;
    if (activeTabId) setCurrentTab(activeTabId);
  }, [currentPath]);

  return (
    <div className="px-3 py-4 md:px-8 md:py-16 lg:px-11.5">
      <div className="hidden pb-6 text-3xl font-bold md:block">나의 크루</div>
      <Tabs
        variant="default"
        tabs={myCrewTabs}
        activeTab={currentTab}
        onTabClick={(id) => {
          handleTabClick(id);
        }}
      />
      <div className="mt-10 hidden w-full border-t-2 border-gray-200 md:block" />
      <div className="mt-10">{children}</div>
    </div>
  );
}
