import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@mantine/core';
import { useAuthStore } from '@/src/store/use-auth-store';
import ImgHeroCrew from '@/public/assets/icons/ic-dumbbell.svg';

export default function HeroCrew() {
  const { isAuth, logout } = useAuthStore();
  const router = useRouter();

  // const handleLogout = () => {
  //   logout();
  //   router.push('/');
  // };

  return (
    <section className="pb-3 md:pb-4 lg:pb-12.5">
      <div className="flex items-end justify-between">
        <div className="flex items-center gap-9">
          <Image src={ImgHeroCrew} width={99} height={64} alt="이미지" className="hidden md:flex" />
          <p className="flex flex-col">
            <strong className="text-sm font-medium text-gray-700 md:text-base">
              함께할 사람이 없나요?
            </strong>
            <strong className="text-2xl font-semibold text-gray-900 md:text-3.5xl">
              지금 크루에 참여해보세요.
            </strong>
          </p>
        </div>
        <Button
          component={Link}
          href={isAuth ? '/crew/create' : '/login'}
          className="-translate-y-1 items-center rounded-xl bg-blue-500 py-2 text-sm font-semibold md:h-11 md:text-lg md:font-bold"
        >
          크루 만들기
        </Button>
      </div>
    </section>
  );
}
