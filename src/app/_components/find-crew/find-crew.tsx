'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Divider, TextInput } from '@mantine/core';
import { InfiniteData } from '@tanstack/react-query';
import { useGetCrewListQuery } from '@/src/_queries/crew-queries';
import regionData from '@/src/data/region.json';
import { useInfiniteScroll } from '@/src/hooks/use-infinite-scroll';
import CategoryContainer from '@/src/app/_components/category/category-container';
import HeroCrew from '@/src/app/_components/hero/hero-crew';
import CrewCardList from '@/src/components/common/crew-list/crew-card-list';
import DropDown from '@/src/components/common/input/drop-down';
import { MainCrewListResponse } from '@/src/types/crew-card';
import IcoSearch from '@/public/assets/icons/ic-search.svg';

interface FindCrewProps {
  initialData: InfiniteData<MainCrewListResponse | undefined>;
}

export default function FindCrew({ initialData }: FindCrewProps) {
  const [data, setData] = useState<InfiniteData<MainCrewListResponse | undefined>>(initialData);
  const [mainCategory, setMainCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [sort, setSort] = useState<string | null>('latest');
  const [region, setRegion] = useState<string>('');
  const [search, setSearch] = useState('');
  const searchRef = useRef<HTMLInputElement>(null);

  const handleRegionChange = (newValue: string) => {
    const selectedRegion = regionData.find((dataItem) => dataItem.main.label === newValue);
    if (selectedRegion?.main.label === '지역 전체') return '';
    return selectedRegion ? selectedRegion.main.label : '';
  };

  const handleSearch = () => {
    if (searchRef.current) {
      setMainCategory('');
      setSubCategory('');
      setSearch(searchRef.current.value);
    }
  };

  const {
    data: CrewCardListData,
    ref,
    isFetchingNextPage,
  } = useInfiniteScroll(
    useGetCrewListQuery({
      keyword: search,
      mainLocation: handleRegionChange(region),
      mainCategory,
      subCategory,
      sortType: sort === 'latest' ? 'LATEST' : 'POPULAR',
    }),
  );

  useEffect(() => {
    if (CrewCardListData) {
      setData(CrewCardListData);
    }
  }, [CrewCardListData]);

  return (
    <div className="py-8 md:py-12.5">
      <div className="flex flex-col px-3 md:px-8 lg:px-11.5">
        <HeroCrew />
        <CategoryContainer
          mainCategory={mainCategory}
          subCategory={subCategory}
          setMainCategory={(newValue) => {
            setMainCategory(newValue);
            if (searchRef.current) searchRef.current.value = '';
            if (search !== '') setSearch('');
          }}
          setSubCategory={(newValue) => {
            setSubCategory(newValue);
            if (searchRef.current) searchRef.current.value = '';
            if (search !== '') setSearch('');
          }}
        />
      </div>
      <Divider mx={{ base: 0, md: 32, lg: 34 }} my={24} size={2} color="#E5E7EB" />
      <div className="px-3 md:px-8 lg:px-11.5">
        <div className="flex flex-col justify-between gap-2 md:flex-row md:gap-4">
          <div className="flex-1">
            <TextInput
              ref={searchRef}
              leftSectionPointerEvents="none"
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSearch();
              }}
              rightSection={
                <button type="button" className="flex h-5 w-5" onClick={handleSearch}>
                  <Image src={IcoSearch} alt="search" width={20} height={20} className="-ml-1" />
                </button>
              }
              placeholder="크루 이름, 위치를 검색하세요."
              classNames={{
                input:
                  'h-11 w-full rounded-xl border-0 pr-10 font-pretendard text-base font-medium text-gray-800 placeholder:text-gray-500',
              }}
            />
          </div>
          <div className="flex-0 flex justify-between gap-2 md:basis-67 md:gap-4">
            <DropDown
              name="region"
              variant="default"
              data={regionData.map((dataItem) => dataItem.main)}
              placeholder="지역 전체"
              value={region}
              className="w-[130px]"
              onChange={(newValue) => {
                setRegion(newValue as string);
              }}
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
              onChange={(newValue) => {
                setSort(newValue as string);
              }}
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
