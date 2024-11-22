import { useEffect, useRef, useState } from 'react';
import { Button, Popover } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import CalendarFilter from '@/src/components/common/input/calendar-filter';
import { theme } from '@/src/styles/theme';
import IconArrow from '@/public/assets/icons/ic-arrow';

export interface PopOverProps {
  value: Date;
  onChange: (date: Date) => void;
}

export default function PopOverCalendar({ value, onChange }: PopOverProps) {
  const [opened, { open, close }] = useDisclosure();
  const [date, setDate] = useState<Date>(value);
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);
  const popOver = useRef<HTMLDivElement>(null);
  const inputTheme = opened ? 'dark' : 'light';

  const handleClear = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setDate(new Date());
    onChange(new Date());
    close();
  };
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onChange(date);
    close();
  };
  const handleOutsideClick = (e: MouseEvent) => {
    if (popOver.current && !popOver.current.contains(e.target as Node)) {
      close();
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);
  return (
    <Popover
      withinPortal
      opened={opened}
      onClose={close}
      closeOnClickOutside
      closeOnEscape
      clickOutsideEvents={['click', 'touchstart']}
      width={110}
      position={isMobile ? 'bottom' : 'bottom-start'}
      shadow="md"
    >
      <Popover.Target>
        <Button
          type="button"
          onClick={open}
          className="flex h-11 items-center justify-between rounded-xl border-0 bg-white px-3 py-2.5 text-base font-medium text-gray-800 hover:bg-white hover:text-gray-800 focus:bg-black focus:text-white"
        >
          <span>{date ? `${date.getMonth() + 1}월 ${date.getDate()}일` : '날짜 선택'}</span>
          <IconArrow direction="down" color={`${inputTheme === 'dark' ? '#ffffff' : '#D1D5DB'}`} />
        </Button>
      </Popover.Target>
      <Popover.Dropdown
        w={336}
        h={386}
        px={43}
        py={24}
        ref={popOver}
        className="rounded-xl shadow-xl"
      >
        <div className="flex flex-col gap-4">
          <CalendarFilter value={date} toDoDates={null} onChange={setDate} />
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
