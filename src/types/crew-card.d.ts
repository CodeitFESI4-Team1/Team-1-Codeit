export interface MainCrewListResponse {
  data: MainCrewList[];
  hasNext: boolean;
}

export interface MainCrewList {
  id: number;
  mainCategory: string;
  subCategory: string;
  title: string;
  mainLocation: string;
  subLocation: string;
  participantCount: number;
  totalCount: number;
  imageUrl: string;
  isConfirmed: boolean;
  totalGatheringCount: number;
}

export interface CrewMember {
  id: number;
  nickname: string;
  profileImageUrl?: string;
  captain?: boolean;
}

export interface CrewDetail {
  id: number;
  title: string;
  mainLocation: string;
  subLocation: string;
  participantCount: number;
  totalCount: number;
  imageUrl: string;
  totalGatheringCount: number;
  crewMembers: CrewMember[];
  confirmed: boolean;
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
  data: MyCrewList[];
  hasNext: boolean;
}
