'use client';

import { toast } from 'react-toastify';
import { resetUserProfileImage, updateUserProfile } from '@/src/_apis/auth/user-apis';
import { useUser } from '@/src/_queries/auth/user-queries';
import ProfileSkeleton from '@/src/components/common/skeleton/profile-skeleton';
import ProfileCardPresenter from './presenter';

export default function ProfileCard() {
  const { data: user, isLoading: userLoading, refetch: refetchUser } = useUser();
  const profileImageUrl = user?.profileImageUrl || '';

  // 로딩 중일 때 스켈레톤 표시
  if (userLoading) return <ProfileSkeleton />;
  if (!user) return <ProfileSkeleton />;

  const handleEdit = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.png,.jpg,.jpeg';
    input.onchange = async (event) => {
      const file = (event.target as HTMLInputElement)?.files?.[0];
      if (file) {
        if (file.size > 5 * 1024 * 1024) {
          toast.error('5MB 이하의 파일만 업로드 가능합니다.');
          return;
        }

        try {
          await updateUserProfile(file);
          toast.success('프로필 이미지가 업데이트되었습니다.');
          await refetchUser();
        } catch (error) {
          toast.error('파일 업로드에 실패했습니다.');
        }
      }
    };
    input.click();
  };

  const handleDeleteProfile = async () => {
    try {
      await resetUserProfileImage();
      await refetchUser();
      toast.success('프로필 이미지가 초기화되었습니다.');
    } catch (error) {
      toast.error('프로필 이미지 초기화에 실패했습니다.');
    }
  };

  return (
    <ProfileCardPresenter
      data={{ ...user, profileImageUrl }}
      onEdit={handleEdit}
      onDelete={handleDeleteProfile}
    />
  );
}
