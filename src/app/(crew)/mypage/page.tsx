'use client';

import { useState } from 'react';
import { Divider } from '@mantine/core';
import Button from '@/src/components/common/button';
import ReviewCardList from '@/src/components/common/review-list/review-card-list';
import Tabs from '@/src/components/common/tab';
import GatheringDetailModalPresenter from '@/src/components/gathering-detail-modal/presenter';
import ProfileCardContainer from '@/src/components/my-page/profile-card/container';

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

  const renderTabContent = () => {
    // TODO : 리턴 값 컴포넌트로 교체
    switch (currentTab) {
      case 'my-review':
        return <div>작성한 리뷰 리스트 컴포넌트</div>;
      default:
        return <div>작성 가능한 리뷰 리스트 컴포넌트</div>;
    }
  };
  return (
    <div className="container mx-auto my-0 min-h-screen max-w-pc bg-gray-50 px-3 py-11 shadow-bg md:px-8 lg:px-11">
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
