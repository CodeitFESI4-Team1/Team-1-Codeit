'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@mantine/core';
import { MainCategoryItem } from '@/src/types/category';
import IcoDown from '@/public/assets/icons/ic-down.svg';

export interface MainCategoryProps {
  category: MainCategoryItem[];
  onHover: (index: number) => void;
}

export default function MainCategory({ category, onHover }: MainCategoryProps) {
  const pathname = usePathname();

  return (
    <div>
      <h2 className="mb-2 text-center text-2xl font-semibold md:mb-4 md:text-4xl">
        크루를 만들고 싶은 운동 선택
      </h2>
      <ul className="space-between mx-6 flex">
        {category.map((item, index) => (
          <li
            key={item.title.href}
            data-index={index}
            onMouseEnter={() => onHover(index)}
            className="py-3 md:py-2"
          >
            <Link
              href={item.title.href}
              className={`${pathname?.includes(item.title.href) && 'bg-blue-500'} flex flex-col items-center text-sm font-semibold text-gray-600 hover:text-blue-500 md:flex-row md:text-lg lg:text-xl lg:font-semibold`}
            >
              <h3 className="flex items-center gap-1 lg:gap-2">
                <span className="flex py-2.5 md:py-2">{item.title.label}</span>
                <Image
                  src={IcoDown}
                  width={40}
                  height={36}
                  alt="보기"
                  className={`${pathname?.includes(item.title.href) ? 'flex' : 'hidden'} scale-75 group-hover:flex lg:scale-100`}
                />
              </h3>
            </Link>
          </li>
        ))}
      </ul>
      <Button
        component={Link}
        href="/create-crew"
        className="absolute right-0 flex h-9 -translate-y-17 items-center rounded-xl bg-blue-500 py-2 text-sm font-semibold md:h-11 md:translate-y-0 md:text-lg md:font-bold"
      >
        크루 만들기
      </Button>
    </div>
  );
}
