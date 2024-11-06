'use client';

import { useEffect, useState } from 'react';

/**
 * ProgressBar 컴포넌트
 * @param {number} total - 총 숫자
 * @param {number} current - 현재 진행 중인 숫자
 * @returns {JSX.Element}
 */

export interface ProgressBarProps {
  total: number;
  current: number;
}

export default function ProgressBar({ total, current }: ProgressBarProps) {
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    const percentage = (current / total) * 100;
    setTimeout(() => {
      setProgressValue(percentage);
    }, 100);
  }, [current, total]);

  return (
    <div className="relative h-[6px] w-full rounded-md bg-blue-50">
      <div
        className="absolute left-0 top-0 h-[6px] rounded-md bg-blue-400 transition-all duration-1000"
        style={{ width: `${progressValue}%` }}
      />
    </div>
  );
}
