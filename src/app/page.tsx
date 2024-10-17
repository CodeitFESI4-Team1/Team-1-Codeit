'use client';

import { useState } from 'react';

import { ComboboxItem } from '@mantine/core';

import CustomButton from '@/src/components/common/input/CustomButton';
import DropDown from '@/src/components/common/input/DropDown';

export default function Home() {
  const [value, setValue] = useState<ComboboxItem | null>(null);

  return (
    <div className="container">
      CREW CREW
      <CustomButton label="CustomButton" />
      <DropDown
        data={['React', 'Angular', 'Svelte', 'Vue']}
        placeholder="지역 전체"
        value={value ? value.value : null}
        onChange={(_value, option) => setValue(option)}
        className="w-[150px]"
      />
    </div>
  );
}
