'use client';

import ScheduledGatheringCard from '@/src/components/common/gathering-card/scheduled-gathering-card/container';
import { GatheringCardProps } from '@/src/types/gathering-data';

interface GatheringListWithDateProps {
  gatheringList: GatheringCardProps[];
}

export default function GatheringListWithDate({ gatheringList }: GatheringListWithDateProps) {
  return (
    <div className="m-4">
      {gatheringList.map((gathering) => (
        <ScheduledGatheringCard key={gathering.id} data={gathering} />
      ))}
    </div>
  );
}
