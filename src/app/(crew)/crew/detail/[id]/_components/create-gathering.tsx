'use client';

import { useDisclosure } from '@mantine/hooks';
import CreateGatheringModalContainer from '@/src/app/(crew)/crew/_components/create-gathering-modal/container';
import Button from '@/src/components/common/input/button';
import { CreateGatheringRequestType } from '@/src/types/gathering-data';

export default function CreateGathering() {
  const [opened, { open, close }] = useDisclosure(false);

  const initialValue: CreateGatheringRequestType = {
    title: '',
    introduce: '',
    dateTime: '',
    location: '',
    totalCount: 0,
    imageUrl: null,
  };

  return (
    <>
      <Button type="button" className="btn-filled px-4" onClick={open}>
        약속 만들기
      </Button>
      <CreateGatheringModalContainer opened={opened} close={close} data={initialValue} />
    </>
  );
}
