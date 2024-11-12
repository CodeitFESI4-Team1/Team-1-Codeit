'use client';

import { useGetGatheringListQuery } from '@/src/_queries/detail/gathering-list-queries';
import GatheringCardCarousel from '@/src/components/gathering-list/gathering-card-carousel';

interface GatheringListSectionProps {
  id: number;
}

export default function GatheringListSection({ id }: GatheringListSectionProps) {
  const { data: gatheringList, isLoading, error } = useGetGatheringListQuery(id);

  if (isLoading) return <p>로딩 중...</p>;

  if (error) return <p>데이터를 불러오는 데 실패했습니다: {error.message}</p>;

  const data = gatheringList ? Object.values(gatheringList) : [];

  if (data.length === 0) return <p>데이터가 없습니다.</p>;

  return <GatheringCardCarousel gatheringData={data} />;
}
