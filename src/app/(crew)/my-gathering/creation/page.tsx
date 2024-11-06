'use client';

import GatheringListWithDate from '@/src/app/(crew)/my-gathering/_component/gathering-list-with-date';
import { GatheringCardProps } from '@/src/types/gathering-data';

export default function CreationPage() {
  const creationGatheringList: GatheringCardProps[] = [
    {
      id: 1,
      crewTitle: '풀 엔 그레이스 스튜디오',
      crewMainLocation: '서울시',
      crewSubLocation: '강남구 역삼동',
      title: '가나다라마가나다라마가나다라마가',
      dateTime: '2024-10-30T00:30',
      currentCount: 8,
      totalCount: 12,
      imageUrl:
        'https://images.unsplash.com/photo-1601758260892-a62c486ace97?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      isLiked: true,
    },
    {
      id: 2,
      crewTitle: '풀 엔 그레이스 스튜디오',
      crewMainLocation: '서울시',
      crewSubLocation: '강남구 역삼동',
      title: '가나다라마가나다라마가나다라마가',
      dateTime: '2024-10-30T00:30',
      currentCount: 8,
      totalCount: 12,
      imageUrl:
        'https://images.unsplash.com/photo-1601758260892-a62c486ace97?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      isLiked: true,
    },
    {
      id: 3,
      crewTitle: '풀 엔 그레이스 스튜디오',
      crewMainLocation: '서울시',
      crewSubLocation: '강남구 역삼동',
      title: '가나다라마가나다라마가나다라마가',
      dateTime: '2024-10-30T00:30',
      currentCount: 8,
      totalCount: 12,
      imageUrl:
        'https://images.unsplash.com/photo-1601758260892-a62c486ace97?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      isLiked: true,
    },
  ];

  return (
    <div className="m-4">
      <GatheringListWithDate gatheringList={creationGatheringList} />
    </div>
  );
}
