export interface GatheringType {
  id: number;
  title: string;
  dateTime: string;
  location: string;
  currentCount: number;
  totalCount: number;
  imageUrl: string;
  isLiked: boolean;
}
export interface GatheringDetailType extends GatheringType {
  introduce: string;
  isCaptain: boolean;
  isParticipant: boolean;
  participants: ParticipantType[];
}

export interface ParticipantType {
  id: number;
  nickName: string;
  imageUrl: string;
}

export interface GatheringData {
  data: Gathering[];
  pagination: {
    totalCount: number;
    page: number;
    limit: number;
  };
}

export interface CreateGatheringRequestType {
  title: string; // 20자 이내
  introduce: string; // 소개글 100자 이내
  dateTime: string;
  location: string;
  totalCount: number;
  imageUrl: File | null; // NOTE : 임시로 File로 설정
}
