'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Button from '@/src/components/common/button';
import { MainCategoryItem } from '@/src/types/category';

export interface MainCategoryProps {
  value: string;
  category: MainCategoryItem[];
  onChange: (value: string) => void;
  onHover: (index: number) => void;
}

export default function MainCategory({ value, category, onHover, onChange }: MainCategoryProps) {
  const mainCategory = useRef<HTMLLIElement[] | null>([]);
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);
  const [position, setPosition] = useState<number>(0);

  const handleHover = (index: number) => {
    onHover(index);
    setActiveIndex(index);
  };

  const updateBar = useCallback(() => {
    if (mainCategory.current && mainCategory.current.length > activeIndex) {
      setWidth(mainCategory.current[activeIndex]?.clientWidth);
      setPosition((mainCategory.current[activeIndex] as HTMLElement)?.offsetLeft);
    }
  }, [activeIndex]);

  useEffect(() => {
    updateBar();
  }, []);

  useEffect(() => {
    updateBar();
  }, [updateBar, activeIndex]);

  useEffect(() => {
    // 윈도우 크기 조절 시 위치와 크기 업데이트
    window.addEventListener('resize', updateBar);

    return () => {
      window.removeEventListener('resize', updateBar);
    };
  }, [updateBar]);

  return (
    <div className="relative mb-1">
      <ul className="space-between flex gap-6">
        {category.map((item, index) => (
          <li
            key={item.title.href}
            ref={(el) => {
              if (el) {
                mainCategory.current![index] = el;
              }
            }}
          >
            <Button
              onMouseEnter={() => handleHover(index)}
              onClick={() => onChange(item.title.value)}
              className={`${pathname?.includes(item.title.value ?? value) ? 'bg-blue-500' : ''} ${activeIndex === index ? 'text-blue-500' : 'text-gray-600'} flex flex-col items-center text-base font-semibold md:flex-row md:text-lg lg:text-xl lg:font-semibold`}
            >
              <h3 className="flex items-center gap-1 lg:gap-2">
                <span className="flex">{item.title.label}</span>
              </h3>
            </Button>
          </li>
        ))}
      </ul>
      <div
        className="absolute bottom-0 left-0 h-1 translate-x-0 rounded-full bg-blue-500 transition-all duration-300"
        style={{ width: `${width}px`, transform: `translateX(${position}px)` }}
      />
    </div>
  );
}
