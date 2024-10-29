'use client';

import { ApiError } from '@/src/utils/api';
import { useApiQuery } from '@/src/hooks/useApi';

interface Data {
  name: string;
}

interface ApiResponse {
  message: string; // 응답 메시지
  data?: Data; // 사용자 데이터 (선택적)
}

/**
 * 클라이언트에서의 데이터 패칭
 * 초기 데이터는 ssr에서, 추가로 불러오거나, 데이터 변동이 일어나는경우 클라이언트에서 처리
 * useApiQuery: API 데이터를 가져오는 React Query 훅
 * - ['testData']: 쿼리 키
 * - '/api/test-api?status=success': 요청 URL
 * - 제네릭 타입: ApiResponse로 지정하여 data 타입 명시
 */

function TestPage() {
  const { data, error, isLoading } = useApiQuery<ApiResponse>(
    ['testData'],
    '/api/test-api?status=success',
    // '/api/test-api?status=not-found',
  );

  // 데이터 로딩 중일 때
  if (isLoading) return <div>isLoading...</div>;

  // API 에러 핸들링 (상태 코드별 처리)
  if (error instanceof ApiError) {
    if (error.status === 404) return <div>404 에러: 데이터를 찾을 수 없습니다.</div>;
    if (error.status === 500) return <div>500 에러: 서버 오류가 발생했습니다.</div>;
    if (error.status === 400) return <div>잘못된 요청입니다.</div>;
    if (error.status === 408) return <div>타임아웃: 요청 시간이 초과되었습니다.</div>;
  }

  return (
    <div>
      {data ? (
        <div>
          <p>응답 메시지: {data.message}</p>
          {data.data && (
            <div>
              <p>{data.data.name}</p>
            </div>
          )}
        </div>
      ) : (
        <div>데이터가 없습니다.</div>
      )}
    </div>
  );
}

export default TestPage;
