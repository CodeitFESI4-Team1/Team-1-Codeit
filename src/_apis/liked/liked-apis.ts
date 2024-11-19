import { fetchApi } from '@/src/utils/api';
import { GatheringResponseType } from '@/src/types/gathering-data';

// 찜 목록 조회
export async function getLikedList(page: number): Promise<GatheringResponseType> {
  const url = `/api/liked/memberLikes?page=${page}&size=6`;

  const response = await fetchApi<{ data: GatheringResponseType }>(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
}

// 찜 추가하기
export async function addLike(gatheringId: number): Promise<void> {
  const url = `/api/liked/${gatheringId}`;

  await fetchApi<void>(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

// 찜 해제하기
export async function removeLike(gatheringId: number): Promise<void> {
  const url = `/api/liked/${gatheringId}`;

  await fetchApi<void>(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
