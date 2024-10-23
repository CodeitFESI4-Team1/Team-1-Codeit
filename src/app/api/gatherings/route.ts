import { NextResponse } from 'next/server';
import { gatheringData } from '@/src/mock/gathering-data';

export async function GET() {
  return NextResponse.json(gatheringData);
}
