'use client';

import ProgressBar from '@/src/components/common/progress-bar';

interface HeartProps {
  fillPercentage: number;
}

export interface ReviewRateInfo {
  totalReviewCount: number;
  averageRate: number;
  ratingsData: { score: number; count: number }[];
}

interface RatingDisplayProps {
  reviewRateInfo: ReviewRateInfo;
}

function Heart({ fillPercentage }: HeartProps) {
  const clipPathId = `heartClip-${Math.random()}`;

  return (
    <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id={clipPathId}>
          <rect x="0" y="0" width={`${fillPercentage * 100}%`} height="100%" />
        </clipPath>
      </defs>
      <path
        d="M20.1 6.1C20 2.7 17.3 0 13.9 0C12.8 0 11.1 0.8 10.4 2.1C10.3 2.4 9.9 2.4 9.8 2.1C9 0.9 7.4 0.1 6.2 0.1C2.9 0.1 0.1 2.8 0 6.1V6.3C0 8 0.7 9.6 1.9 10.8C1.9 10.8 1.9 10.8 1.9 10.9C2 11 6.8 15.2 9 17.1C9.6 17.6 10.5 17.6 11.1 17.1C13.3 15.2 18 11 18.2 10.9C18.2 10.9 18.2 10.9 18.2 10.8C19.4 9.7 20.1 8.1 20.1 6.3V6.1Z"
        fill="#E5E7EB"
      />
      <path
        d="M20.1 6.1C20 2.7 17.3 0 13.9 0C12.8 0 11.1 0.8 10.4 2.1C10.3 2.4 9.9 2.4 9.8 2.1C9 0.9 7.4 0.1 6.2 0.1C2.9 0.1 0.1 2.8 0 6.1V6.3C0 8 0.7 9.6 1.9 10.8C1.9 10.8 1.9 10.8 1.9 10.9C2 11 6.8 15.2 9 17.1C9.6 17.6 10.5 17.6 11.1 17.1C13.3 15.2 18 11 18.2 10.9C18.2 10.9 18.2 10.9 18.2 10.8C19.4 9.7 20.1 8.1 20.1 6.3V6.1Z"
        fill="#3388FF"
        clipPath={`url(#${clipPathId})`}
      />
    </svg>
  );
}

export default function RatingDisplay({ reviewRateInfo }: RatingDisplayProps) {
  const { totalReviewCount, averageRate, ratingsData } = reviewRateInfo;

  const renderHearts = () => {
    const hearts = [];
    for (let i = 0; i < 5; i += 1) {
      const fillPercentage = Math.min(1, Math.max(0, averageRate - i));
      hearts.push(<Heart key={i} fillPercentage={fillPercentage} />);
    }
    return hearts;
  };

  return (
    <div className="flex w-full min-w-[320px] max-w-[700px] gap-16">
      {/* 왼쪽: 평균 평점 및 하트 표시 */}
      <div className="flex flex-col items-center justify-center space-y-2">
        <div className="text-sm font-semibold text-gray-700">(총 {totalReviewCount}개의 평가)</div>
        <div className="text-2xl font-semibold">
          <span>평점 {averageRate.toFixed(1)}</span>
          <span className="text-gray-500">/5</span>
        </div>
        <div className="mt-1 flex space-x-[6px]">{renderHearts()}</div>
      </div>

      {/* 오른쪽: 각 점수별 프로그레스 바 */}
      <div className="flex flex-1 flex-col gap-2">
        {ratingsData.map(({ score, count }) => (
          <div key={score} className="flex items-center gap-2">
            <div className="w-6 text-xs font-medium text-gray-500">{score}점</div>
            <div className="flex-1">
              <ProgressBar total={totalReviewCount} current={count} />
            </div>
            <div className="text-xs font-medium text-gray-500">
              <span className="text-blue-500">{count}/</span>
              {totalReviewCount}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
