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
  isMine: boolean;
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
