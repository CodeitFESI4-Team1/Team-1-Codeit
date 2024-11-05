'use client';

import { useState } from 'react';
import { Divider } from '@mantine/core';
import regionData from '@/src/data/region.json';
import CategoryWrap from '@/src/components/common/category/category-wrap';
import HeroCrew from '@/src/components/common/hero/hero-crew';
import DropDown from '@/src/components/common/input/drop-down';
import PopOverCalendar from '@/src/components/common/input/pop-over-calendar';

export interface ValuesType {
  region: string;
  date: Date;
  sort: string;
}

export default function Home() {
  const [options, setOptions] = useState<ValuesType>({
    region: 'all',
    date: new Date(),
    sort: 'latest',
  });

  return (
    <div className="container mx-auto my-0 min-h-screen max-w-pc bg-gray-50 py-11 shadow-bg">
      <div className="lg:px-8.5 lg:gap-4.5 flex flex-col gap-3 px-3 md:gap-4 md:px-8">
        <HeroCrew />
        <CategoryWrap />
      </div>
      <Divider mx={{ base: 0, md: 32, lg: 34 }} my={24} size={2} color="#E5E7EB" />
      <div className="lg:px-8.5 px-3 md:px-8">
        <div className="flex justify-between">
          <div className="flex items-center justify-between gap-2">
            <DropDown
              variant="default"
              data={regionData.map((item) => item.main)}
              placeholder="전체"
              name="region"
              value={options.region}
              className="w-[110px]"
              onChange={(newOption) =>
                setOptions((prev) => ({ ...prev, region: newOption ?? 'all' }))
              }
            />
            <PopOverCalendar
              value={options.date}
              onChange={(newOption) => setOptions((prev) => ({ ...prev, date: newOption }))}
            />
          </div>
          <DropDown
            variant="sort"
            name="sort"
            data={[
              { value: 'latest', label: '최신순' },
              { value: 'best', label: '인기순' },
            ]}
            placeholder="최신순"
            value={options.sort}
            className="w-[110px]"
            onChange={(newOption) =>
              setOptions((prev) => ({ ...prev, sort: newOption ?? 'latest' }))
            }
          />
        </div>
      </div>
    </div>
  );
}
