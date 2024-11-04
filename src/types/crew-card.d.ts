export type ImageList = {
  imagePath: string;
}[];

export type CrewCardInformResponse = {
  data: CrewCardInform[];
  hasNextPage: boolean;
};

export type CrewCardInform = {
  crewId: number;
  type: string;
  subType: string;
  name: string;
  mainLocation: string;
  subLocation: string;
  participantCount: number;
  totalCount: number;
  images: ImageList;
  isConfirmed: boolean;
  totalGatheringCount: number;
};
