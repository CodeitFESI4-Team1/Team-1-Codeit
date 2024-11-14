'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/src/store/use-auth-store';
import ProfileCardPresenter from './presenter';

export default function ProfileCard() {
  const router = useRouter();
  const { user, isAuth } = useAuthStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 로딩 상태를 위해 약간의 지연 추가
    const timer = setTimeout(() => {
      if (!isAuth) {
        router.push('/login');
      } else {
        setIsLoading(false);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [isAuth, router]);

  if (isLoading) return <div>로딩 중...</div>;

  if (!user) return <div>유저 정보를 불러오지 못했습니다.</div>;

  const handleEdit = () => {
    // 프로필 수정 기능 추가
  };

  return <ProfileCardPresenter data={user} onEdit={handleEdit} />;
}
