import GatheringList from '@/src/components/gathering-list/gathering-list';
import { gatheringData } from '@/src/mock/gathering-data';

export default function FavoritePage() {
  return (
    <div className="md:mt-[45px]">
      <GatheringList gatheringData={gatheringData}></GatheringList>
    </div>
  );
}
