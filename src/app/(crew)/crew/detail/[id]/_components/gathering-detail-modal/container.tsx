'use client';

import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import {
  CancelGathering,
  JoinGathering,
  LeaveGathering,
} from '@/src/_apis/gathering/gathering-detail-apis';
import { ApiError } from '@/src/utils/api';
import { GatheringDetailType } from '@/src/types/gathering-data';
import GatheringDetailModalPresenter from './presenter';

export interface GatheringDetailModalContainerProps {
  opened: boolean;
  close: () => void;
  data: GatheringDetailType;
  onUpdate?: () => void;
}

export default function GatheringDetailModalContainer({
  opened,
  close,
  data,
  onUpdate,
}: GatheringDetailModalContainerProps) {
  const showToast = (message: string, type: 'success' | 'error' | 'warning') => {
    toast(message, { type });
  };
  const router = useRouter();

  const handleJoin = async () => {
    try {
      await JoinGathering(data.crewId, data.id);
      close();
      onUpdate?.();
    } catch (error) {
      if (error instanceof ApiError && error.status === 401) {
        const redirectUrl = `/login?redirect=${encodeURIComponent(window.location.pathname)}`;
        router.push(redirectUrl);
      } else {
        showToast('참여 중 에러가 발생했습니다.', 'error');
      }
    }
  };

  const handleExit = async () => {
    try {
      await LeaveGathering(data.crewId, data.id);
      close();
      onUpdate?.();
    } catch (error) {
      if (error instanceof ApiError) {
        showToast(`참여 취소 중 에러 발생: ${error.message}`, 'error');
      }
    }
  };

  const handleDelete = async () => {
    try {
      await CancelGathering(data.crewId, data.id);
      showToast('약속을 삭제했습니다.', 'success');
      close();
      onUpdate?.();
    } catch (error) {
      if (error instanceof ApiError) {
        showToast(`약속 삭제 중 에러 발생: ${error.message}`, 'error');
      }
    }
  };

  return (
    <GatheringDetailModalPresenter
      data={data}
      opened={opened}
      onClose={close}
      onJoin={handleJoin}
      onExit={handleExit}
      onDelete={handleDelete}
    />
  );
}
