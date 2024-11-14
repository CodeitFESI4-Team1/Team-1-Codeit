import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from '@tanstack/react-query';

export const useInfiniteScroll = <TData>({
  queryKey,
  queryFn,
  getNextPageParam,
}: {
  queryKey: string[];
  queryFn: ({ pageParam }: { pageParam?: number }) => Promise<TData>;
  getNextPageParam: (lastPage: TData, pages: TData[]) => number | undefined;
}) => {
  const { data, status, fetchNextPage, hasNextPage, isFetchingNextPage, refetch } =
    useInfiniteQuery({
      queryKey,
      queryFn,
      getNextPageParam,
      initialPageParam: 0,
    });

  const { ref, inView } = useInView({
    threshold: 1,
  });

  if (inView && hasNextPage && !isFetchingNextPage) {
    fetchNextPage();
  }

  return { data, status, ref, isFetchingNextPage, refetch };
};
