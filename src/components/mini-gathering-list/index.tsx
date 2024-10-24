import MiniGatheringCard from '@/src/components/common/mini-gathering-card';
import { gatheringData } from '@/src/mock/gathering-data';

export default function MiniGatheringList() {
  const { data } = gatheringData;

  return (
    <div className="h-[360px] w-full overflow-y-auto overflow-x-hidden">
      <div>
        {data.map((item) => (
          <MiniGatheringCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
