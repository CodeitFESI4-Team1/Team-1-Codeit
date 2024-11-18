import { useQuery } from '@tanstack/react-query';
import { getLikedList } from '@/src/_apis/liked/liked-apis';

export function useGetLikedListQuery(page: number) {
  return useQuery({
    queryKey: ['likedList', page],
    queryFn: () => getLikedList(page - 1), // 1 -> 0 기반으로 변환
  });
}
