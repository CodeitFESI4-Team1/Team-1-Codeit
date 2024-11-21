export interface MyReviewResponse {
  content: MyReview[];
  hasNext: boolean;
}

// API 응답 타입 정의 (data 감싸는 구조)
export interface ApiResponse<T> {
  data: T;
}

export interface CrewReviewInformResponse {
  data: CrewReview[] | MyReview[];
  totalItems: number;
}

// NOTE: 크루 전체 리뷰
export interface CrewReview {
  crewId: number;
  id: number;
  rate: number;
  comment: string;
  createdAt: string;
  reviewer: ReviewerType;
}

export interface ReviewerType {
  id: number;
  nickname: string;
  imageUrl: string;
}

// NOTE: 나의 리뷰
export interface MyReview {
  crewId: number;
  crewName: string;
  gatheringName: string;
  id: number; // 리뷰 id
  rate: number;
  comment: string;
  createdAt: string;
  gatheringLocation: string; // 약속 위치
}
