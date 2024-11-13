import { getMyCrewCreationList } from '@/src/_apis/crew/get-my-crew-creation-list';
import { getMyCrewParticipationList } from '@/src/_apis/crew/get-my-crew-participation-list';
import {
  ConditionTypes,
  MainCrewListResponse,
  MyCrewListResponse,
  PageableTypes,
} from '@/src/types/crew-card';
import { getCrewList } from '../_apis/crew/get-crew-list';

export function useGetCrewListQuery(condition: ConditionTypes) {
  return {
    queryKey: [
      condition.keyword,
      condition.mainLocation,
      condition.mainCategory,
      condition.subCategory,
      condition.sortType,
    ],
    queryFn: ({ pageParam = 0 }) =>
      getCrewList(condition, { page: pageParam, size: 6, sort: [condition.sortType] }).then(
        (response) => {
          if (response === undefined) {
            throw new Error('Response is undefined');
          }
          return response;
        },
      ),
    getNextPageParam: (lastPage: MainCrewListResponse, allPages: MainCrewListResponse[]) =>
      lastPage.hasNext ? allPages.length : undefined,
  };
}

export function useGetMyCrewParticipationQuery() {
  return {
    queryKey: ['my-crew-participation'],
    queryFn: ({ pageParam = 0 }) =>
      getMyCrewParticipationList({ page: pageParam, size: 6, sort: ['string'] }).then(
        (response) => {
          if (response === undefined) {
            throw new Error('Response is undefined');
          }
          return response;
        },
      ),
    getNextPageParam: (lastPage: MyCrewListResponse, allPages: MyCrewListResponse[]) =>
      lastPage.hasNext ? allPages.length : undefined,
  };
}

export function useGetMyCrewCreationQuery() {
  return {
    queryKey: ['my-crew-creation'],
    queryFn: ({ pageParam = 0 }) =>
      getMyCrewCreationList({ page: pageParam, size: 6, sort: ['string'] }).then((response) => {
        if (response === undefined) {
          throw new Error('Response is undefined');
        }
        return response;
      }),
    getNextPageParam: (lastPage: MyCrewListResponse, allPages: MyCrewListResponse[]) =>
      lastPage.hasNext ? allPages.length : undefined,
  };
}
