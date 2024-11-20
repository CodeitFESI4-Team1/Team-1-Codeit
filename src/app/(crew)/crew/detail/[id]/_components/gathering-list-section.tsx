'use client';

import { useState } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { Loader } from '@mantine/core';
import { addLike, removeLike } from '@/src/_apis/liked/liked-apis';
import { useGetGatheringListQuery } from '@/src/_queries/crew/gathering-list-queries';
import { ApiError } from '@/src/utils/api';
import ConfirmModal from '@/src/components/common/modal/confirm-modal';
import CrewGatheringList from '@/src/components/gathering-list/crew-gathering-list';

interface GatheringListSectionProps {
  id: number;
}

export default function GatheringListSection({ id }: GatheringListSectionProps) {
  const { data: gatheringList, isLoading, error, refetch } = useGetGatheringListQuery(id);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const router = useRouter();

  const handleLike = async (gatheringId: number) => {
    try {
      await addLike(gatheringId);
    } catch (apiError) {
      if (apiError instanceof ApiError) {
        toast.error(`찜하기에 실패했습니다: ${apiError.message}`);
      }
    }
  };

  const handleUnlike = async (gatheringId: number) => {
    try {
      await removeLike(gatheringId);
    } catch (apiError) {
      if (apiError instanceof ApiError) {
        toast.error(`찜하기 해제에 실패했습니다: ${apiError.message}`);
      }
    }
  };

  const handleLoginRedirect = () => {
    const currentPath = window.location.pathname || '/';
    router.push(`/login?redirect=${encodeURIComponent(currentPath)}`);
  };

  const handleModalAction = () => {
    refetch();
  };

  // TODO: 추후 에러, 로딩 수정
  if (isLoading)
    return (
      <div className="flex items-center justify-center">
        <Loader />
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center">
        <p>데이터를 불러오는 데 실패했습니다</p>
      </div>
    );

  if (!gatheringList || gatheringList.length === 0)
    return (
      <div className="flex items-center justify-center">
        <p>데이터가 없습니다.</p>
      </div>
    );

  return (
    <>
      <CrewGatheringList
        gatheringData={gatheringList}
        crewId={id}
        onLike={handleLike}
        onUnlike={handleUnlike}
        onShowLoginModal={() => setShowLoginModal(true)}
        onModalAction={handleModalAction}
      />
      {showLoginModal && (
        <ConfirmModal
          opened={showLoginModal}
          onClose={() => setShowLoginModal(false)}
          onConfirm={handleLoginRedirect}
        >
          로그인이 필요합니다!
        </ConfirmModal>
      )}
    </>
  );
}
