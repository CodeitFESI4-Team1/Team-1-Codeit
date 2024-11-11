import { fetchApi } from '@/src/utils/api';
import {
  ConditionTypes,
  CrewCardInform,
  CrewCardInformResponse,
  PageableTypes,
} from '@/src/types/crew-card';

export async function getCrewList(
  condition: ConditionTypes,
  pageable: PageableTypes,
): Promise<CrewCardInformResponse> {
  const { keyword, mainLocation, mainCategory, subCategory, sortType } = condition;
  const { page, size, sort = ['string'] } = pageable;

  try {
    const response = await fetchApi<CrewCardInformResponse>(
      `/api/crews/search?keyword=${keyword}&mainLocation=${mainLocation}&mainCategory=${mainCategory}&subCategory=${subCategory}&sortType=${sortType}&page=${page}&size=${size}&sort=${sort}`,
      {
        method: 'GET',
        credentials: 'include', // 인증 정보를 요청에 포함
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJ1c2VySWQiOjIsInVzZXJFbWFpbCI6InlvdWxAZW1haWwuY29tIiwiaWF0IjoxNzMxMjkxOTcyLCJleHAiOjE3MzI1MDE1NzJ9.xpW6KZgXDRMreW1XiRtF-HK1sdgfJ3eUvNNov7OlS6M`,
        },
      },
    );
    if (!Array.isArray(response)) {
      throw new Error('서버 응답이 올바른 형식이 아닙니다.');
    }
    const data = response as CrewCardInformResponse;

    return { data: data.data, hasNext: data.hasNext };
  } catch (error) {
    throw new Error('크루 리스트를 불러오는데 실패했습니다.');
  }
}
