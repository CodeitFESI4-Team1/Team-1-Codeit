'use client';

import { useState } from 'react';
import CalendarFilter from '@/src/components/common/input/calendar-filter';

const toDoDates = [new Date('2024-10-12'), new Date('2024-10-15')];

export default function MyGatheringPage() {
  const [date, setDate] = useState<Date>(new Date());

  return <CalendarFilter value={date} toDoDates={toDoDates} onChange={setDate} />;
}
