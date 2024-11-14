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
    <div className="py-8 md:py-12.5">
      <div className="px-3 md:px-8 lg:px-11.5">
        <Tabs
          variant="default"
          tabs={myCrewTabs}
          activeTab={currentTab}
          onTabClick={(id) => {
            handleTabClick(id);
          }}
        />
      </div>
      <div className="mt-8 px-3 md:px-8 lg:px-11.5">{children}</div>
    </div>
  );
}
