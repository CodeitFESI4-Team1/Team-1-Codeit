import { fetchApi } from '@/src/utils/api';
import { CrewDetail } from '@/src/types/crew-card';

// 크루 디테일 보기
export async function getCrewDetail(id: number): Promise<CrewDetail> {
  const url = `/api/crews/${id}`;

  const response = await fetchApi<{ data: CrewDetail }>(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
}

// 크루 참여
export async function joinCrew(crewId: number): Promise<void> {
  const url = `/api/crews/${crewId}/join`;

  await fetchApi<void>(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

// 사용자 크루 탈퇴
export async function leaveCrew(crewId: number): Promise<void> {
  const url = `/api/crews/${crewId}/leave`;

  await fetchApi<void>(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

// 주최자 크루 취소
export async function cancelCrew(crewId: number): Promise<void> {
  const url = `/api/crews/${crewId}`;

  await fetchApi<void>(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
