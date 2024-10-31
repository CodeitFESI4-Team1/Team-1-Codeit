import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const status = searchParams.get('status');

  if (status === 'success') {
    const mockData = {
      message: 'Success! API is working.',
      data: {
        name: 'api 연결 test',
      },
    };
    return NextResponse.json(mockData);
  }
  if (status === 'not-found') {
    return NextResponse.json({ message: 'Not Found: This is a test 404 error.' }, { status: 404 });
  }
  if (status === 'error') {
    return NextResponse.json(
      { message: 'Internal Server Error: Simulated failure.' },
      { status: 500 },
    );
  }

  return NextResponse.json({ message: 'Bad Request: Invalid status parameter.' }, { status: 400 });
}
