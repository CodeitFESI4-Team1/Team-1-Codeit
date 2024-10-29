'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CategoryItem } from '@/src/types/category';

export interface InternalCategoryProps {
  category: CategoryItem[];
}

export default function InternalCategory({ category }: InternalCategoryProps) {
  const pathname = usePathname();
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const slider = useRef<HTMLUListElement>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLUListElement>) => {
    setIsDown(true);
    if (slider.current) {
      setStartX(e.pageX - slider.current.offsetLeft);
      setScrollLeft(slider.current.scrollLeft);
    }
  };
  const handleMouseLeave = () => {
    setIsDown(false);
  };
  const handleMouseUp = () => {
    setIsDown(false);
  };
  const handleMouseMove = (e: React.MouseEvent<HTMLUListElement>) => {
    if (!isDown) return;
    e.preventDefault();
    if (slider.current) {
      const x = e.pageX - slider.current.offsetLeft;
      const walk = x - startX;

      slider.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <ul
      ref={slider}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="scrollbar-hide flex snap-x flex-nowrap gap-2 overflow-scroll scroll-smooth md:gap-3.5"
    >
      {category?.map((item: CategoryItem) => (
        <li key={item.label} className="snap-align-start flex">
          <Link
            href={item.href}
            draggable={false}
            className={`${pathname?.includes(item.href) && 'bg-gray-900 text-white'} h-10 min-w-27.5 items-center justify-center text-nowrap rounded-xl bg-gray-100 px-4 py-2 text-center text-sm font-bold text-gray-400 transition-colors hover:bg-gray-900 hover:text-white md:h-11 md:text-lg`}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
