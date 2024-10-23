'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { theme } from '@/src/app/theme';
import IcoLeft from '@/public/assets/icon/ic-left.svg';
import IcoRight from '@/public/assets/icon/ic-right.svg';

export interface InternalCategoryProps {
  items: CategoryItem[];
}

export interface CategoryItem {
  href: string;
  label: string;
}

export default function InternalCategory({ items }: InternalCategoryProps) {
  const pathname = usePathname();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.md}) `, false);
  const tablet = useMediaQuery(
    `(min-width: ${theme.breakpoints.md}) and (max-width: ${theme.breakpoints.lg})`,
    false,
  );
  const desktop = useMediaQuery(`(min-width: ${theme.breakpoints.lg})`, false);

  const [numToScroll, setNumToScroll] = useState(9);

  const getIsArrowHidden = () => {
    if (mobile && items.length <= 4) return 'hidden';
    if (tablet && items.length <= 6) return 'hidden';
    if (desktop && items.length <= 9) return 'hidden';
    return '';
  };

  useEffect(() => {
    if (mobile) setNumToScroll(4);
    if (tablet) setNumToScroll(6);
    if (desktop) setNumToScroll(9);
  }, [mobile, tablet, desktop]);

  return (
    <Carousel
      withIndicators
      height={44}
      slideSize={{ base: '25%', md: '16.666666%', lg: '11.1111%' }} // 여전히 9개씩 나오도록 설정
      slideGap="md"
      align="start"
      slidesToScroll={numToScroll}
      previousControlIcon={<Image src={IcoLeft} width={12} height={24} alt="이전" />}
      nextControlIcon={<Image src={IcoRight} width={12} height={24} alt="이후" />}
      classNames={{
        root: 'relative mx-[24px]',
        container: 'flex gap-2',
        slide:
          'min-w-[calc(25%-6px)] md:min-w-[calc(16.6666%-6.666px)] lg:min-w-[calc(11.1111%-7.111px)]', // 슬라이드의 정확한 크기 강제
        viewport: 'overflow-hidden relative z-10',
        indicators: 'absolute inset-0 z-0',
        controls: `${getIsArrowHidden()} absolute inset-0 flex items-center`,
        control:
          'absolute w-[24px] h-full first:left-0 first:-translate-x-full last:right-0 last:translate-x-full flex justify-center items-center',
      }}
    >
      {items.map((item: CategoryItem) => (
        <Carousel.Slide key={item.label}>
          <Link
            href={`/${item.href}`}
            className={`${pathname?.includes(item.href) && 'bg-gray-900 text-white'} typo-base-medium md:typo-lg-medium flex w-full items-center justify-center rounded-xl bg-gray-100 p-2 text-gray-400`}
          >
            {item.label}
          </Link>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
