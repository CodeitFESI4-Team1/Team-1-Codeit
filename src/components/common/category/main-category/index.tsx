'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MainCategoryItem } from '@/src/types/category';
import ImgMainCategory from '@/public/category';

export interface MainCategoryProps {
  data: MainCategoryItem[];
  onHover: (index: number) => void;
}

export default function MainCategory({ data, onHover }: MainCategoryProps) {
  const pathname = usePathname();

  return (
    <div>
      <h2 className="typo-2xl-semibold mb-2 text-center md:typo-4xl-semibold md:mb-4">
        크루를 만들고 싶은 운동 선택
      </h2>
      <ul className="flex gap-2 md:gap-10 lg:gap-[45px]">
        {data.map((item, index) => (
          <li key={item.title.href} data-index={index} onMouseEnter={() => onHover(index)}>
            <Link
              href={item.title.href}
              className={`${pathname?.includes(item.title.href) && 'bg-blue-500'} typo-sm-semibold flex flex-col text-center text-gray-600 md:typo-lg-semibold lg:typo-xl-semibold hover:text-blue-500`}
            >
              <Image src={ImgMainCategory[index]} width={153} height={145} alt={item.title.label} />
              <h3>{item.title.label}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
