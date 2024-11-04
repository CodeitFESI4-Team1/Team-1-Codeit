'use client';

import { useEffect, useState } from 'react';
import category from '@/src/data/category.json';
import InternalCategory from '@/src/components/common/category/internal-category';
import MainCategory from '@/src/components/common/category/main-category';

export default function CategoryContainer() {
  const [mainCategory, setMainCategory] = useState('cardio_strength');
  const [subCategory, setSubCategory] = useState('running');
  const [categoryIndex, setCategoryIndex] = useState(0);

  useEffect(() => {
    setSubCategory(category[categoryIndex].items[0].value);
  }, [mainCategory]);

  useEffect(() => {
    // TODO : 메인 카테고리 필터링
  }, [mainCategory]);

  useEffect(() => {
    // TODO : 서브 카테고리 필터링
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
