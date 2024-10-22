export type Gathering = {
  teamId: number;
  id: number;
  type: string;
  name: string;
  dateTime: Date;
  location: string;
  image: string;
};

export type User = {
  teamId: number;
  id: number;
  name: string;
  image: string;
};

export type Review = {
  teamId: number;
  id: number;
  score: number;
  comment: string;
  createdAt: Date;
  gathering: Gathering;
  user: User;
};

export type ReviewList = Review[];
