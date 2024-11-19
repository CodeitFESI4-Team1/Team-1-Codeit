import { useState } from 'react';
import { Button } from '@mantine/core';
import { Calendar, DatesProvider } from '@mantine/dates';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import DropDown from '@/src/components/common/input/drop-down';
import '@/src/styles/calendar-filter.css';
import IconArrow from '@/public/assets/icons/ic-arrow';

export interface DateTimePickerProps {
  fullDate: Date;
  onChange: (date: string) => void;
}

export default function DateTimePicker({ fullDate, onChange }: DateTimePickerProps) {
  const [selected, setSelected] = useState<Date>(fullDate || new Date());
  const [hour, setHour] = useState<string | null>('시');
  const [minute, setMinute] = useState<string | null>('분');

  const handleSelect = (date: Date) => {
    const isSelected = selected;

    if (isSelected) {
      setSelected(date);
    }
  };

  const handleTime = () => {
    const newDate = new Date(selected);

    newDate.setHours(Number(hour));
    newDate.setMinutes(Number(minute));

    const kstDate = new Date(newDate.getTime() - newDate.getTimezoneOffset() * 60000).toISOString();

    setSelected(newDate);

    // KST 기준 ISO 문자열 전달
    onChange(kstDate);
  };

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="rounded-xl border border-gray-200 px-9 pb-4 pt-2.5">
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
              day: 'w-full aspect-square text-gray-800 data-[selected=true]:text-white flex',
              monthCell: 'w-[calc(14.285vw-5.714px)] aspect-square md:w-[85px]',
              monthsListCell:
                'w-[calc(33.333vw-13.333px)] h-[10vw] md:w-[200px] md:h-[80px] text-gray-800',
              monthsListControl: 'w-full h-full',
              yearsListCell:
                'w-[calc(33.333vw-13.333px)] h-[10vw] md:w-[200px] md:h-[80px] text-gray-800',
            }}
            weekendDays={[0]}
            excludeDate={(date) => dayjs(date).isBefore(dayjs().startOf('day'))}
            previousIcon={<IconArrow direction="left" color="#1F2937" />}
            nextIcon={<IconArrow direction="right" color="#1F2937" />}
            styles={{
              weekday: { fontSize: '1rem', fontWeight: '500', color: '#1F2937' },
            }}
            renderDay={(date) => {
              const day = date.getDate();
              return (
                <div data-testid="day" className="text-base font-medium lg:text-lg">
                  {day}
                </div>
              );
            }}
          />
        </DatesProvider>
      </div>
      <div>
        <label htmlFor="time" className="text-base font-semibold text-gray-800">
          시간 선택
        </label>
        <div className="flex items-center justify-between gap-2 py-3">
          <DropDown
            name="hour"
            variant="default"
            inWhere="form"
            // prettier-ignore
            data={['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']
          }
            placeholder="시"
            value={hour}
            data-testid="time"
            className="flex-1"
            onChange={setHour}
          />
          <DropDown
            name="minute"
            variant="default"
            inWhere="form"
            data={['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55']}
            placeholder="분"
            value={minute}
            data-testid="minute"
            className="flex-1"
            onChange={setMinute}
          />
          <Button
            type="button"
            onClick={handleTime}
            disabled={hour === '시' || minute === '분'}
            className="flex-0 flex h-11 min-w-[100px] basis-[110px] justify-center rounded-xl text-base font-semibold disabled:bg-gray-400 disabled:text-gray-50"
          >
            시간 선택
          </Button>
        </div>
      </div>
    </div>
  );
}
