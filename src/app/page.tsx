'use client';

import { useState } from 'react';
import DropDown from '@/src/components/common/input/drop-down';
import FileInputWrap from '@/src/components/common/input/file-input-wrap';
      
export default function Home() {
  const [sort, setSort] = useState<string | null>('latest');

  return (
    <div className="container">
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
      <FileInputWrap value={{ image: null }} />
    </div>
  );
}
