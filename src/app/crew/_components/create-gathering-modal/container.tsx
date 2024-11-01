'use client';

import { CreateGatheringRequestType } from '@/src/types/gathering-data';
import CreateGatheringModal from './presenter';

export interface CreateGatheringModalContainerProps {
  opened: boolean;
  close: () => void;
  data: CreateGatheringRequestType;
}

export default function CreateGatheringModalContainer({
  opened,
  close,
  data,
}: CreateGatheringModalContainerProps) {
  const handleSubmit = () => {
    // TODO : 약속 만들기 API 연결
    close();
  };
  const handleEdit = () => {
    // TODO : 약속 수정하기 API 연결
    close();
  };

  return (
    <CreateGatheringModal
      data={data}
      opened={opened}
      onClose={close}
      onEdit={handleEdit}
      onSubmit={handleSubmit}
    />
  );
}
