'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { Divider, Loader, TextInput } from '@mantine/core';
import { useGetCrewListQuery } from '@/src/_queries/crew/crew-list-queries';
import regionData from '@/src/data/region.json';
import { useInfiniteScroll } from '@/src/hooks/use-infinite-scroll';
import CategoryContainer from '@/src/app/_components/category/category-container';
import HeroCrew from '@/src/app/_components/hero/hero-crew';
import CrewCardList from '@/src/components/common/crew-list/crew-card-list';
import Button from '@/src/components/common/input/button';
import DropDown from '@/src/components/common/input/drop-down';
import IcoSearch from '@/public/assets/icons/ic-search.svg';

export default function HomePage() {
  const [mainCategory, setMainCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [sort, setSort] = useState<string | null>('인기순');
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

  const { data, status, isFetchingNextPage, ref } = useInfiniteScroll(
    useGetCrewListQuery({
      condition: {
        keyword: search,
        mainLocation: handleRegionChange(region),
        mainCategory,
        subCategory,
        sortType: sort === '최신순' ? 'LATEST' : 'POPULAR',
      },
      pageable: { page: 0, size: 6, sort: ['createdAt,desc'] },
    }),
  );

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
        <div className="flex flex-col justify-between gap-2 lg:flex-row lg:gap-[185px]">
          <div className="flex w-full justify-between gap-2">
            <TextInput
              ref={searchRef}
              leftSectionPointerEvents="none"
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSearch();
              }}
              leftSection={
                <Image
                  src={IcoSearch}
                  alt="search"
                  width={20}
                  height={20}
                  className="-mr-1"
                  aria-label="검색하기"
                />
              }
              placeholder="크루 이름, 위치를 검색하세요."
              classNames={{
                root: 'w-full',
                input:
                  'h-11 w-full rounded-xl border-0 pl-10 font-pretendard text-base font-medium text-gray-800 placeholder:text-gray-500',
              }}
            />
            <Button
              type="button"
              onClick={handleSearch}
              className="btn-filled flex h-11 min-w-21.5 px-7 text-base font-semibold"
            >
              검색
            </Button>
          </div>
          <div className="flex-0 flex justify-between gap-2 md:gap-4">
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
              placeholder="인기순"
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
        {data && <CrewCardList data={data} />}
        {status === 'pending' || isFetchingNextPage ? (
          <div className="flex justify-center py-10">
            <Loader size="sm" />
          </div>
        ) : (
          <div ref={ref} className="h-[1px]" />
        )}
        {status === 'error' && <p className="py-10 text-center">에러가 발생했습니다.</p>}
      </div>
    </div>
  );
}
