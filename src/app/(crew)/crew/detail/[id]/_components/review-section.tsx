'use client';

import { useState } from 'react';
import { useGetCrewReviewsQuery } from '@/src/_queries/crew/crew-review-queries';
import ReviewListSkeleton from '@/src/components/common/skeleton/review-skeleton';
import CrewReviewList from './crew-review-list';
import RatingDisplay from './rating-display';

interface CrewReviewSectionProps {
  crewId: number;
}

export default function CrewReviewSection({ crewId }: CrewReviewSectionProps) {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useGetCrewReviewsQuery(crewId, page);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  if (isLoading) return <ReviewListSkeleton type="crew" />;

  if (isError || data === undefined) {
    return (
      <section className="py-16 text-center" aria-labelledby="error-heading">
        <h3 id="error-heading" className="text-xl font-bold text-red-600">
          데이터 로드 실패
        </h3>
        <p className="mt-4 text-gray-600">
          데이터를 불러오는 중 오류가 발생했습니다. <br />
          잠시 후 다시 시도해주세요.
        </p>
      </section>
    );
  }

  if (data?.reviewList.content.length === 0) {
    return (
      <section className="py-16 text-center">
        <h3 className="text-xl font-bold text-blue-500">리뷰가 아직 없습니다</h3>
        <p className="mt-4 text-gray-600">크루의 약속에 참여하고 리뷰를 남겨보세요!</p>
      </section>
    );
  }

  return (
    <div className="space-y-6 rounded-lg bg-white">
      <div className="mx-4 flex justify-center py-11">
        <RatingDisplay reviewRateInfo={data?.reviewRateInfo} />
      </div>
      <CrewReviewList
        reviews={data.reviewList.content}
        totalPages={data.reviewList.totalPages}
        currentPage={page}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
