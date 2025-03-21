'use client';

import React from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useDisclosure } from '@mantine/hooks';
import { deleteReview } from '@/src/_apis/review/my-review-apis';
import { cn } from '@/src/utils/cn';
import { formatDateWithYear } from '@/src/utils/format-date';
import Button from '@/src/components/common/button';
import ConfirmCancelModal from '@/src/components/common/modal/confirm-cancel-modal';
import { Profile } from '@/src/components/common/profile';
import ReviewHearts from '@/src/components/common/review-heart/hearts';
import { ReviewerType } from '@/src/types/review';

interface ReviewCardProps {
  rate: number;
  comment: string;
  createdAt: string;
  id?: number;
  clickable?: boolean;
  isMine?: boolean;
  crewId?: number;
  crewName?: string;
  gatheringName?: string;
  refetch?: () => void;
  reviewer?: ReviewerType;
}

export default function ReviewCard({
  rate,
  comment,
  createdAt,
  id,
  clickable = false,
  isMine = false,
  crewId,
  crewName,
  gatheringName,
  refetch,
  reviewer,
}: ReviewCardProps) {
  const [
    confirmDeleteModalOpened,
    { open: openConfirmDeleteModal, close: closeConfirmDeleteModal },
  ] = useDisclosure(false);
  const router = useRouter();

  const handleDelete = async () => {
    if (!id) {
      toast.error('리뷰 ID가 없습니다.');
      return;
    }

    try {
      await deleteReview(id);
      toast.success('리뷰가 성공적으로 삭제되었습니다.');
      closeConfirmDeleteModal();
      refetch?.();
    } catch (error) {
      toast.error('리뷰 삭제에 실패했습니다.');
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    if (clickable && crewId) {
      router.push(`/crew/detail/${crewId}`);
    }
  };

  const { year, month, day } = formatDateWithYear(createdAt);
  const reviewDate = `${year}/${month}/${day}`;

  if (!isMine && !reviewer) throw new Error('나의 카드 리뷰 리스트일시 isMine이 true여야 합니다.');

  return (
    <div className="w-full">
      {isMine && (
        <button
          type="button"
          className="mb-3 flex w-fit items-center gap-2 text-xl font-semibold text-gray-800"
          onClick={handleClick}
        >
          {crewName}
        </button>
      )}
      <div
        role="presentation"
        className={cn(
          'relative flex h-full items-end',
          'bg-white lg:gap-[40px]',
          isMine ? 'rounded-[12px] p-6 shadow-bg' : 'border-b-[2px] border-b-[#F3F4F6] py-4',
        )}
      >
        <div className="flex-start flex w-full flex-col items-start justify-between pr-[20px] lg:pr-[40px]">
          {isMine && (
            <span className="mb-6 w-full border-b-[2px] border-b-[#E5E7EB] pb-2">
              {gatheringName}
            </span>
          )}
          <div className="flex-start flex flex-col">
            <ReviewHearts score={rate} />
            <p className="mb-2 mt-2.5 text-sm font-medium">{comment}</p>
          </div>
          <div className={`flex w-fit flex-shrink-0 items-center text-xs ${isMine ? 'mt-4' : ''}`}>
            {!isMine && (
              <>
                {reviewer && <Profile size="small" imageUrl={reviewer?.profileImageUrl} />}
                <span className="relative mr-3 block w-fit px-2 after:absolute after:right-0 after:content-['|']">
                  {reviewer?.nickname}
                </span>
              </>
            )}
            <span className="text-gray-500">{reviewDate}</span>
          </div>
        </div>
        <div />
        {isMine && (
          <Button
            className="btn-outlined absolute bottom-4 right-4 flex-shrink-0 p-[4px_10px] text-base font-semibold md:bottom-6 md:right-6 md:px-4"
            onClick={(e) => {
              e.stopPropagation();
              openConfirmDeleteModal();
            }}
          >
            리뷰 삭제하기
          </Button>
        )}
      </div>
      {/* 삭제 확인 모달 */}
      <ConfirmCancelModal
        opened={confirmDeleteModalOpened}
        onClose={closeConfirmDeleteModal}
        onConfirm={handleDelete}
      >
        리뷰를 삭제하시겠습니까?
      </ConfirmCancelModal>
    </div>
  );
}
