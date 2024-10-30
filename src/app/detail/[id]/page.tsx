'use client';

import { Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import GatheringDetailModalContainer from '@/src/components/gathering-detail-modal/container';

// TODO : 임시로 작성됨. GatheringCardContainer 안쪽으로 이동 예정
export default function CrewDetailPage() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Button onClick={open}>Open modal</Button>
      <GatheringDetailModalContainer opened={opened} close={close} />
    </>
  );
}
