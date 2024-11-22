import { useQuery } from '@tanstack/react-query';
import { getCrewReviews } from '@/src/_apis/crew/crew-review-apis';

export function useGetCrewReviewsQuery(crewId: number, page: number) {
  return useQuery({
    queryKey: ['crewReviews', crewId, page],
    queryFn: () => getCrewReviews(crewId, page - 1),
  });
}
