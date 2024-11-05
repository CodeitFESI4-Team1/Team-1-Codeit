import { redirect } from 'next/navigation';

export default function MyGatheringPage() {
  redirect('/my-gathering/participation');
  return null;
}
