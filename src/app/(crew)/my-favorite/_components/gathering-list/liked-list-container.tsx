'use client';

import { useState } from 'react';
import { toast } from 'react-toastify';
import { addLike, removeLike } from '@/src/_apis/liked/liked-apis';
import { useGetLikedListQuery } from '@/src/_queries/liked/liked-queries';
import { ApiError } from '@/src/utils/api';
import GatheringSkeletonList from '@/src/components/common/skeleton/gathering-skeleton-list';
import LikedListPresenter from './liked-list-presenter';

export default function LikedList() {
  const [page, setPage] = useState(1);
  const { data: gatheringData, isLoading, error, refetch } = useGetLikedListQuery(page);

  const handleLike = async (gatheringId: number) => {
    try {
      await addLike(gatheringId);
      refetch();
    } catch (apiError) {
      if (apiError instanceof ApiError) {
        toast.error(`Error: ${apiError.message}`);
      }
    }
  };

  const handleUnlike = async (gatheringId: number) => {
    try {
      await removeLike(gatheringId);
      refetch();
    } catch (apiError) {
      if (apiError instanceof ApiError) {
        toast.error(`Error: ${apiError.message}`);
      }
    }
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  if (isLoading)
    return (
      <div className="mx-auto max-w-[1200px]">
        <GatheringSkeletonList num={6} />
      </div>
    );

  // 에러 처리: error 또는 gatheringData가 undefined일 경우
  if (error || gatheringData === undefined) {
    toast.error('좋아요 목록 가져오기 실패');
    return <div>좋아요 목록 가져오기 실패</div>;
  }

  // 빈 배열 처리(좋아요 목록이 없는 경우)
  if (gatheringData.content.length === 0) {
    return (
      <section className="py-16 text-center">
        <h3 className="text-xl font-bold text-blue-500">찜한 약속이 없습니다</h3>
        <p className="mt-4 text-gray-600">약속을 찜해보세요🙌</p>
      </section>
    );
  }

  return (
    <LikedListPresenter
      gatheringData={gatheringData}
      onPageChange={handlePageChange}
      onLike={handleLike}
      onUnlike={handleUnlike}
      page={page}
    />
  );
}
