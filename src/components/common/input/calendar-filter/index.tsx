import { useState } from 'react';
import { Indicator } from '@mantine/core';
import { Calendar, DatesProvider } from '@mantine/dates';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import '@/src/styles/calendar-filter.css';
import IconArrow from '@/public/assets/icons/ic-arrow';

export interface CalendarFilterProps {
  value: Date;
  toDoDates: Date[] | null;
  onChange: (date: Date) => void;
}

/**
 * 달력에서 날짜를 선택하면 값을 변경할 수 있는 컴포넌트
 * @param {Date} value - 선택된 날짜
 * @param {Date[] | null} toDoDates - 일정이 있는 날짜
 * @param {(date: Date) => void} onChange - 값이 변경될 때 실행하는 함수
 */

export default function CalendarFilter({
  value,
  toDoDates,
  onChange,
  ...rest
}: CalendarFilterProps) {
  const [selected, setSelected] = useState<Date>(value);

  const handleSelect = (date: Date) => {
    const isSelected = selected;
    if (isSelected) {
      setSelected(date);
      onChange(date);
    }
  };

  return (
    <DatesProvider
      settings={{ locale: 'ko', firstDayOfWeek: 0, weekendDays: [0], timezone: 'UTC' }}
    >
      <Calendar
        size="xl"
        getDayProps={(date) => ({
          selected: selected && dayjs(date).isSame(selected, 'date'),
          onClick: () => handleSelect(date),
        })}
        firstDayOfWeek={0}
        classNames={{
          day: 'w-full aspect-square text-gray-800 data-[selected=true]:text-white data-[selected=true]:bg-blue-500 flex',
          monthCell:
            'w-[calc(14.285vw-5.714px)] md:w-[calc(7.143vw-5.714px)] lg:w-[82.857px] aspect-square',
          monthsListCell:
            'w-[calc(33.333vw-13.333px)] h-[10vw] md:w-[calc(16.666vw-13.333px)] md:h-[6.428vw] lg:w-[193.333px] lg:h-[77px] text-gray-800',
          monthsListControl: 'w-full h-full',
          yearsListCell:
            'w-[calc(33.333vw-13.333px)] h-[10vw] md:w-[calc(16.666vw-13.333px)] md:h-[6.428vw] lg:w-[193.333px] lg:h-[77px] text-gray-800',
        }}
        weekendDays={[]}
        previousIcon={<IconArrow direction="left" color="#1F2937" />}
        nextIcon={<IconArrow direction="right" color="#1F2937" />}
        styles={{
          weekday: { fontSize: '1rem', fontWeight: '500', color: '#1F2937' },
          calendarHeaderLevel: { fontSize: '1.125rem', fontWeight: '600', color: '#1F2937' },
        }}
        renderDay={(date) => {
          const day = date.getDate();
          return (
            <Indicator
              size={6}
              color="black"
              offset={-2}
              disabled={
                toDoDates?.every((todoDate) => todoDate.toDateString() !== date.toDateString()) ||
                toDoDates === null
              }
            >
              <div data-testid="day" className="text-base font-medium">
                {day}
              </div>
            </Indicator>
          );
        }}
        {...rest}
      />
    </DatesProvider>
  );
}
