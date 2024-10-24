'use client';

import { useState } from 'react';
import CategoryWrap from '@/src/components/common/category/category-wrap';
import DropDown from '../components/common/input/drop-down';

export default function Home() {
  const [sort, setSort] = useState<string | null>('latest');

  return (
    <div className="container">
      <CategoryWrap />
      <DropDown
        variant="sort"
        data={[
          { value: 'latest', label: '최신순' },
          { value: 'best', label: '인기순' },
        ]}
        placeholder="최신순"
        value={sort}
        className="w-[110px]"
        onChange={setSort}
      />
    </div>
  );
}
