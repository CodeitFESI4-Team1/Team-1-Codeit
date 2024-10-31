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
      <h2 className="mb-2 text-center text-2xl font-semibold md:mb-4 md:text-4xl">
        크루를 만들고 싶은 운동 선택
      </h2>
      <ul className="space-between mx-6 flex">
        {data.map((item, index) => (
          <li
            key={item.title.href}
            data-index={index}
            onMouseEnter={() => onHover(index)}
            className="flex flex-1 justify-center"
          >
            <Link
              href={item.title.href}
              className={`${pathname?.includes(item.title.href) && 'bg-blue-500'} flex flex-col items-center text-sm font-semibold text-gray-600 hover:text-blue-500 md:flex-row md:text-lg lg:text-xl lg:font-semibold`}
            >
              <Image src={ImgMainCategory[index]} width={53} height={45} alt={item.title.label} />
              <h3>{item.title.label}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
