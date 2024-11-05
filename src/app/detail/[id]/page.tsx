import { getCrewDetail } from '@/src/_apis/detail/get-crew-detail';
import { getGatheringList } from '@/src/_apis/detail/get-gatheringList';
import Button from '@/src/components/common/button';
import DetailCrewCard from '@/src/components/common/crew-list/detail-crew-card';
import GatheringCardCarousel from '@/src/components/gathering-list/gathering-card-carousel';

export default async function CrewDetailPage() {
  const crewDetail = await getCrewDetail();
  const gatheringList = await getGatheringList();

  return (
    <div className="container mx-auto my-0 min-h-screen max-w-pc bg-gray-50 py-11 shadow-bg">
      <div className="space-y-10">
        <section className="lg:mx-12">
          <DetailCrewCard {...crewDetail} />
        </section>
        <section className="space-y-6 md:mx-8 lg:mx-12">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">크루 약속 잡기</h2>
            <Button type="button" className="btn-filled px-4">
              약속 만들기
            </Button>
          </div>
          <div className="flex">
            <GatheringCardCarousel gatheringData={gatheringList} />
          </div>
        </section>
        <section className="md:mx-8 lg:mx-12">
          <h2 className="text-2xl font-semibold">크루 리뷰</h2>
        </section>
      </div>
    </div>
  );
}
