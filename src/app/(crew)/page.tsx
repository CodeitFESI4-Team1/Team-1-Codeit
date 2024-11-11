'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Divider } from '@mantine/core';
import { useGetCrewQuery } from '@/src/_queries/crew-queries';
import regionData from '@/src/data/region.json';
import { useInfiniteScroll } from '@/src/hooks/useInfiniteScroll';
import CategoryContainer from '@/src/app/_components/category/category-container';
import HeroCrew from '@/src/app/_components/hero/hero-crew';
import CrewCardList from '@/src/components/common/crew-list/crew-card-list';
import DropDown from '@/src/components/common/input/drop-down';
import TextInput from '@/src/components/common/input/text-input';
import { CrewCardInformResponse } from '@/src/types/crew-card';
import IcoSearch from '@/public/assets/icons/ic-search.svg';

export default function Home() {
  const [mainCategory, setMainCategory] = useState('cardio_strength');
  const [subCategory, setSubCategory] = useState('running');
  const [sort, setSort] = useState<string | null>('latest');
  const [region, setRegion] = useState<string | null>('all');
  const [search, setSearch] = useState('');

  const { data, ref, isFetchingNextPage } =
    useInfiniteScroll<CrewCardInformResponse>(useGetCrewQuery());

  return (
    <div className="py-8 md:py-12.5">
      <div className="flex flex-col px-3 md:px-8 lg:px-11.5">
        <HeroCrew />
        <CategoryContainer
          mainCategory={mainCategory}
          subCategory={subCategory}
          setMainCategory={setMainCategory}
          setSubCategory={setSubCategory}
        />
      </div>
      <Divider mx={{ base: 0, md: 32, lg: 34 }} my={24} size={2} color="#E5E7EB" />
      <div className="px-3 md:px-8 lg:px-11.5">
        <div className="flex flex-col justify-between gap-2 md:flex-row md:gap-4">
          <div className="flex-1">
            <TextInput
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              leftSectionPointerEvents="none"
              leftSection={
                <Image src={IcoSearch} alt="search" width={21} height={21} className="-mr-4" />
              }
              placeholder="크루 이름, 위치를 검색하세요."
              inputClassNames="w-full h-11 pl-12 placeholder:text-gray-500 font-pretendard text-base font-medium text-gray-800 rounded-xl"
            />
          </div>
          <div className="flex-0 flex justify-between gap-2 md:basis-67 md:gap-4">
            <DropDown
              name="region"
              variant="default"
              data={regionData.map((dataItem) => dataItem.main)}
              placeholder="전체"
              value={region}
              className="w-[130px]"
              onChange={setRegion}
            />
            <DropDown
              name="sort"
              variant="sort"
              data={[
                { value: 'latest', label: '최신순' },
                { value: 'best', label: '인기순' },
              ]}
              placeholder="최신순"
              value={sort}
              className="w-[130px]"
              onChange={setSort}
            />
          </div>
        </div>
      </div>
      <div className="mt-8 px-3 md:px-8 lg:px-11.5">
        <CrewCardList data={data} ref={ref} isFetchingNextPage={isFetchingNextPage} />
      </div>
    </div>
  );
}
