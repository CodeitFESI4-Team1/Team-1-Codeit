export type ReviewableGatheringCardInformResponse = {
  content: ReviewableGatheringCardInform[];
  hasNext: boolean;
};

export type ReviewableGatheringCardInform = {
  id: number; // 약속 ID
  title: string; // 약속 이름
  dateTime: string;
  location: string;
  currentCount: number;
  totalCount: number;
  imageUrl: string;
  participants: ParticipantType[];
};

export type ParticipantType = {
  id: number;
  profileImageUrl?: string;
  nickname: string;
};
