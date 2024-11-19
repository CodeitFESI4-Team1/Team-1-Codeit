'use client';

import { CreateGatheringFormTypes } from '@/src/types/gathering-data';
import CreateGatheringModalPresenter from './presenter';

export interface CreateGatheringModalContainerProps {
  opened: boolean;
  close: () => void;
  data: CreateGatheringFormTypes;
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
    <CreateGatheringModalPresenter
      data={data}
      opened={opened}
      onClose={close}
      onEdit={handleEdit}
      onSubmit={handleSubmit}
    />
  );
}
