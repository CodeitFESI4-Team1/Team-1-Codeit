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
    <div className="relative flex items-center justify-between">
      <ul className="flex gap-6">
        {category?.map((item, index) => (
          <li
            key={item.title.href}
            data-index={index}
            onMouseEnter={() => onHover(index)}
            className="py-3 md:py-2"
          >
            <Link
              href={item.title.href}
              className={`${pathname?.includes(item.title.href) && 'bg-blue-500'} group typo-base-semibold flex flex-col items-center text-gray-400 md:typo-lg-semibold lg:typo-xl-semibold hover:text-blue-500 md:flex-row`}
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
        className="typo-sm-semibold absolute right-0 flex h-9 -translate-y-17 items-center rounded-xl bg-blue-500 py-2 md:typo-lg-bold md:h-11 md:translate-y-0"
      >
        크루 만들기
      </Button>
    </div>
  );
}
