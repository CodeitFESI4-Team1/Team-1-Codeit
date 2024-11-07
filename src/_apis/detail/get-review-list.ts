import { fetchApi } from '@/src/utils/api';
import { CrewReview } from '@/src/types/review';

export interface ReviewRateInfo {
  totalReviewCount: number;
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
  const response = await fetchApi<CrewReview[]>('/crewReviews', {
    method: 'GET',
  });

  // 데이터가 비어 있는 경우 기본값 반환
  if (!response || response.length === 0) {
    return {
      info: {
        totalReviewCount: 0,
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
  const paginatedData = response.slice(startIndex, startIndex + limit);

  // 통계 정보 생성
  const totalReviewCount = response.length; // 리뷰 개수
  const averageRate =
    totalReviewCount > 0
      ? response.reduce((sum, review) => sum + review.rate, 0) / totalReviewCount
      : 0;

  const ratingsData = [5, 4, 3, 2, 1].map((score) => ({
    score,
    count: response.filter((review) => review.rate === score).length,
  }));

  const info: ReviewRateInfo = {
    totalReviewCount,
    averageRate,
    ratingsData,
  };

  return {
    info,
    data: paginatedData,
    totalItems: response.length,
    totalPages: Math.ceil(response.length / limit),
    currentPage: page,
  };
}
