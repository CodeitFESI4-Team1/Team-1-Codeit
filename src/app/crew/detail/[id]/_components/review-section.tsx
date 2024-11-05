import RatingDisplay, { ReviewRateInfo } from './rating-display';

export default function CrewReviewSection() {
  const exampleReviewRateInfo: ReviewRateInfo = {
    totalRate: 15,
    averageRate: 4.5,
    ratingsData: [
      { score: 5, count: 9 },
      { score: 4, count: 4 },
      { score: 3, count: 1 },
      { score: 2, count: 1 },
      { score: 1, count: 0 },
    ],
  };

  return (
    <div className="space-y-6 rounded-lg bg-white">
      <div className="flex justify-center py-11">
        <RatingDisplay reviewRateInfo={exampleReviewRateInfo} />
      </div>
      {/* 리뷰 리스트 페이지네이션 */}
      <div> 리뷰 리스트 페이지네이션 </div>
    </div>
  );
}
