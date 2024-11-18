'use client';

import { useState } from 'react';
import { Divider } from '@mantine/core';
import { useInfiniteScroll } from '@/src/hooks/use-infinite-scroll';
import ProfileCardContainer from '@/src/app/(crew)/mypage/_components/profile-card/container';
import ReviewCardList from '@/src/components/common/review-list/review-card-list';
import Tabs from '@/src/components/common/tab';
import ReviewableGatheringList from '@/src/components/common/writable-gathering-card/writable-gathering-card-list';
import { ReviewInformResponse } from '@/src/types/review';
import { WritableGatheringCardInformResponse } from '@/src/types/writable-gathering-card';
import { fetchMyReviewData } from '../../api/mock-api/review';
import { fetchWritableGatheringData } from '../api/mock-api/writable-gathering';

const mockData = {
  id: 1,
  profileImageUrl: '',
  nickname: '율율',
  email: 'youlyoul@email.com',
};

export default function MyPage() {
  const myPageTabs = [
    { label: '작성 가능한 리뷰', id: 'available-review' },
    { label: '작성한 리뷰', id: 'my-review' },
  ];
  const [currentTab, setCurrentTab] = useState(myPageTabs[0].id);

  const {
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
  } = useInfiniteScroll<WritableGatheringCardInformResponse>({
    queryKey: ['crew'],
    queryFn: ({ pageParam = 0 }) => {
      return fetchWritableGatheringData(pageParam, 3);
    },
    getNextPageParam: (lastPage, allPages) =>
      lastPage.hasNextPage ? allPages.length + 1 : undefined,
  });

  const renderTabContent = () => {
    // TODO : 리턴 값 컴포넌트로 교체
    switch (currentTab) {
      case 'my-review':
        return (
          <ReviewCardList
            data={reviewData}
            ref={reviewRef}
            isFetchingNextPage={isFetchingReviewNextPage}
            isMine
            clickable
          />
        );
      default:
        return <ReviewableGatheringList />;
    }
  };
  return (
    <div className="container mx-auto my-0 min-h-screen max-w-pc bg-gray-50 px-3 py-11 md:px-8 lg:px-11">
      <div className="lg:gap-4.5 flex flex-col gap-3 md:gap-4">
        <ProfileCardContainer data={mockData} />
      </div>
      <div className="mt-12 flex flex-col">
        <h3 className="text-2xl font-semibold text-gray-900">나의 리뷰 모아보기</h3>
        <Divider mt={16} mb={24} size={2} />
        <div className="flex justify-start">
          <Tabs
            variant="review"
            tabs={myPageTabs}
            activeTab={currentTab}
            onTabClick={(id) => {
              setCurrentTab(id);
            }}
          />
        </div>
        <div className="pt-12">{renderTabContent()}</div>
      </div>
      <div />
    </div>
  );
}
