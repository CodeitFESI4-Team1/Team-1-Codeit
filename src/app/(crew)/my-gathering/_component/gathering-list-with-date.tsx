'use client';

import { useMemo } from 'react';
import { formatDate, getDayOfWeek } from '@/src/utils/format-date';
import ScheduledGatheringCard from '@/src/components/common/gathering-card/scheduled-gathering-card/container';
import { GatheringCardProps } from '@/src/types/gathering-data';

interface GatheringListWithDateProps {
  gatheringList: GatheringCardProps[];
}

export default function GatheringListWithDate({ gatheringList }: GatheringListWithDateProps) {
  const gatheringListWithDateInfo = useMemo(() => {
    return gatheringList.map((gathering, index) => {
      const isNewDate =
        index === 0 ||
        formatDate(gathering.dateTime).date !== formatDate(gatheringList[index - 1].dateTime).date;
      return { ...gathering, isNewDate };
    });
  }, [gatheringList]);

  return (
    <div>
      {gatheringListWithDateInfo.map((gathering) => (
        <div key={gathering.id} className="md:flex">
          <div className="w-1/6">
            {gathering.isNewDate && (
              <div className="hidden flex-nowrap md:block">
                <div className="text-lg font-semibold">{formatDate(gathering.dateTime).date}</div>
                <div className="text-base font-medium text-gray-500">
                  {getDayOfWeek(gathering.dateTime)}
                </div>
              </div>
            )}
          </div>
          <div className={`${gathering.isNewDate && 'mt-3.5'} relative -mb-3.5 w-0.5 bg-gray-200`}>
            {gathering.isNewDate && <div className="md:corner-dot" />}
          </div>
          <div className="flex-1 pb-6 md:pl-8">
            <ScheduledGatheringCard key={gathering.id} data={gathering} />
          </div>
        </div>
      ))}
    </div>
  );
}
