'use client';

import { useState } from 'react';
import CalendarFilter from '@/src/components/common/input/calendar-filter';

const toDoDates = [new Date('2024-10-12'), new Date('2024-10-15')];

export default function MyGatheringPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="container mx-auto my-0 max-w-pc px-5 lg:px-0">
      <CalendarFilter value={date} toDoDates={toDoDates} onChange={setDate} />
    </div>
  );
}
