import { fetchApi } from './api';

// 서버사이드 데이터 프리패칭 함수
export async function ssrPrefetch<T>(url: string): Promise<T | null> {
  try {
    const data = await fetchApi<T>(url); // fetchApi를 사용해 API 호출
    return data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('SSR Fetching Error:', error);
    return null;
  }
}
