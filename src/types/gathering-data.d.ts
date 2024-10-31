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

export interface GatheringData {
  data: Gathering[];
  pagination: {
    totalCount: number;
    page: number;
    limit: number;
  };
}
