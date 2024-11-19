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

export type MainCrewListResponse = {
  content: MainCrewList[];
  hasNext: boolean;
};

export interface MainCrewList {
  id: number;
  mainCategory?: string;
  subCategory?: string;
  title: string;
  mainLocation: string;
  subLocation: string;
  participantCount: number;
  totalCount: number;
  imageUrl: string;
  isConfirmed: boolean;
  totalGatheringCount: number;
  crewMembers?: CrewMember[];
}

export interface CrewMember {
  id: number;
  nickname: string;
  profileImageUrl?: string;
}

export interface CrewDetailMember {
  id: number;
  nickname: string;
  email: string;
  profileImageUrl?: string;
  captain: boolean;
}

export interface CrewDetail {
  id: number;
  title: string;
  introduce: string;
  mainCategory?: string;
  subCategory?: string;
  mainLocation: string;
  subLocation: string;
  participantCount: number;
  totalCount: number;
  imageUrl: string;
  totalGatheringCount: number;
  crewMembers: CrewDetailMember[];
  confirmed: boolean;
  introduce?: string;
}

export interface MyCrewList {
  id: number;
  title: string;
  mainLocation: string;
  subLocation: string;
  currentCount: number;
  totalCount: number;
  imageUrl: string;
  totalGathering: number;
  crewMembers: CrewMember[];
}

export interface MyCrewListResponse {
  content: MyCrewList[];
  hasNext: boolean;
}
