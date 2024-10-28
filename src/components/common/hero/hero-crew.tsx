import Image from 'next/image';
import ImgHeroCrew from '@/public/assets/dumbbell.svg';

export default function HeroCrew() {
  return (
    <section className="">
      <div className="flex items-center gap-9">
        <Image src={ImgHeroCrew} width={130} height={110} alt="이미지" className="hidden md:flex" />
        <p className="flex flex-col md:gap-0.5">
          <strong className="typo-sm-medium text-gray-700 md:typo-base-medium">
            함께할 사람이 없나요?
          </strong>
          <strong className="typo-2xl-semibold text-gray-900 md:typo-4xl-semibold">
            지금 크루에 참여해보세요.
          </strong>
        </p>
      </div>
    </section>
  );
}
