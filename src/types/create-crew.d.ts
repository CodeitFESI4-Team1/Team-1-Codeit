import { StaticImageData } from 'next/image';

// NOTE : imageURL 임시로 File로 지정
export interface CreateCrewRequestTypes {
  title: string;
  mainCategory: string;
  subCategory: string | null;
  imageUrl: File | StaticImageData | null;
  mainLocation: string;
  subLocation: string | null;
  totalCount: number;
}
