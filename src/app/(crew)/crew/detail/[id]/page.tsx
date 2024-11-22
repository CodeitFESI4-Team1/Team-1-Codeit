import dynamic from 'next/dynamic';
import DetailCrew from './_components/detail-crew-container';

// Lazy Import
const CreateGathering = dynamic(() => import('./_components/create-gathering'), { ssr: false });
const GatheringListSection = dynamic(() => import('./_components/gathering-list-section'), {
  ssr: false,
});
const CrewReviewSection = dynamic(() => import('./_components/review-section'), { ssr: false });

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
          <CreateGathering crewId={Number(params.id)} />
          <div className="flex w-full overflow-hidden px-3 md:px-7 lg:px-0">
            <div className="relative -mx-3 w-[calc(100%+1.5rem)] px-3 md:-mx-7 md:w-[calc(100%+3.5rem)] md:px-7 lg:-mx-6 lg:w-[calc(100%+3rem)] lg:px-0">
              <GatheringListSection id={id} />
            </div>
          </div>
        </article>
      </section>

      {/* Crew Review Section */}
      <section className="mx-3 mt-10 w-full space-y-6 md:mx-7 lg:mx-11">
        <article className="space-y-6">
          <h2 className="text-2xl font-semibold">크루 리뷰</h2>
          <CrewReviewSection crewId={id} />
        </article>
      </section>
    </div>
  );
}
