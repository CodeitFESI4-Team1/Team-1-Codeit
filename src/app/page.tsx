'use client';

import { useState } from 'react';
import { Divider } from '@mantine/core';
import CategoryWrap from '@/src/components/common/category/category-wrap';
import DropDown from '@/src/components/common/input/drop-down';
import HeroCrew from '../components/common/hero/hero-crew';

export default function Home() {
  const [sort, setSort] = useState<string | null>('latest');

  return (
    <div className="lg:px-8.5 shadow-bg container mx-auto my-0 min-h-screen max-w-pc bg-gray-50 px-3 py-11 md:px-8">
      <HeroCrew />
      <CategoryWrap />
      <Divider my={24} size={2} color="#E5E7EB" />
      <div className="flex justify-between">
        <DropDown
          variant="region"
          data={[
            { value: 'latest', label: '최신순' },
            { value: 'best', label: '인기순' },
          ]}
          placeholder="최신순"
          value={sort}
          className="w-[110px]"
          onChange={setSort}
        />
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
    </div>
  );
}
