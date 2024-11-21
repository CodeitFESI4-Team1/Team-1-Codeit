'use client';

import { toast } from 'react-toastify';
import { Loader } from '@mantine/core';
import { useGetMyReviewsQuery } from '@/src/_queries/review/my-review-queries';
import { useInfiniteScroll } from '@/src/hooks/use-infinite-scroll';
import ReviewCardList from '@/src/components/common/review-list/review-card-list';

export default function MyReviewPage() {
  const size = 6;

  const { data, isLoading, error, ref, isFetchingNextPage, refetch } = useInfiniteScroll(
    useGetMyReviewsQuery({ size }),
  );

  if (isLoading) {
    return (
      <div className="flex h-full items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (error) {
    toast.error('리뷰를 불러오는 중 문제가 발생했습니다.');
    return null;
  }

  return (
    <div className="mt-8">
      <ReviewCardList data={data ?? { pages: [], pageParams: [] }} refetch={refetch} />
      {isFetchingNextPage && (
        <div className="mt-4 flex items-center justify-center">
          <Loader />
        </div>
      )}
      <div ref={ref} className="h-[1px]" />
    </div>
  );
}
