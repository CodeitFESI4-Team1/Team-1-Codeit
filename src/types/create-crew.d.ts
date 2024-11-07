// NOTE : imageURL 임시로 File로 지정
export interface CreateCrewRequestTypes {
  title: string;
  mainCategory: string | null;
  subCategory: string | null;
  imageUrl: File | StaticImageData | null;
  mainLocation: string | null;
  subLocation: string | null;
  totalCount: number;
}
