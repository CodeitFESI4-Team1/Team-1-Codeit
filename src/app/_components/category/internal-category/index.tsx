'use client';

import { usePathname } from 'next/navigation';
import { useSlider } from '@/src/hooks/useSlider';
import Button from '@/src/components/common/input/button';
import { CategoryItem } from '@/src/types/category';

export interface InternalCategoryProps {
  value: string;
  category: CategoryItem[];
  onChange: (value: string) => void;
}

export default function InternalCategory({ value, category, onChange }: InternalCategoryProps) {
  const pathname = usePathname();
  const { sliderRef, handleMouseDown, handleMouseLeave, handleMouseUp, handleMouseMove } =
    useSlider();

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <ul
      ref={sliderRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="scrollbar-hide flex snap-x flex-nowrap gap-2 overflow-scroll scroll-smooth md:gap-3.5"
    >
      {category?.map((item: CategoryItem) => (
        <li key={item.label} className="snap-align-start flex">
          <Button
            type="button"
            onClick={() => onChange(item.value)}
            className={`${pathname?.includes(item.value ?? value) && 'bg-gray-900 text-white'} h-10 min-w-28 items-center justify-center text-nowrap rounded-xl bg-gray-100 px-5 py-2 text-center text-sm font-bold text-gray-400 transition-colors hover:bg-gray-900 hover:text-white md:h-11 md:text-lg`}
          >
            {item.label}
          </Button>
        </li>
      ))}
    </ul>
  );
}
