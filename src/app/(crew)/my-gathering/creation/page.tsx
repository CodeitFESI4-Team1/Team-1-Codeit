'use client';

import { useEffect, useState } from 'react';
import GatheringListWithDate from '@/src/app/(crew)/my-gathering/_component/gathering-list-with-date';
import PopOverCalendar from '@/src/components/common/input/pop-over-calendar';
import { GatheringCardProps } from '@/src/types/gathering-data';

export default function CreationPage() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {}, [selectedDate]);
  const creationGatheringList: GatheringCardProps[] = [
    {
      id: 1,
      crewTitle: 'Power Pole',
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
      dateTime: '2024-11-11T00:30',
      currentCount: 8,
      totalCount: 12,
      imageUrl:
        'https://images.unsplash.com/photo-1601758260892-a62c486ace97?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      isLiked: true,
    },
    {
      id: 4,
      crewTitle: '풀 엔 그레이스 스튜디오',
      crewMainLocation: '서울시',
      crewSubLocation: '강남구 역삼동',
      title: '가나다라마가나다라마가나다라마가',
      dateTime: '2024-11-21T00:30',
      currentCount: 8,
      totalCount: 12,
      imageUrl:
        'https://images.unsplash.com/photo-1601758260892-a62c486ace97?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      isLiked: true,
    },
  ];

  return (
    <div>
      <div className="py-4 md:py-6">
        <PopOverCalendar value={selectedDate} onChange={(d) => setSelectedDate(d)} />
      </div>
      <GatheringListWithDate gatheringList={creationGatheringList} />
    </div>
  );
}
function setState(arg0: Date) {
  throw new Error('Function not implemented.');
}
