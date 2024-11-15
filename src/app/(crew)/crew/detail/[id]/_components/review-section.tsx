'use client';

import { useEffect, useState } from 'react';
import CrewReviewList from './crew-review-list';
import RatingDisplay from './rating-display';

export default function CrewReviewSection() {
  // TODO: review 추후 추가

  return (
    <div className="space-y-6 rounded-lg bg-white">
      <div className="mx-4 flex justify-center py-11">
        {/* <RatingDisplay reviewRateInfo={reviewData.info} /> */}
      </div>
      {/* <CrewReviewList
        reviews={reviewData.data}
        totalPages={reviewData.totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      /> */}
    </div>
  );
}
