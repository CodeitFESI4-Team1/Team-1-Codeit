'use client';

import { useRouter } from 'next/navigation';
import { useDisclosure } from '@mantine/hooks';
import { useAuthStore } from '@/src/store/use-auth-store';
import CreateGatheringModalContainer from '@/src/app/(crew)/crew/_components/create-gathering-modal/container';
import Button from '@/src/components/common/input/button';
import { CreateGatheringFormTypes } from '@/src/types/gathering-data';

export default function CreateGathering() {
  const { isAuth } = useAuthStore();
  const router = useRouter();
  const [opened, { open, close }] = useDisclosure(false);

  const handleButtonClick = () => {
    if (isAuth) {
      open(); // 로그인 상태일 경우 모달 열기
    } else {
      router.push('/login'); // 비로그인 상태일 경우 로그인 페이지로 이동
    }
  };

  const initialValue: CreateGatheringFormTypes = {
    title: '',
    introduce: '',
    dateTime: '',
    location: '',
    totalCount: 2,
    imageUrl: null,
  };

  return (
    <>
      <Button type="button" className="btn-filled px-4" onClick={handleButtonClick}>
        약속 만들기
      </Button>
      <CreateGatheringModalContainer opened={opened} close={close} data={initialValue} />
    </>
  );
}
