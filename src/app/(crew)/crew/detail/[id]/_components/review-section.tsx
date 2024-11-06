'use client';

import { useEffect, useState } from 'react';
import { ReviewListData, getReviewList } from '@/src/_apis/detail/get-review-list';
import CrewReviewList from './crew-review-list';
import RatingDisplay from './rating-display';

export default function CrewReviewSection() {
  const [reviewData, setReviewData] = useState<ReviewListData | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 5;

  useEffect(() => {
    async function fetchReviewData() {
      const data = await getReviewList(currentPage, limit);
      setReviewData(data);
    }
    fetchReviewData();
  }, [currentPage]);

  const handlePageChange = (page: number) => setCurrentPage(page);

  if (!reviewData) return <div>Loading...</div>;

  return (
    <div className="space-y-6 rounded-lg bg-white">
      <div className="mx-4 flex justify-center py-11">
        <RatingDisplay reviewRateInfo={reviewData.info} />
      </div>
      <CrewReviewList
        reviews={reviewData.data}
        totalPages={reviewData.totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}