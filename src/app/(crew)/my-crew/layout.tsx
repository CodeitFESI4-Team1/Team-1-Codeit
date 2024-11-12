'use client';

import { ReactNode, useState } from 'react';
import Tabs from '@/src/components/common/tab';

export default function MyCrewLayout({ children }: { children: ReactNode }) {
  const myPageTabs = [
    { label: '내가 참여한 크루', id: 'joined-crew' },
    { label: '내가 만든 크루', id: 'made-crew' },
  ];
  const [currentTab, setCurrentTab] = useState(myPageTabs[0].id);

  return (
    <div className="py-8 md:py-12.5">
      <div className="px-3 md:px-8 lg:px-11.5">
        <Tabs
          variant="default"
          tabs={myPageTabs}
          activeTab={currentTab}
          onTabClick={(id) => {
            setCurrentTab(id);
          }}
        />
      </div>
      <div className="mt-8 px-3 md:px-8 lg:px-11.5">{children}</div>
    </div>
  );
}
