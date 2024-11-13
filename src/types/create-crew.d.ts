import { StaticImageData } from 'next/image';

// NOTE : imageURL 임시로 File로 지정
export interface CreateCrewFormTypes {
  title: string;
  mainCategory: string;
  subCategory: string | null;
  mainLocation: string;
  subLocation: string | null;
  totalCount: number;
  imageUrl: File | string | null;
}

export interface CreateCrewRequestTypes {
  title: string;
  mainCategory: string;
  subCategory: string;
  mainLocation: string;
  subLocation: string;
  totalCount: number;
  imageUrl: string;
}

export interface CreateCrewResponseTypes {
  id: number;
}

export interface GetImageUrlResponseTypes {
  imageUrl: string;
}
