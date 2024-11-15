'use client';

import { useState } from 'react';
import Tabs from '@/src/components/common/tab';

export default function MyCrewPage() {
  const myPageTabs = [
    { label: '내가 참여한 크루', id: 'joined-crew' },
    { label: '내가 만든 크루', id: 'made-crew' },
  ];
  const [currentTab, setCurrentTab] = useState(myPageTabs[0].id);

  // TODO: fetchCrewData 함수를 사용하여 데이터를 불러오기 : 파라미터 수정 필요
  // TODO: 리스트와는 다른 데이터를 사용해야해서 우선 주석처리 했습니다.
  // const { data, ref, isFetchingNextPage } =
  //   useInfiniteScroll<MyCrewListResponse>(useGetCrewListQuery());

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
      <div className="mt-8 px-3 md:px-8 lg:px-11.5">
        {/* <CrewCardList
          inWhere="my-crew"
          data={data}
          ref={ref}
          isFetchingNextPage={isFetchingNextPage}
        /> */}
      </div>
    </div>
  );
}
