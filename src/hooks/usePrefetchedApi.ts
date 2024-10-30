import { useApiQuery } from './useApi';

// SSR에서 프리패칭된 데이터를 사용하는 React Query 훅
export function usePrefetchedApiQuery<T>(
  key: string | string[], // 쿼리 키
  url: string,
  initialData: T,
) {
  return useApiQuery<T>(key, url, {
    enabled: false, // 중복 요청 방지
    initialData, // 초기 데이터를 설정하여 첫 렌더링 시 사용
  });
}
