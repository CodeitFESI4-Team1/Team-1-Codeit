'use client';

import { useState } from 'react';
import DateTimePicker from '@/src/components/common/input/date-time-picker';

export default function CrewDetailPage() {
  const [fullDate, setFullDate] = useState(new Date());
  return (
    <div className="container max-w-[1200px] mx-auto my-0 px-5 lg:px-0">
      <DateTimePicker fullDate={fullDate} onChange={setFullDate} />
    </div>
  );
}
