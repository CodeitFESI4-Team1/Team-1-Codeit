'use client';

import { Loader } from '@mantine/core';
import { useCreateGatheringQuery } from '@/src/_queries/gathering/gathering-detail-queries';
import { CreateGatheringFormTypes, CreateGatheringRequestTypes } from '@/src/types/gathering-data';
import CreateGatheringModalPresenter from './presenter';

export interface CreateGatheringModalContainerProps {
  crewId: number;
  opened: boolean;
  close: () => void;
  data: CreateGatheringFormTypes;
}

export default function CreateGatheringModalContainer({
  crewId,
  opened,
  close,
  data,
}: CreateGatheringModalContainerProps) {
  const { isPending, mutate } = useCreateGatheringQuery(crewId);

  const handleSubmit = async (createdData: CreateGatheringFormTypes) => {
    const newData: CreateGatheringRequestTypes = {
      title: createdData.title,
      imageUrl: (createdData.imageUrl as string) ?? '',
      dateTime: createdData.dateTime,
      location: createdData.location,
      totalCount: createdData.totalCount,
      introduce: createdData.introduce,
    };

    mutate(newData);
    close();
  };
  const handleEdit = () => {
    // TODO : 약속 수정하기 API 연결
    close();
  };

  if (isPending)
    return (
      <div className="fixed inset-0 z-10 flex items-center justify-center">
        <Loader size="sm" />
      </div>
    );

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
