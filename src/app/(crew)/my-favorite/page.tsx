import GatheringList from '@/src/components/gathering-list/gathering-list';
import { gatheringData } from '@/src/mock/gathering-data';

export default function FavoritePage() {
  return (
    <div className="mt-4 md:mt-10">
      <GatheringList gatheringData={gatheringData} />
    </div>
  );
}
