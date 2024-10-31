'use client';

import { useState } from 'react';
import category from '@/src/data/category.json';
import InternalCategory from '@/src/components/common/category/internal-category';
import MainCategory from '@/src/components/common/category/main-category';

export default function CategoryWrap() {
  const [categoryIndex, setCategoryIndex] = useState(0);

  return (
    <div className="flex flex-col gap-2 md:gap-4">
      <MainCategory category={category} onHover={setCategoryIndex} />
      <InternalCategory category={category[categoryIndex].items} />
    </div>
  );
}
