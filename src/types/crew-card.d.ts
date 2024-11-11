export type ImageList = {
  imagePath: string;
}[];

export interface ConditionTypes {
  keyword: string;
  mainLocation: string;
  mainCategory: string;
  subCategory: string;
  sortType: 'LATEST' | 'POPULAR';
}

export interface PageableTypes {
  page: number;
  size: number;
  sort: string[];
}

export type CrewCardInformResponse = {
  data: CrewCardInform[];
  hasNext: boolean;
};

export type CrewCardInform = {
  crewId: number;
  type: string;
  subType: string;
  name: string;
  location: string;
  detailedLocation: string;
  participantCount: number;
  capacity: number;
  images: ImageList;
  createdBy: number;
  createdDate: Date;
  updatedDate: Date;
  isConfirmed: boolean;
  gatheringCount: number;
  crewMember: CrewMemberList[];
};

export interface CrewMemberList {
  id: number;
  nickname: string;
  profileImageUrl?: string | null;
}
