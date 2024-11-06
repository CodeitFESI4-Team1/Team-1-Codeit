import { NextResponse } from 'next/server';
import { CrewReviewData } from '@/src/mock/review-data';

// FIX: 데이터 패칭 확인을 위한 목 api 추후 삭제 예정

const data = {
  crewDetails: {
    id: 1,
    title: '크루 제목 제목 제목',
    mainLocation: '서울특별시',
    subLocation: '강남구',
    participantCount: 5,
    totalCount: 20,
    isConfirmed: true,
    imageUrl: 'https://i.pinimg.com/564x/f8/8d/c5/f88dc5b857caf6c303ae5ef9dd12e7fb.jpg',
    totalGatheringCount: 5,
    isCaptain: true,
    isCrew: true,
    CrewMembers: [
      { id: 1, nickname: '이름1' },
      {
        id: 2,
        nickname: '이름2',
        profileImageUrl: 'https://i.pinimg.com/564x/9d/b8/86/9db886bb5475cc35a7f450831f4125bc.jpg',
      },
      {
        id: 3,
        nickname: 'User3',
        profileImageUrl: 'https://i.pinimg.com/564x/41/56/d8/4156d8253b6d76e5455d28b44bd1a1e0.jpg',
      },
      {
        id: 4,
        nickname: 'User4',
        profileImageUrl: 'https://i.pinimg.com/564x/e2/e6/47/e2e64732424094c4e9e2643aaaf4389e.jpg',
      },
      {
        id: 5,
        nickname: 'User5',
        profileImageUrl: 'https://i.pinimg.com/564x/17/06/45/170645a5f7b8a76f04c15b226b22cf90.jpg',
      },
    ],
  },
  gatherings: [
    {
      id: 101,
      title: '가나다라마가나다라마가나다라마가',
      dateTime: '2024-12-15T07:30',
      location: '한강공원',
      currentCount: 2,
      totalCount: 4,
      imageUrl:
        'https://images.unsplash.com/photo-1601758260892-a62c486ace97?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      isLiked: true,
    },
    {
      id: 102,
      title: '등산 모임',
      dateTime: '2024-11-12T09:00',
      location: '서울 강남구 개포동 대모산',
      currentCount: 5,
      totalCount: 10,
      imageUrl:
        'https://images.unsplash.com/photo-1516978101789-720eacb59e79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGNhdHxlbnwwfHwwfHx8Mg%3D%3D',
      isLiked: false,
    },
    {
      id: 103,
      title: '등산 모임',
      dateTime: '2024-11-15T09:00',
      location: '경기 과천시 중앙동 관악산',
      currentCount: 10,
      totalCount: 10,
      imageUrl:
        'https://images.unsplash.com/photo-1516978101789-720eacb59e79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGNhdHxlbnwwfHwwfHx8Mg%3D%3D',
      isLiked: true,
    },
    {
      id: 104,
      title: '등산 모임',
      dateTime: '2024-11-12T09:00',
      location: '아차산',
      currentCount: 2,
      totalCount: 4,
      imageUrl:
        'https://images.unsplash.com/photo-1516978101789-720eacb59e79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGNhdHxlbnwwfHwwfHx8Mg%3D%3D',
      isLiked: false,
    },
    {
      id: 105,
      title: '러닝',
      dateTime: '2024-11-12T09:00',
      location: '서울 영등포구 여의동로 330 한강사업본부 여의도안내센터',
      currentCount: 0,
      totalCount: 20,
      imageUrl:
        'https://images.unsplash.com/photo-1516978101789-720eacb59e79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGNhdHxlbnwwfHwwfHx8Mg%3D%3D',
      isLiked: true,
    },
  ],
  gatheringDetail: [
    {
      id: 101,
      title: '가나다라마가나다라마가나다라마가',
      dateTime: '2024-12-15T07:30',
      location: '한강공원',
      currentCount: 8,
      totalCount: 12,
      imageUrl:
        'https://images.unsplash.com/photo-1601758260892-a62c486ace97?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      isLiked: true,
      introduce: '소개글 입니다~~~~~~~~',
      isCaptain: true,
      isParticipant: true,
      participants: [
        { id: 1, nickname: 'User1' },
        {
          id: 2,
          nickname: 'User2',
          imageUrl: 'https://i.pinimg.com/564x/9d/b8/86/9db886bb5475cc35a7f450831f4125bc.jpg',
        },
      ],
    },
  ],
};

// API 엔드포인트 핸들러
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const type = searchParams.get('type');

  // type에 따라 다른 데이터 반환
  switch (type) {
    case 'crewDetails':
      return NextResponse.json(data.crewDetails);
    case 'gatherings':
      return NextResponse.json(data.gatherings);
    case 'gatheringDetail':
      return NextResponse.json(data.gatheringDetail);
    case 'reviews':
      return NextResponse.json(CrewReviewData.data);
    default:
      return NextResponse.json({ error: 'Invalid type' }, { status: 400 });
  }
}
