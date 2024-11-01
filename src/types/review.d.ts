export interface ReviewInformResponse {
  data: CrewReview[] | MyReview[];
  hasNextPage: boolean;
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
  crewName: string;
  gatheringName: string;
  id: number; // 리뷰 id
  rate: number;
  comment: string;
}
