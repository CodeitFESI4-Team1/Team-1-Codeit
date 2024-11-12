'use client';

import { useGetCrewDetailQuery } from '@/src/_queries/detail/crew-detail-queries';
import { ApiError } from '@/src/utils/api';
import DetailCrewCard from '@/src/components/common/crew-list/detail-crew-card';

interface DetailCrewSectionProps {
  id: number;
}

export default function DetailCrewSection({ id }: DetailCrewSectionProps) {
  const { data, isLoading, error } = useGetCrewDetailQuery(id);
  // TODO: 추후 에러 처리
  if (isLoading) return <p>Loading...</p>;

  if (error) {
    if (error instanceof ApiError) {
      try {
        const errorData = JSON.parse(error.message);

        if (errorData.status === 'NOT_FOUND') {
          return <p>크루 정보를 찾을 수 없습니다</p>;
        }
      } catch {
        return <p>{`Error ${error.status}: ${error.message}`}</p>;
      }
    }
    return <p>데이터 통신에 실패했습니다.</p>;
  }

  // console.log('crew detail data:', data);

  // data가 있을 때만 DetailCrewCard를 렌더링
  return data ? <DetailCrewCard data={data} /> : null;
}
