export interface CreateCrewRequestTypes {
  title: string;
  mainCategory: string | null;
  subCategory: string | null;
  imageUrl: FileValueType | null;
  mainLocation: string | null;
  subLocation: string | null;
  totalCount: number;
}
