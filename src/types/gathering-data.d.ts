import { UserType } from './user';

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
  participants: UserType[];
}
export interface GatheringData {
  data: Gathering[];
  pagination: {
    totalCount: number;
    page: number;
    limit: number;
  };
}
