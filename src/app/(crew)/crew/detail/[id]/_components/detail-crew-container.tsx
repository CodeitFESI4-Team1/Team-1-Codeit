'use client';

import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useGetCrewDetailQuery } from '@/src/_queries/crew/crew-detail-queries';
import { useAuthStore } from '@/src/store/use-auth-store';
import { ApiError } from '@/src/utils/api';
import DetailCrewPresenter from './detail-crew-presenter';

interface DetailCrewContainerProps {
  id: number;
}

export default function DetailCrew({ id }: DetailCrewContainerProps) {
  const { user } = useAuthStore();
  const currentUserId = user?.id;

  const [isCaptain, setIsCaptain] = useState(false);
  const [isMember, setIsMember] = useState(false);

  const { data, isLoading, error } = useGetCrewDetailQuery(id);

  useEffect(() => {
    if (currentUserId && data) {
      const captain = data.crewMembers.find((member) => member.captain);
      const memberExists = data.crewMembers.some((member) => member.id === currentUserId);

      setIsCaptain(captain?.id === currentUserId);
      setIsMember(memberExists);
    }
  }, [currentUserId, data]);

  const handleJoinClick = () => {
    // TODO: 참여 버튼 클릭 시 API 호출
  };

  const handleLeaveCrew = () => {
    // TODO: 크루 탈퇴 API 호출
  };

  const handleDelete = () => {
    // TODO: 크루 삭제 API 호출
  };

  const onShareClick = () => {
    const url = window.location.href;
    navigator.clipboard
      .writeText(url)
      .then(() => {
        toast.success('URL이 복사되었습니다! 📋');
      })
      .catch(() => {
        toast.error('URL 복사에 실패했습니다. 다시 시도해주세요.');
      });
  };

  // TODO: 로딩, 에러처리 추후 개선
  if (isLoading) {
    return <p>Loading...</p>;
  }

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

  if (!data) {
    return <p>데이터를 불러올 수 없습니다.</p>;
  }

  return (
    <DetailCrewPresenter
      data={data}
      isCaptain={isCaptain}
      isMember={isMember}
      handleJoinClick={handleJoinClick}
      handleLeaveCrew={handleLeaveCrew}
      handleDelete={handleDelete}
      onShareClick={onShareClick}
    />
  );
}
