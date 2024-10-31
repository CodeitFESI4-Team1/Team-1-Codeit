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
  location: string;
  detailedLocation: string;
  participantCount: number;
  capacity: number;
  images: ImageList;
  createdBy: number;
  createdDate: Date;
  updatedDate: Date;
  canceledAt?: Date;
  isConfirmed: boolean;
};
