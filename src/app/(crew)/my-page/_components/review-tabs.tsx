'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Divider } from '@mantine/core';
import Tabs from '@/src/components/common/tab';

export default function ReviewTabs() {
  const myPageTabs = [
    { label: '작성 가능한 리뷰', id: 'available-review', route: '/my-page/reviewable' },
    { label: '작성한 리뷰', id: 'my-review', route: '/my-page/my-review' },
  ];
  const [currentTab, setCurrentTab] = useState(myPageTabs[0].id);
  const router = useRouter();
  const handleTabClick = (id: string) => {
    setCurrentTab(id);

    const selectedTab = myPageTabs.find((tab) => tab.id === id);
    if (selectedTab?.route) {
      router.push(selectedTab.route);
    }
  };

  /*  const {
    data: reviewData,
    ref: reviewRef,
    isFetchingNextPage: isFetchingReviewNextPage,
  } = useInfiniteScroll<ReviewInformResponse>({
    queryKey: ['review'],
    queryFn: ({ pageParam = 0 }) => fetchMyReviewData(pageParam, 3),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.hasNextPage ? allPages.length + 1 : undefined,
  });

  const {
    data: gatheringData,
    ref: gatheringRef,
    isFetchingNextPage: isFetchingGatheringNextPage,
  } = useInfiniteScroll<ReviewableGatheringCardInformResponse>({
    queryKey: ['crew'],
    queryFn: ({ pageParam = 0 }) => getReviewableGatherings(pageParam),
    getNextPageParam: (lastPage, allPages) => (lastPage.hasNext ? allPages.length + 1 : undefined),
  });
*/
  return (
    <div className="mt-12 flex flex-col">
      <h3 className="text-2xl font-semibold text-gray-900">나의 리뷰 모아보기</h3>
      <Divider mt={16} mb={24} size={2} />
      <Tabs tabs={myPageTabs} activeTab={currentTab} onTabClick={handleTabClick} />
    </div>
  );
}
