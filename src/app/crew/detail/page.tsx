'use client';

import { Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import CreateGatheringModalContainer from '@/src/app/crew/_components/create-gathering-modal/container';
import { CreateGatheringRequestType } from '@/src/types/gathering-data';

export default function CrewDetailPage() {
  const initialValue: CreateGatheringRequestType = {
    title: '',
    introduce: '',
    dateTime: '',
    location: '',
    totalCount: 0,
    imageUrl: null,
  };

  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div className="container mx-auto my-0 max-w-pc px-5 lg:px-0">
      <Button onClick={open}>Open modal</Button>
      <CreateGatheringModalContainer opened={opened} close={close} data={initialValue} />
    </div>
  );
}
