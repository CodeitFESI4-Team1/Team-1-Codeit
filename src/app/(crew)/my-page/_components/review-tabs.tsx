'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Divider } from '@mantine/core';
import { getReviewableGatherings } from '@/src/_apis/gathering/reviewable-gathering';
import { useInfiniteScroll } from '@/src/hooks/use-infinite-scroll';
import { fetchMyReviewData } from '@/src/app/api/mock-api/review';
import ReviewCardList from '@/src/components/common/review-list/review-card-list';
import Tabs from '@/src/components/common/tab';
import ReviewableGatheringCardList from '@/src/components/my-page/reviewable-gatherings/reviewable-gathering-card-list';
import { ReviewInformResponse } from '@/src/types/review';
import { ReviewableGatheringCardInformResponse } from '@/src/types/reviewable-gathering-card';

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
      <div className="flex justify-start">
        <Tabs
          variant="review"
          tabs={myPageTabs}
          activeTab={currentTab}
          onTabClick={handleTabClick}
        />
      </div>
    </div>
  );
}
