import { redirect } from 'next/navigation';

export default function MyGatheringPage() {
  redirect('/my-gathering/joined');
  return null;
}
