import { NextResponse } from 'next/server';

// FIX: react-query로 임시로 작성된 코드입니다. 추후 삭제

export async function GET() {
  const users = [
    {
      id: 1,
      name: 'A',
      profile_url: 'https://i.pinimg.com/736x/e4/4a/09/e44a09cd9a4890667a6d04912055a430.jpg',
    },
    {
      id: 2,
      name: 'B',
      profile_url: 'https://i.pinimg.com/736x/e4/4a/09/e44a09cd9a4890667a6d04912055a430.jpg',
    },
    {
      id: 3,
      name: 'C',
      profile_url: 'https://i.pinimg.com/736x/e4/4a/09/e44a09cd9a4890667a6d04912055a430.jpg',
    },
  ];

  return NextResponse.json({ data: users });
}
