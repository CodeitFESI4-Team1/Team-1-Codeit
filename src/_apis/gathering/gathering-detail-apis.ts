import { fetchApi } from '@/src/utils/api';
import { GatheringDetailType } from '@/src/types/gathering-data';

// NOTE: 약속 디테일 불러오기
export async function GetGatheringDetail(
  crewId: number,
  gatheringId: number,
): Promise<GatheringDetailType> {
  const url = `/api/crews/${crewId}/gatherings/${gatheringId}`;

  const response = await fetchApi<{ data: GatheringDetailType }>(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
}

// NOTE: 약속 참여
export async function JoinGathering(crewId: number, gatheringId: number): Promise<void> {
  const url = `/api/crews/${crewId}/gatherings/${gatheringId}/join`;

  await fetchApi(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

// NOTE: 약속 취소(host)
export async function CancelGathering(crewId: number, gatheringId: number): Promise<void> {
  const url = `/api/crews/${crewId}/gatherings/${gatheringId}`;

  await fetchApi(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

// NOTE: 약속 참여 취소(참여자)
export async function LeaveGathering(crewId: number, gatheringId: number): Promise<void> {
  const url = `/api/crews/${crewId}/gatherings/${gatheringId}/leave`;

  await fetchApi(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
