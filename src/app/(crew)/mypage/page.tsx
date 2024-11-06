'use client';

import { useState } from 'react';
import { Divider } from '@mantine/core';
import { useInfiniteScroll } from '@/src/hooks/useInfiniteScroll';
import { Gathering, ReviewList, User } from '@/src/components/common/review-list/review-card';
import ReviewCardList from '@/src/components/common/review-list/review-card-list';
import Tabs from '@/src/components/common/tab';
import ProfileCardContainer from '@/src/components/my-page/profile-card/container';
import { ReviewInformResponse } from '@/src/types/review';
import { fetchMyReviewData } from '../../api/mock-api/review';

const mockData = {
  id: 1,
  profileImageUrl: '',
  nickname: '율율',
  email: 'youlyoul@email.com',
};

const mockUser: User = {
  id: 1,
  image: 'https://i.pinimg.com/736x/5d/83/ce/5d83cec545201e5ca8f2477070e2eac9.jpg',
  name: '샘플',
  teamId: 1,
};

const mockGathering: Gathering = {
  dateTime: new Date('2024-10-20'),
  id: 1,
  image: 'https://i.pinimg.com/564x/1c/3e/ff/1c3eff0cf58c3f87bc3310ff1528da20.jpg',
  location: '대전',
  name: '모여라',
  teamId: 1,
  type: '가볍게',
};

const mockReviewData: ReviewList = [
  {
    teamId: 1,
    id: 1,
    score: 60,
    comment: '최고의 모임입니다!?',
    createdAt: new Date('2024-10-20'),
    gathering: mockGathering,
    user: mockUser,
  },
  {
    teamId: 2,
    id: 2,
    score: 20,
    comment: '최악의 모임입니다!!!',
    createdAt: new Date('2024-10-21'),
    gathering: mockGathering,
    user: mockUser,
  },
  {
    teamId: 3,
    id: 4,
    score: 60,
    comment:
      '긴리뷰내용긴리뷰내용긴리뷰내용긴리뷰내용긴리뷰내용긴리뷰내용긴리뷰내용긴리뷰내용긴리뷰내용긴리뷰내용긴리뷰내용긴리뷰내용긴리뷰내용긴리뷰내용긴리뷰내용긴리뷰내용긴리뷰내용긴리뷰내용긴리뷰내용긴리뷰내용긴리뷰내용긴리뷰내용긴리뷰내용긴리뷰내용긴리뷰내용긴리뷰내용긴리뷰내용긴리뷰내용긴리뷰내용긴리뷰내용긴리뷰내용긴리뷰내용긴리뷰내용긴리뷰내용긴리뷰내용긴리뷰내용긴리뷰내용긴리뷰내용긴리뷰내용긴리뷰내용긴리뷰내용긴리뷰내용긴리뷰내용긴리뷰내용긴리뷰내용',
    createdAt: new Date('2024-10-21'),
    gathering: mockGathering,
    user: mockUser,
  },
];

export default function MyPage() {
  const myPageTabs = [
    { label: '작성 가능한 리뷰', id: 'available-review' },
    { label: '작성한 리뷰', id: 'my-review' },
  ];
  const [currentTab, setCurrentTab] = useState(myPageTabs[0].id);

  const { data, ref, isFetchingNextPage } = useInfiniteScroll<ReviewInformResponse>({
    queryKey: ['review'],
    queryFn: ({ pageParam = 0 }) => fetchMyReviewData(pageParam, 3),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.hasNextPage ? allPages.length + 1 : undefined,
  });

  const renderTabContent = () => {
    // TODO : 리턴 값 컴포넌트로 교체
    switch (currentTab) {
      case 'my-review':
        return (
          <ReviewCardList
            data={data}
            ref={ref}
            isFetchingNextPage={isFetchingNextPage}
            isMine
            clickable
          />
        );
      default:
        return <div>작성 가능한 리뷰</div>;
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
