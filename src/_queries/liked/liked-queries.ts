import { useQuery } from '@tanstack/react-query';
import { getLikedList } from '@/src/_apis/liked/liked-apis';

export function useGetLikedListQuery(page: number) {
  return useQuery({
    queryKey: ['likedList', page],
    queryFn: () => getLikedList(page),
  });
}
