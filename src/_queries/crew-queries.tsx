import { ConditionTypes, CrewCardInform, PageableTypes } from '@/src/types/crew-card';
import { getCrewList } from '../_apis/crew/get-crew-list';

// Crew data 변환 로직을 간소화한 helper 함수
const mapCrewData = (crew: CrewCardInform) => ({
  crewId: crew.crewId,
  type: crew.type,
  subType: crew.subType,
  name: crew.name,
  location: crew.location,
  detailedLocation: crew.detailedLocation,
  participantCount: crew.participantCount,
  capacity: crew.capacity,
  images: crew.images,
  createdBy: crew.createdBy,
  createdDate: crew.createdDate,
  updatedDate: crew.updatedDate,
  isConfirmed: crew.isConfirmed,
  gatheringCount: crew.gatheringCount,
  crewMember: crew.crewMember,
});

export function useGetCrewQuery(condition: ConditionTypes) {
  interface QueryParams {
    pageParam?: number;
  }

  interface Page {
    hasNext: boolean;
  }

  return {
    queryKey: ['crew'],
    queryFn: ({ pageParam = 0 }: QueryParams) =>
      getCrewList(condition, { page: pageParam, size: 6, sort: ['string'] }),
    getNextPageParam: (lastPage: Page, allPages: Page[]) =>
      lastPage.hasNext ? allPages.length : undefined,
    select: (data: CrewCardInform[]) => data.map(mapCrewData),
  };
}
