import { useState } from 'react';
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

  return (
    <div className="flex flex-col gap-2 md:gap-4">
      <MainCategory
        value={mainCategory}
        category={category}
        onChange={(newValue) => {
          setMainCategory(newValue);
          setSubCategory('');
        }}
        onHover={setCategoryIndex}
      />
      <InternalCategory
        value={subCategory}
        category={category[categoryIndex ?? 0].items}
        onChange={(newValue) => {
          setSubCategory(newValue);
          setMainCategory(category[categoryIndex ?? 0].title.label);
        }}
      />
    </div>
  );
}
