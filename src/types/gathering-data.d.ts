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
  crewId: number;
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

export interface CreateGatheringFormTypes {
  title: string; // 20자 이내
  introduce: string; // 소개글 100자 이내
  dateTime: string;
  location: string;
  totalCount: number;
  imageUrl: File | string | null;
}

export interface CreateGatheringRequestTypes {
  title: string; // 20자 이내
  introduce: string; // 소개글 100자 이내
  dateTime: string;
  location: string;
  totalCount: number;
  imageUrl: string;
}

export interface GatheringCardProps {
  id: number;
  crewId: number;
  crewTitle: string;
  crewMainLocation: string;
  crewSubLocation: string;
  title: string;
  dateTime: string;
  location: string;
  currentCount: number;
  totalCount: number;
  imageUrl: string;
  liked: boolean;
}

// 찜한 목록 조회
interface LikeGatheringType {
  id: number;
  title: string;
  dateTime: string;
  location: string;
  currentCount: number;
  totalCount: number;
  imageUrl: string;
}

export interface GatheringResponseType {
  content: GatheringContentType[];
  pageNumber: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
}
