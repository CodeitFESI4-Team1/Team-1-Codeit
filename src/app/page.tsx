'use client';

import { useState } from 'react';
import CategoryWrap from '@/src/components/common/category/category-wrap';
import DropDown from '@/src/components/common/input/drop-down';
import CrewCardList from '../components/common/crew-list/crew-card-list';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
import { CrewCardInformResponse } from '../types/crew-card';
import { fetchCrewData } from './api/mock-api/crew';

export default function Home() {
  const [sort, setSort] = useState<string | null>('latest');

  const { data, ref, isFetchingNextPage } = useInfiniteScroll<CrewCardInformResponse>({
    queryKey: ['crew'],
    queryFn: ({ pageParam = 0 }) => {
      return fetchCrewData(pageParam, 3);
    },
    getNextPageParam: (lastPage, allPages) =>
      lastPage.hasNextPage ? allPages.length + 1 : undefined,
  });

  return (
    <div className="container mx-auto my-0 max-w-pc">
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
      <span>test</span>
      <CrewCardList data={data} ref={ref} isFetchingNextPage={isFetchingNextPage} />
    </div>
  );
}
