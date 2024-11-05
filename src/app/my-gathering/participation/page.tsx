'use client';

import { useState } from 'react';
import CalendarFilter from '@/src/components/common/input/calendar-filter';

export default function ParticipationPage() {
  const [date, setDate] = useState<Date>(new Date());
  const toDoDates = [new Date('2024-10-12'), new Date('2024-10-15')];

  return (
    <div>
      <CalendarFilter value={date} toDoDates={toDoDates} onChange={setDate} />
      <div>내가 참여한 약속 컴포넌트</div>
    </div>
  );
}
