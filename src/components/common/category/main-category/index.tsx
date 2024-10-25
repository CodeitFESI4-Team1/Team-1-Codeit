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
      <h2 className="typo-2xl-semibold md:typo-4xl-semibold text-center mb-2 md:mb-4">
        크루를 만들고 싶은 운동 선택
      </h2>
      <ul className="flex space-between mx-6">
        {data.map((item, index) => (
          <li
            key={item.title.href}
            data-index={index}
            onMouseEnter={() => onHover(index)}
            className="flex flex-1 justify-center bg-gray-50"
          >
            <Link
              href={item.title.href}
              className={`${pathname?.includes(item.title.href) && 'bg-blue-500 '} flex items-center hover:text-blue-500 typo-sm-semibold md:typo-lg-semibold lg:typo-xl-semibold text-gray-600 `}
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
