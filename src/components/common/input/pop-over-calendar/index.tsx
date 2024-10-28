import { useState } from 'react';
import { Button, Popover } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { theme } from '@/src/app/theme';
import CalendarFilter from '@/src/components/common/input/calendar-filter';
import IconArrow from '@/public/assets/icons/ic-arrow';

export interface PopOverProps {
  value: Date | undefined;
  onChange: (date: Date | undefined) => void;
}

export default function PopOverCalendar({ value, onChange }: PopOverProps) {
  const [opened, { close, open }] = useDisclosure(false);
  const [inputTheme, setInputTheme] = useState('white');
  const [date, setDate] = useState<Date | undefined>(value);
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);

  const handleClear = () => {
    setDate(new Date());
    onChange(new Date());
    close();
  };
  const handleSubmit = () => {
    onChange(date);
    close();
  };

  return (
    <Popover
      width={110}
      position={isMobile ? 'bottom' : 'bottom-start'}
      shadow="md"
      opened={opened}
    >
      <Popover.Target>
        <Button
          type="button"
          onClick={opened ? close : open}
          onFocus={() => setInputTheme('dark')}
          onBlur={() => setInputTheme('white')}
          className="typo-base-medium flex h-11 items-center justify-between rounded-xl border-0 bg-white px-3 py-2.5 text-gray-800 hover:bg-white hover:text-gray-800 focus:bg-black focus:text-white active:transform-none"
        >
          <span>날짜 전체</span>
          <IconArrow direction="down" color={`${inputTheme === 'dark' ? '#ffffff' : '#D1D5DB'}`} />
        </Button>
      </Popover.Target>
      <Popover.Dropdown w={336} h={386} px={43} py={24} className="rounded-xl shadow-xl">
        <div className="flex flex-col gap-4">
          <CalendarFilter value={date} toDoDates={undefined} onChange={setDate} />
          <div className="flex justify-between gap-3">
            <Button
              type="button"
              onClick={handleClear}
              variant="outline"
              className="flex flex-1 justify-center rounded-xl border-blue-500"
            >
              초기화
            </Button>
            <Button
              type="submit"
              onClick={handleSubmit}
              className="flex flex-1 justify-center gap-3 rounded-xl bg-blue-500"
            >
              적용
            </Button>
          </div>
        </div>
      </Popover.Dropdown>
    </Popover>
  );
}
