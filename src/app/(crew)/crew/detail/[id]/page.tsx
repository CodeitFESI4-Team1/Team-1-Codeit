import { getGatheringList } from '@/src/_apis/detail/get-gathering-list';
import GatheringCardCarousel from '@/src/components/gathering-list/gathering-card-carousel';
import CreateGathering from './_components/create-gathering';
import DetailCrewSection from './_components/detail-crew-section';
import CrewReviewSection from './_components/review-section';

interface CrewDetailPageProps {
  params: { id: string };
}

export default async function CrewDetailPage({ params }: CrewDetailPageProps) {
  const id = Number(params.id);

  return (
    <div className="mx-auto min-h-screen w-full max-w-full overflow-x-hidden">
      <div className="mx-3 my-7 space-y-10 md:mx-7 md:my-11 lg:mx-11 lg:my-16">
        <section className="w-full">
          <article>
            <DetailCrewSection id={id} />
          </article>
        </section>
        <section className="w-full space-y-6">
          <article className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">크루 약속</h2>
              {/* <CreateGathering /> */}
            </div>
            <div className="flex w-full">
              {/* <GatheringCardCarousel gatheringData={gatheringList} /> */}
            </div>
          </article>
        </section>
        {/* // TODO: 리뷰 완성되면 수정 */}
        {/* <section className="w-full">
          <article className="space-y-6">
            <h2 className="text-2xl font-semibold">크루 리뷰</h2>
            <CrewReviewSection />
          </article>
        </section> */}
      </div>
    </div>
  );
}
