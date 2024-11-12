import { StaticImageData } from 'next/image';
import { UserType } from './user';

export interface GatheringType {
  id: number;
  title: string;
  dateTime: string;
  location: string;
  currentCount: number;
  totalCount: number;
  imageUrl: string;
  liked: boolean;
}
export interface GatheringDetailType extends GatheringType {
  introduce: string;
  gatheringCaptain: boolean;
  participant: boolean;
  participants: UserType[];
}
export interface GatheringData {
  data: GatheringDetailType[];
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
  imageUrl: File | StaticImageData | null; // NOTE : 임시로 File로 설정
}

export interface GatheringCardProps {
  id: number;
  crewTitle: string;
  crewMainLocation: string;
  crewSubLocation: string;
  title: string;
  dateTime: string;
  currentCount: number;
  totalCount: number;
  imageUrl: string;
  liked: boolean;
}
