'use client';

import { useState } from 'react';
import category from '@/src/data/category.json';
import InternalCategory from '@/src/components/common/category/internal-category';
import MainCategory from '@/src/components/common/category/main-category';

export default function CategoryWrap() {
  const [categoryIndex, setCategoryIndex] = useState(0);

  return (
    <div className="md:gap-7.5 flex flex-col gap-2">
      <MainCategory data={category} onHover={setCategoryIndex} />
      <InternalCategory items={category[categoryIndex].items} />
    </div>
  );
}
