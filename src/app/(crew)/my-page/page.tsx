'use client';

import { redirect } from 'next/navigation';

export default function MyPage() {
  redirect('/my-page/reviewable');
  return null;
}
