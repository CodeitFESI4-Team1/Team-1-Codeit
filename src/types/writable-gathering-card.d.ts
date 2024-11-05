export type WritableGatheringCardInformResponse = {
  data: WritableGatheringCardInform[];
  hasNextPage: boolean;
};

export type WritableGatheringCardInform = {
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
  imageUrl: string;
  nickname: string;
};
