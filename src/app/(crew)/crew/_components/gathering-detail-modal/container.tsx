'use client';

import {
  CancelGathering,
  JoinGathering,
  LeaveGathering,
} from '@/src/_apis/gathering/gathering-detail-apis';
import { ApiError } from '@/src/utils/api';
import Toast from '@/src/components/common/toast';
import { GatheringDetailType } from '@/src/types/gathering-data';
import GatheringDetailModalPresenter from './presenter';

export interface GatheringDetailModalContainerProps {
  opened: boolean;
  close: () => void;
  data: GatheringDetailType;
}

// NOTE: 테스트는 로그인 후 토큰이 안담겨서 추후 진행하겠습니다!

export default function GatheringDetailModalContainer({
  opened,
  close,
  data,
}: GatheringDetailModalContainerProps) {
  const showToast = (message: string, type: 'success' | 'error' | 'warning') => {
    Toast({ message, type });
  };

  const handleJoin = async () => {
    try {
      await JoinGathering(data.crewId, data.id);
      showToast('약속에 참여했습니다.', 'success');
      close();
    } catch (error) {
      if (error instanceof ApiError) {
        showToast(`참여 중 에러 발생: ${error.message}`, 'error');
      }
    }
  };

  const handleExit = async () => {
    try {
      await LeaveGathering(data.crewId, data.id);
      close();
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
