'use client';

import { useEffect, useState } from 'react';

/**
 * ProgressBar 컴포넌트
 * @param {number} total
 * @param {number} current
 * @param {string} [height='h-2'] - 프로그레스 바의 높이 (Tailwind CSS 클래스)
 * @param {string} [progressBarColor='bg-orange-500'] - 진행 중인 바의 색상 (Tailwind CSS 클래스)
 * @param {string} [mainBarColor='bg-orange-100'] - 전체 바의 색상 (Tailwind CSS 클래스)
 * @returns {JSX.Element}
 */

export interface ProgressBarProps {
  total: number;
  current: number;
  height?: string;
  progressBarColor?: string;
  mainBarColor?: string;
}

export default function ProgressBar({
  total,
  current,
  height = 'h-2',
  progressBarColor = 'bg-orange-500',
  mainBarColor = 'bg-orange-100',
}: ProgressBarProps) {
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    const percentage = (current / total) * 100;
    setTimeout(() => {
      setProgressValue(percentage);
    }, 100);
  }, [current, total]);

  return (
    <div className={`w-full ${mainBarColor} relative ${height} rounded-md`}>
      <div
        className={`${progressBarColor} absolute left-0 top-0 ${height} rounded-md transition-all duration-1000`}
        style={{ width: `${progressValue}%` }}
      />
    </div>
  );
}
