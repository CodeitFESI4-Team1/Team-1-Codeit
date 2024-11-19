'use client';

import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import {
  fetchUpdatedUser,
  resetUserProfileImage,
  updateUserProfile,
} from '@/src/_apis/auth/user-apis';
import { useUser } from '@/src/_queries/auth/user-queries';
import { useAuth } from '@/src/hooks/use-auth';
import ProfileCardPresenter from './presenter';

export default function ProfileCard() {
  const router = useRouter();
  const { isAuth } = useAuth();
  const { data: user, isLoading: userLoading, refetch: refetchUser } = useUser();
  const [profileImageUrl, setProfileImageUrl] = useState<string>('');
  const [isAuthChecked, setIsAuthChecked] = useState(false);

  useEffect(() => {
    if (userLoading) return;

    if (user) {
      setIsAuthChecked(true);
    } else if (!isAuth) {
      toast.error('로그인이 필요합니다.');
      router.push('/login');
    } else {
      setIsAuthChecked(true);
    }
  }, [user, userLoading, isAuth, router]);

  useEffect(() => {
    if (user?.profileImageUrl) {
      setProfileImageUrl(user.profileImageUrl);
    }
  }, [user]);

  if (userLoading || !isAuthChecked) return <div>로딩 중...</div>;
  if (!user) return null;

  const handleEdit = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.png,.jpg,.jpeg';
    input.onchange = async (event) => {
      const file = (event.target as HTMLInputElement)?.files?.[0];
      if (file) {
        if (file.size > 5 * 1024 * 1024) {
          alert('5MB 이하의 파일만 업로드 가능합니다.');
          return;
        }

        try {
          await updateUserProfile(file);

          const tempUrl = URL.createObjectURL(file);
          setProfileImageUrl(tempUrl);

          await refetchUser();
          toast.success('프로필 이미지가 업데이트되었습니다.');
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
      setProfileImageUrl(''); // 초기화된 이미지 반영
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
