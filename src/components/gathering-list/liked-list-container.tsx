'use client';

import { useState } from 'react';
import { addLike, removeLike } from '@/src/_apis/liked/liked-apis';
import { useGetLikedListQuery } from '@/src/_queries/liked/liked-queries';
import { ApiError } from '@/src/utils/api';
import Toast from '@/src/components/common/toast';
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
        Toast({ message: `Error: ${apiError.message}`, type: 'error' });
      }
    }
  };

  const handleUnlike = async (gatheringId: number) => {
    try {
      await removeLike(gatheringId);
      refetch();
    } catch (apiError) {
      if (apiError instanceof ApiError) {
        Toast({ message: `Error: ${apiError.message}`, type: 'error' });
      }
    }
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  if (isLoading) return <div>로딩중...</div>;

  // 에러 처리: error 또는 gatheringData가 undefined일 경우
  if (error || gatheringData === undefined) {
    Toast({ message: '좋아요 목록 가져오기 실패', type: 'error' });
    return <div>좋아요 목록 가져오기 실패</div>;
  }

  // 빈 배열 처리(좋아요 목록이 없는 경우)
  if (gatheringData.content.length === 0) {
    return <div>좋아요 누른 목록이 없습니다</div>;
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
