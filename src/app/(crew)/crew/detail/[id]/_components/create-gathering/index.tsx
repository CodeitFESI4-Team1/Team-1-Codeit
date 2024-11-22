'use client';

import { useRouter } from 'next/navigation';
import { useDisclosure } from '@mantine/hooks';
import { useGetGatheringListQuery } from '@/src/_queries/crew/gathering-list-queries';
import { useAuth } from '@/src/hooks/use-auth';
import CreateGatheringModalContainer from '@/src/app/(crew)/crew/detail/[id]/_components/create-gathering/create-gathering-modal/container';
import Button from '@/src/components/common/button';
import { CreateGatheringFormTypes } from '@/src/types/gathering-data';

export default function CreateGathering({ crewId }: { crewId: number }) {
  const { isAuth } = useAuth();
  const router = useRouter();
  const [opened, { open, close }] = useDisclosure(false);

  const { data: gatheringList } = useGetGatheringListQuery(crewId);

  // totalGatheringCount 추출
  const totalGatheringCount = gatheringList?.length ?? 0;

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
    <div className="flex items-center justify-between px-3 md:px-7 lg:px-11">
      <div className="flex flex-col space-y-1 md:flex-row md:items-end md:space-x-2">
        <h2 className="text-2xl font-semibold text-gray-800">약속 잡기</h2>
        <span className="text-sm font-semibold text-blue-500 md:text-base">
          현재 {totalGatheringCount}개의 약속이 개설되어 있습니다.
        </span>
      </div>
      <Button type="button" className="btn-filled px-4" onClick={handleButtonClick}>
        약속 만들기
      </Button>
      <CreateGatheringModalContainer
        crewId={crewId}
        opened={opened}
        close={close}
        data={initialValue}
      />
    </div>
  );
}
