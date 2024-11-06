import { fetchApi } from '@/src/utils/api';

type CrewMember = {
  id: number;
  nickname: string;
  profileImageUrl?: string;
};

type CrewDetail = {
  id: number;
  title: string;
  mainLocation: string;
  subLocation: string;
  participantCount: number;
  totalCount: number;
  isConfirmed: boolean;
  imageUrl: string;
  totalGatheringCount: number;
  CrewMembers: CrewMember[];
  isCaptain: boolean;
  isCrew: boolean;
};

export async function getCrewDetail(): Promise<CrewDetail> {
  const response = await fetchApi<CrewDetail>('/api/mock-api/detail?type=crewDetail', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response;
}
