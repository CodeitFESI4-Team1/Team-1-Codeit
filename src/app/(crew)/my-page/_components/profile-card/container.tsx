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
  const { data: user } = useUser();

  // const { rehydrated, setUser } = useAuthStore();
  // const [user, setLocalUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [profileImageUrl, setProfileImageUrl] = useState<string>('');

  useEffect(() => {
    const checkAuthAndLoadUser = async () => {
      // if (!rehydrated) return; // 상태 복원이 완료되지 않았으면 대기

      if (!isAuth) {
        router.push('/login'); // 인증되지 않은 경우 리디렉션
        return;
      }

      setIsLoading(true);

      try {
        const updatedUser = await fetchUpdatedUser();
        // setLocalUser(updatedUser);
        // setUser(updatedUser);
        setProfileImageUrl(updatedUser.profileImageUrl);
      } catch {
        toast.error('유저 정보를 가져오는 데 실패했습니다.');
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthAndLoadUser();
    // }, [isAuth, rehydrated, router, setUser]);
  }, [isAuth, router]);

  // if (!rehydrated) return null;
  if (!isAuth) return null;
  if (isLoading) return <div>로딩 중...</div>;
  if (!user) return <div>유저 정보를 불러오지 못했습니다.</div>;

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

          const updatedUser = await fetchUpdatedUser();
          const newProfileImageUrl = `${updatedUser.profileImageUrl}?timestamp=${new Date().getTime()}`;
          setProfileImageUrl(newProfileImageUrl);
          // setUser({ ...updatedUser, profileImageUrl: newProfileImageUrl });
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
      const updatedUser = await fetchUpdatedUser();
      setProfileImageUrl(''); // 초기화된 이미지 반영
      // setLocalUser(updatedUser);
      // setUser(updatedUser);
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
