import { getGatheringList } from '@/src/_apis/crew/crew-gathering-list-apis';
import CreateGathering from './_components/create-gathering';
import DetailCrew from './_components/detail-crew-container';
import GatheringListSection from './_components/gathering-list-section';
import CrewReviewSection from './_components/review-section';

interface CrewDetailPageProps {
  params: { id: string };
}

export default async function CrewDetailPage({ params }: CrewDetailPageProps) {
  const id = Number(params.id);

  return (
    <div className="mx-auto min-h-screen w-full max-w-full overflow-x-hidden">
      {/* Detail Section */}
      <section className="mx-3 my-7 md:mx-7 md:my-11 lg:mx-11 lg:my-16">
        <article>
          <DetailCrew id={id} />
        </article>
      </section>

      {/* Gathering Section */}
      <section className="w-full space-y-6">
        <article className="space-y-6">
          <div className="flex items-center justify-between px-3 md:px-7 lg:px-11">
            <h2 className="text-2xl font-semibold">크루 약속</h2>
            <CreateGathering crewId={Number(params.id)} />
          </div>
          <div className="flex w-full overflow-hidden px-3 md:px-7 lg:px-0">
            <div className="relative -mx-3 w-[calc(100%+1.5rem)] px-3 md:-mx-7 md:w-[calc(100%+3.5rem)] md:px-7 lg:-mx-6 lg:w-[calc(100%+3rem)] lg:px-0">
              <GatheringListSection id={id} />
            </div>
          </div>
        </article>
      </section>

      {/* Crew Review Section */}
      {/* <section className="w-full mx-3 md:mx-7 lg:mx-11 space-y-6">
        <article className="space-y-6">
          <h2 className="text-2xl font-semibold">크루 리뷰</h2>
          <CrewReviewSection />
        </article>
      </section> */}
    </div>
  );
}
