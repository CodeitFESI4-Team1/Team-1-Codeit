'use client';

import React from 'react';
import { Pagination } from '@mantine/core';
import ReviewCard from '@/src/components/common/review-list/review-card';
import { CrewReview } from '@/src/types/review';

interface CrewReviewListProps {
  reviews: CrewReview[];
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export default function CrewReviewList({
  reviews,
  totalPages,
  currentPage,
  onPageChange,
}: CrewReviewListProps) {
  return (
    <div className="flex flex-col justify-between p-6">
      <div className="mb-6 grid flex-grow gap-4">
        {/* {reviews.map((review) => (
          <ReviewCard
            key={review.id}
            rate={review.rate}
            comment={review.comment}
            createdAt={review.createdAt}
            crewId={review.crewId}
            reviewer={review.reviewer}
          />
        ))} */}
      </div>
      <div className="mt-6 flex justify-center">
        <Pagination
          total={totalPages}
          value={currentPage}
          onChange={onPageChange}
          styles={{
            control: {
              border: 'none',
              backgroundColor: 'transparent',
              '&[data-active]': {
                backgroundColor: 'transparent',
                fontWeight: 'var(--pagination-active-font-weight)',
                color: 'var(--pagination-active-color)',
                boxShadow: 'none',
              },
              '&:hover': {
                backgroundColor: 'transparent',
              },
            },
            root: {
              '--pagination-active-color': '#3388FF',
              '--pagination-active-font-weight': 'bold',
            },
          }}
          size="sm"
        />
      </div>
    </div>
  );
}
