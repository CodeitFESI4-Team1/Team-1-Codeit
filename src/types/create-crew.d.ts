// NOTE : imageURL 임시로 File로 지정

// TODO: CreateCrewFormTypes, CreateCrewRequestTypes의 타입에 중복 코드가 많은데 extends를 사용해서 중복을 제거할 수 있을 것 같습니다.
// export interface CreateCrewFormTypes extends Omit<CreateCrewRequestTypes, 'imageUrl' | 'subCategory' | 'subLocation'> {
//   imageUrl: File | string | null;
//   subCategory: string | null;
//   subLocation: string | null;
// }
// TODO: 이 페이지 뿐 아니라 types/*.ts 파일 전반적으로 Omit 유틸리티 타입, extends를 사용하면 중복 코드를 제거할 수 있습니다.

export interface CreateCrewFormTypes {
  title: string;
  mainCategory: string;
  // TODO: subCategory가 `subCategory?: string`(옵셔널)이 아니라 `subCategory: string | null`로 지정된 이유가 있을까요?
  // 다른 개발자가 보면 헷갈릴 수 있을 것 같습니다.
  subCategory: string | null;
  mainLocation: string;
  subLocation: string | null;
  totalCount: number;
  introduce: string;
  // NOTE: imageUrl의 타입이 CreateCrewRequestTypes와 다른데 이유가 있을까요?
  // 이 부분도 처음 보는 사람은 헷갈릴 것 같아서 주석 등으로 설명을 추가하면 좋을 것 같습니다.
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

export interface EditCrewRequestTypes extends CreateCrewRequestTypes {}

export interface CreateCrewResponseTypes {
  crewId: number;
}

export interface GetImageUrlResponseTypes {
  imageUrl: string;
}
