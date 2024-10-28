'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MainCategoryItem } from '@/src/types/category';
import IcoDown from '@/public/assets/icons/ic-down.svg';

export interface MainCategoryProps {
  data: MainCategoryItem[];
  onHover: (index: number) => void;
}

export default function MainCategory({ data, onHover }: MainCategoryProps) {
  const pathname = usePathname();

  return (
    <div>
      <ul className="flex gap-6">
        {data.map((item, index) => (
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
    </div>
  );
}
