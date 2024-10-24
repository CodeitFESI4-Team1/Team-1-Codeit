import { useRef, useState } from 'react';
import { Button, Popover } from '@mantine/core';
import { Calendar, TimeInput } from '@mantine/dates';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import DropDown from '@/src/components/common/input/drop-down';
import '@/src/styles/calendar-filter.css';
import IconArrow from '@/public/assets/icons/ic-arrow';

export interface CalendarFilterProps {
  fullDate: Date;
  onChange: (date: Date) => void;
}

export default function DateTimePicker({ fullDate, onChange }: CalendarFilterProps) {
  const [selected, setSelected] = useState<Date>(fullDate);
  const [hour, setHour] = useState<string | null>('시');
  const [minute, setMinute] = useState<string | null>('분');
  const [theme, setTheme] = useState('white');
  const ref = useRef<HTMLInputElement>(null);

  const handleSelect = (date: Date) => {
    const isSelected = selected;
    if (isSelected) {
      setSelected(date);
      onChange(date);
    }
  };

  const handleTime = () => {
    const newDate = dayjs(selected).hour(Number(hour)).minute(Number(minute)).toDate();
    setSelected(newDate);
    onChange(newDate);
  };

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="border border-gray-200 rounded-xl">
        <Calendar
          size="xl"
          getDayProps={(date) => ({
            selected: selected && dayjs(date).isSame(selected, 'date'),
            onClick: () => handleSelect(date),
          })}
          firstDayOfWeek={0}
          classNames={{
            day: 'w-full h-full text-gray-800 data-[selected=true]:text-white flex',
            monthCell:
              'w-[calc(14.285vw-5.714px)] h-[calc(14.285vw-5.714px)] md:w-[85px] md:h-[85px]',
            monthsListCell:
              'w-[calc(33.333vw-13.333px)] h-[10vw] md:w-[200px] md:h-[80px] text-gray-800',
            monthsListControl: 'w-full h-full',
            yearsListCell:
              'w-[calc(33.333vw-13.333px)] h-[10vw] md:w-[200px] md:h-[80px] text-gray-800',
          }}
          weekendDays={[]}
          previousIcon={<IconArrow direction="left" color="#1F2937" />}
          nextIcon={<IconArrow direction="right" color="#1F2937" />}
          styles={{
            weekday: { fontSize: '1rem', fontWeight: '500', color: '#1F2937' },
          }}
          renderDay={(date) => {
            const day = date.getDate();
            return <div className="typo-base-medium lg:typo-xl-medium">{day}</div>;
          }}
        />
      </div>
      <div className="flex w-[595px] border border-gray-200 rounded-xl items-center p-5 gap-2">
        <DropDown
          variant="default"
          // prettier-ignore
          data={['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']
          }
          placeholder="시"
          value={hour}
          className="flex-1"
          onChange={setHour}
        />
        <DropDown
          variant="default"
          data={['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55']}
          placeholder="분"
          value={minute}
          className="flex-1"
          onChange={setMinute}
        />
        <Button
          type="button"
          onClick={handleTime}
          disabled={hour === '시' || minute === '분'}
          className="h-11 w-[110px] disabled:bg-gray-400 rounded-xl disabled:text-gray-50 typo-base-semibold"
        >
          시간 선택
        </Button>
      </div>
    </div>
  );
}
