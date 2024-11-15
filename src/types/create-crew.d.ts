import { StaticImageData } from 'next/image';
import { interpolate } from 'framer-motion';

// NOTE : imageURL 임시로 File로 지정
export interface CreateCrewFormTypes {
  title: string;
  mainCategory: string;
  subCategory: string | null;
  mainLocation: string;
  subLocation: string | null;
  totalCount: number;
  introduce: string;
  imageUrl: File | string | null;
}

export interface CreateCrewRequestTypes {
  title: string;
  mainCategory: string;
  subCategory: string;
  mainLocation: string;
  subLocation: string;
  totalCount: number;
  introduce: string;
  imageUrl: string;
}

export interface CreateCrewResponseTypes {
  crewId: number;
}

export interface GetImageUrlResponseTypes {
  imageUrl: string;
}
