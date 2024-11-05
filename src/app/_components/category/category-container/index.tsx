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
  const [categoryIndex, setCategoryIndex] = useState(0);

  useEffect(() => {
    if (subCategory !== category[categoryIndex].items[0].value) {
      setSubCategory(category[categoryIndex].items[0].value);
    }
  }, [mainCategory, categoryIndex]);

  useEffect(() => {
    if (mainCategory !== category[categoryIndex].title.value) {
      setMainCategory(category[categoryIndex].title.value);
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
        category={category[categoryIndex].items}
        onChange={setSubCategory}
      />
    </div>
  );
}
