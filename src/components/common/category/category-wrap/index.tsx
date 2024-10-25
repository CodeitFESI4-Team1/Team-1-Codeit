'use client';

import { useState } from 'react';
import category from '@/src/data/category.json';
import InternalCategory from '@/src/components/common/category/internal-category';
import MainCategory from '@/src/components/common/category/main-category';

export default function CategoryWrap() {
  const [categoryIndex, setCategoryIndex] = useState(0);

  return (
    <div className="flex flex-col gap-6 px-[10px] md:gap-11 lg:px-[30px]">
      <MainCategory data={category} onHover={setCategoryIndex} />
      <InternalCategory items={category[categoryIndex].items} />
    </div>
  );
}
