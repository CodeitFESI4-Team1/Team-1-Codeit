import { getReviewableGatherings } from '@/src/_apis/gathering/reviewable-gathering';

export function useGetReviewableQuery() {
  return {
    queryKey: ['reviewableGathering'],
    queryFn: getReviewableGatherings,
  };
}
