'use client';

import { useRouter } from 'next/navigation';
import { useDisclosure } from '@mantine/hooks';
import { useAuthStore } from '@/src/store/use-auth-store';
import CreateGatheringModalContainer from '@/src/app/(crew)/crew/_components/create-gathering-modal/container';
import Button from '@/src/components/common/input/button';
import { CreateGatheringFormTypes } from '@/src/types/gathering-data';

export default function CreateGathering() {
  const handleButtonClick = () => {
    // TODO: 약속 만들기
  };

  return (
    <>
      <Button type="button" className="btn-filled px-4" onClick={handleButtonClick}>
        약속 만들기
      </Button>
      {/* <CreateGatheringModalContainer opened={opened} close={close} data={initialValue} /> */}
    </>
  );
}
