'use client';

import { useState } from 'react';
import CalendarFilter from '@/src/components/common/input/calendar-filter';
import DropDown from '@/src/components/common/input/drop-down';

const toDoDates = [new Date('2024-10-12'), new Date('2024-10-15')];

export default function Home() {
  const [sort, setSort] = useState<string | null>('latest');
  const [date, setDate] = useState<Date>(new Date());

  return (
    <div className="container max-w-[1200px] mx-auto my-0">
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
      <CalendarFilter value={date} toDoDates={toDoDates} onChange={setDate} />
    </div>
  );
}
