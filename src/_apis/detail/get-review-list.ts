import { CrewReview } from '@/src/types/review';

export interface ReviewRateInfo {
  totalRate: number;
  averageRate: number;
  ratingsData: Array<{ score: number; count: number }>;
}

export interface ReviewListData {
  info: ReviewRateInfo;
  data: CrewReview[];
  totalItems: number;
  totalPages: number;
  currentPage: number;
}

export async function getReviewList(page: number, limit: number): Promise<ReviewListData> {
  const response = await fetch(`/api/mock-api/detail?type=reviews`);
  const reviewData: CrewReview[] = await response.json(); // 리뷰 데이터를 배열로 바로 받음

  // 데이터가 비어 있는 경우 기본값 반환
  if (!reviewData || reviewData.length === 0) {
    return {
      info: {
        totalRate: 0,
        averageRate: 0,
        ratingsData: [5, 4, 3, 2, 1].map((score) => ({ score, count: 0 })),
      },
      data: [],
      totalItems: 0,
      totalPages: 0,
      currentPage: page,
    };
  }

  // 페이지네이션 적용
  const startIndex = (page - 1) * limit;
  const paginatedData = reviewData.slice(startIndex, startIndex + limit);

  // 통계 정보 생성
  const totalRate = reviewData.reduce((sum, review) => sum + review.rate, 0);
  const averageRate = reviewData.length ? totalRate / reviewData.length : 0;

  const ratingsData = [5, 4, 3, 2, 1].map((score) => ({
    score,
    count: reviewData.filter((review) => review.rate === score).length,
  }));

  const info: ReviewRateInfo = {
    totalRate,
    averageRate,
    ratingsData,
  };

  return {
    info,
    data: paginatedData,
    totalItems: reviewData.length,
    totalPages: Math.ceil(reviewData.length / limit),
    currentPage: page,
  };
}
