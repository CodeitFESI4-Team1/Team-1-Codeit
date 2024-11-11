'use client';

import { useEffect, useState } from 'react';
import category from '@/src/data/category.json';
import InternalCategory from '@/src/app/_components/category/internal-category';
import MainCategory from '@/src/app/_components/category/main-category';

export interface CategoryContainerProps {
  mainCategory: string;
  subCategory: string;
  setMainCategory: (value: string) => void;
  setSubCategory: (value: string) => void;
}

export default function CategoryContainer({
  mainCategory,
  subCategory,
  setMainCategory,
  setSubCategory,
}: CategoryContainerProps) {
  const [categoryIndex, setCategoryIndex] = useState<number | null>(null);

  useEffect(() => {
    if (categoryIndex !== null && subCategory !== category[categoryIndex].items[0].label) {
      setSubCategory(category[categoryIndex].items[0].label);
    }
  }, [mainCategory, categoryIndex]);

  useEffect(() => {
    if (categoryIndex !== null && mainCategory !== category[categoryIndex].title.label) {
      setMainCategory(category[categoryIndex].title.label);
    }
  }, [subCategory]);

  return (
    <div className="flex flex-col gap-2 md:gap-4">
      <MainCategory
        value={mainCategory}
        category={category}
        onChange={setMainCategory}
        onHover={setCategoryIndex}
      />
      <InternalCategory
        value={subCategory}
        category={category[categoryIndex ?? 0].items}
        onChange={setSubCategory}
      />
    </div>
  );
}
