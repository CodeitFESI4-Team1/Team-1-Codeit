'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MainCategoryItem } from '@/src/types/category';
import IcoDown from '@/public/assets/icons/ic-down.svg';

export interface MainCategoryProps {
  category: MainCategoryItem[];
  onHover: (index: number) => void;
}

export default function MainCategory({ category, onHover }: MainCategoryProps) {
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleHover = (index: number) => {
    onHover(index);
    setActiveIndex(index);
  };

  return (
    <div>
      <ul className="space-between flex gap-6">
        {category.map((item, index) => (
          <li key={item.title.href} data-index={index} className="py-3 md:py-2">
            <Link
              href={item.title.href}
              onMouseEnter={() => handleHover(index)}
              className={`${pathname?.includes(item.title.href) ? 'bg-blue-500' : ''} ${activeIndex === index ? 'text-blue-500' : 'text-gray-600'} flex flex-col items-center text-base font-semibold md:flex-row md:text-lg lg:text-xl lg:font-semibold`}
            >
              <h3 className="flex items-center gap-1 lg:gap-2">
                <span className="flex py-3 md:py-2">{item.title.label}</span>
                <Image
                  src={IcoDown}
                  width={40}
                  height={36}
                  alt="보기"
                  className={`${pathname?.includes(item.title.href) ? 'flex' : ''} ${activeIndex === index ? 'flex' : 'hidden'} scale-75 lg:scale-100`}
                />
              </h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
