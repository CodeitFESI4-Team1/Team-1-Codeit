import { fetchApi } from '@/src/utils/api';

type CrewMember = {
  id: number;
  nickname: string;
  profileImageUrl?: string;
};

export type CrewDetail = {
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

export async function getCrewDetail(): Promise<{ data: CrewDetail }> {
  const response = await fetchApi<CrewDetail[]>('/crewDetail', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return { data: response[0] };
}
