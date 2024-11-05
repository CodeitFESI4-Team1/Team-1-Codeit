import { ParticipantType } from '@/src/types/writable-gathering-card';

interface WritableGatheringCardProps {
  id: number;
  gatheringName: string;
  dateTime: string;
  currentCount: number;
  totalCount: number;
  imageUrl: string;
  participants: ParticipantType[];
}

export default function WritableGatheringCard({
  id,
  currentCount,
  dateTime,
  gatheringName,
  imageUrl,
  participants,
  totalCount,
}: WritableGatheringCardProps) {
  return (
    <div>
      <span>{id}</span>
      <span>{currentCount}</span>
      <span>{dateTime}</span>
      <span>{gatheringName}</span>
      <span>{imageUrl}</span>
      <span>{totalCount}</span>
    </div>
  );
}
