import { getCrewDetail } from '@/src/_apis/detail/get-crew-detail';
import { getGatheringList } from '@/src/_apis/detail/get-gatheringList';
import Button from '@/src/components/common/button';
import DetailCrewCard from '@/src/components/common/crew-list/detail-crew-card';
import GatheringCardCarousel from '@/src/components/gathering-list/gathering-card-carousel';
import CrewReviewSection from './_components/review-section';

export default async function CrewDetailPage() {
  const crewDetail = await getCrewDetail();
  const gatheringList = await getGatheringList();

  return (
    <div className="mx-auto min-h-screen w-full max-w-full overflow-x-hidden">
      <div className="mx-3 space-y-10 md:mx-7 lg:mx-11">
        <section className="w-full">
          <article>
            <DetailCrewCard {...crewDetail} />
          </article>
        </section>
        <section className="w-full space-y-6">
          <article className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">크루 약속 잡기</h2>
              <Button type="button" className="btn-filled px-4">
                약속 만들기
              </Button>
            </div>
            <div className="flex w-full">
              <GatheringCardCarousel gatheringData={gatheringList} />
            </div>
          </article>
        </section>
        <section className="w-full">
          <article className="space-y-6">
            <h2 className="text-2xl font-semibold">크루 리뷰</h2>
            <CrewReviewSection />
          </article>
        </section>
      </div>
    </div>
  );
}
