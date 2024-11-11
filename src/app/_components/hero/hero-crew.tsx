import Image from 'next/image';
import Link from 'next/link';
import { useAuthStore } from '@/src/store/use-auth-store';
import Button from '@/src/components/common/input/button';
import ImgHeroCrew from '@/public/assets/icons/ic-dumbbell.svg';

export default function HeroCrew() {
  const { isAuth } = useAuthStore();

  return (
    <section className="cursor-default pb-3 md:pb-4 lg:pb-12.5">
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
        <Link
          href={isAuth ? '/crew/create' : '/login'}
          className="btn-filled -translate-y-1 items-center rounded-xl px-4 py-2 text-sm font-semibold md:h-11 md:text-lg md:font-bold"
        >
          크루 만들기
        </Link>
      </div>
    </section>
  );
}
