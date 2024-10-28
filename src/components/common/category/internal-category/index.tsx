'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { theme } from '@/src/app/theme';
import { CategoryItem } from '@/src/types/category';
import IcoLeft from '@/public/assets/icons/ic-left.svg';
import IcoRight from '@/public/assets/icons/ic-right.svg';

export interface InternalCategoryProps {
  items: CategoryItem[];
}

export default function InternalCategory({ items }: InternalCategoryProps) {
  const pathname = usePathname();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.md}) `, false);
  const tablet = useMediaQuery(
    `(min-width: ${theme.breakpoints.md}) and (max-width: ${theme.breakpoints.lg})`,
    false,
  );
  const desktop = useMediaQuery(`(min-width: ${theme.breakpoints.lg})`, false);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const slider = useRef<HTMLUListElement>(null);

  const [numToScroll, setNumToScroll] = useState(9);

  const getIsArrowHidden = () => {
    if (mobile && items.length <= 3) return 'hidden';
    if (tablet && items.length <= 5) return 'hidden';
    if (desktop && items.length <= 6) return 'hidden';
    return '';
  };

  const handleMouseDown = (e) => {
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
  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    if (slider.current) {
      const x = e.pageX - slider.current.offsetLeft;
      const walk = x - startX;

      slider.current.scrollLeft = scrollLeft - walk;
    }
  };

  useEffect(() => {
    if (mobile) setNumToScroll(3);
    if (tablet) setNumToScroll(5);
    if (desktop) setNumToScroll(6);
  }, [mobile, tablet, desktop]);

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <ul
      ref={slider}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="scrollbar-hide flex select-none snap-x flex-nowrap gap-3.5 overflow-scroll scroll-smooth"
    >
      {items.map((item: CategoryItem) => (
        <li key={item.label} className="snap-align-start flex">
          <Link
            href={item.href}
            className={`${pathname?.includes(item.href) && 'bg-gray-900 text-white'} typo-base-bold flex w-full min-w-28 items-center justify-center rounded-xl bg-gray-100 px-6 py-2 text-gray-400 transition-colors md:typo-lg-bold hover:bg-gray-900 hover:text-white`}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
