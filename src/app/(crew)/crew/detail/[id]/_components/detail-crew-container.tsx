'use client';

import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { Loader } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { cancelCrew, joinCrew, leaveCrew } from '@/src/_apis/crew/crew-detail-apis';
import { useUser } from '@/src/_queries/auth/user-queries';
import { useGetCrewDetailQuery } from '@/src/_queries/crew/crew-detail-queries';
import { ApiError } from '@/src/utils/api';
import ConfirmCancelModal from '@/src/components/common/modal/confirm-cancel-modal';
import { User } from '@/src/types/auth';
import DetailCrewPresenter from './detail-crew-presenter';

interface DetailCrewContainerProps {
  id: number;
}

export default function DetailCrew({ id }: DetailCrewContainerProps) {
  const [isCaptain, setIsCaptain] = useState(false);
  const [isMember, setIsMember] = useState(false);
  const [isJoining, setIsJoining] = useState(false);
  const [confirmCancelOpened, { open: openConfirmCancel, close: closeConfirmCancel }] =
    useDisclosure();
  const router = useRouter();

  const { data: user } = useUser();

  const isDataWrappedUser = (value: unknown): value is { data: User } => {
    return typeof value === 'object' && value !== null && 'data' in value;
  };

  const currentUserId = isDataWrappedUser(user) ? user.data.id : user?.id;

  const { data, isLoading, error: fetchError, refetch } = useGetCrewDetailQuery(id);

  useEffect(() => {
    if (currentUserId && data) {
      const captain = data.crewMembers.find((member) => member.captain);
      const memberExists = data.crewMembers.some((member) => member.id === currentUserId);

      setIsCaptain(captain?.id === currentUserId);
      setIsMember(memberExists);
    }
  }, [currentUserId, data]);

  const handleJoinClick = async () => {
    if (isJoining) return;

    setIsJoining(true);
    try {
      await joinCrew(id);
      toast.success('크루에 참여하였습니다 🙌');
      setIsMember(true);
      await refetch();
    } catch (joinError) {
      if (joinError instanceof ApiError) {
        toast.error(joinError.message);
      } else {
        toast.error('🚫 크루 참여 중 에러가 발생했습니다.');
      }
    } finally {
      setIsJoining(false);
    }
  };

  const handleLeaveCrew = async () => {
    try {
      await leaveCrew(id);
      toast.success('크루를 탈퇴하였습니다👋');
      await refetch();
    } catch (leaveError) {
      if (leaveError instanceof ApiError) {
        toast.error(leaveError.message);
      } else {
        toast.error('🚫 크루 탈퇴 중 에러가 발생했습니다.');
      }
    }
  };

  const handleDelete = () => {
    openConfirmCancel();
  };

  const handleConfirmCancel = async () => {
    try {
      await cancelCrew(id);
      toast.success('크루가 성공적으로 삭제되었습니다.');
      router.push('/');
    } catch (deleteError) {
      toast.error('크루 삭제 중 에러가 발생했습니다.');
    }
  };

  const onShareClick = () => {
    const url = window.location.href;
    navigator.clipboard
      .writeText(url)
      .then(() => {
        toast.success('URL이 복사되었습니다!');
      })
      .catch(() => {
        toast.error('🚫 URL 복사에 실패했습니다. 다시 시도해주세요.');
      });
  };

  // TODO: 로딩, 에러처리 추후 개선
  if (isLoading) {
    return <Loader />;
  }

  if (fetchError) {
    if (fetchError instanceof ApiError) {
      try {
        const errorData = JSON.parse(fetchError.message);

        if (errorData.status === 'NOT_FOUND') {
          return <p>크루 정보를 찾을 수 없습니다</p>;
        }
      } catch (parseError) {
        return <p>{`Error ${fetchError.message}`}</p>;
      }
    }
    return <p>데이터 통신에 실패했습니다.</p>;
  }

  if (!data) {
    return <p>데이터를 불러올 수 없습니다.</p>;
  }

  return (
    <>
      <DetailCrewPresenter
        data={data}
        isCaptain={isCaptain}
        isMember={isMember}
        isJoining={isJoining}
        handleJoinClick={handleJoinClick}
        handleLeaveCrew={handleLeaveCrew}
        handleDelete={handleDelete}
        onShareClick={onShareClick}
      />

      <ConfirmCancelModal
        opened={confirmCancelOpened}
        onClose={closeConfirmCancel}
        onConfirm={handleConfirmCancel}
      >
        정말 삭제하시겠습니까?
      </ConfirmCancelModal>
    </>
  );
}
