'use client';

import GatheringDetailModal from '@/src/components/gathering-detail-modal/presenter';
import { GatheringDetailType } from '@/src/types/gathering-data';

export interface GatheringDetailModalContainerProps {
  opened: boolean;
  close: () => void;
  data: GatheringDetailType;
}

export default function GatheringDetailModalContainer({
  opened,
  close,
  data,
}: GatheringDetailModalContainerProps) {
  const handleJoin = () => {
    // TODO : 모임 참여하기 API 연결
    close();
  };
  const handleExit = () => {
    // TODO : 모임 탈퇴하기 API 연결
    close();
  };
  const handleDelete = () => {
    // TODO : 모임 삭제하기 API 연결
    close();
  };

  return (
    <GatheringDetailModal
      data={data}
      opened={opened}
      onClose={close}
      onJoin={handleJoin}
      onExit={handleExit}
      onDelete={handleDelete}
    />
  );
}
