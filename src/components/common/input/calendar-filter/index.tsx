import { useState } from 'react';
import { Indicator } from '@mantine/core';
import { Calendar, DatesProvider } from '@mantine/dates';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import IconArrow from '@/public/assets/icons/ic-arrow';

interface CalendarFilterProps {
  value: Date;
  toDoDates: Date[];
  onChange: (date: Date) => void;
}

export default function CalendarFilter({ value, toDoDates, onChange }: CalendarFilterProps) {
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
        getDayProps={(date) => ({
          selected: selected && dayjs(date).isSame(selected, 'date'),
          onClick: () => handleSelect(date),
        })}
        firstDayOfWeek={0}
        classNames={{
          day: 'text-gray-800 data-[selected=true]:text-white',
        }}
        weekendDays={[]}
        previousIcon={<IconArrow direction="left" color="#1F2937" />}
        nextIcon={<IconArrow direction="right" color="#1F2937" />}
        styles={{
          weekday: { fontSize: '1rem', fontWeight: '500', color: '#1F2937' },
        }}
        renderDay={(date) => {
          const day = date.getDate();
          return (
            <Indicator
              size={6}
              color="black"
              offset={-2}
              disabled={toDoDates?.every(
                (todoDate) => todoDate.toDateString() !== date.toDateString(),
              )}
            >
              <div className="typo-base-medium">{day}</div>
            </Indicator>
          );
        }}
      />
    </DatesProvider>
  );
}
