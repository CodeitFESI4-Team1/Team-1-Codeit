import { useCallback, useRef } from 'react';
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
  const observerRef = useRef<IntersectionObserver | null>(null);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey,
    queryFn,
    getNextPageParam,
    initialPageParam: 0,
  });

  const observe = useCallback(
    (node: HTMLDivElement) => {
      if (observerRef.current) observerRef.current.disconnect();
      observerRef.current = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
          }
        },
        { threshold: 1 },
      );
      if (node) observerRef.current.observe(node);
    },
    [fetchNextPage, hasNextPage, isFetchingNextPage],
  );

  return { data, observe, isFetchingNextPage };
};
