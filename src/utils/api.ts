import { useAuthStore } from '@/src/store/use-auth-store';

export class ApiError extends Error {
  detail: { validationErrors: Record<string, string> } = { validationErrors: {} };

  constructor(
    public status: number,
    message: string,
    detail?: { validationErrors: Record<string, string> }, // 타입을 맞춤
  ) {
    super(message);
    this.name = 'ApiError';
    if (detail) this.detail = detail;
  }
}

// API 요청 함수
export async function fetchApi<T>(
  url: string,
  options: RequestInit = {},
  timeout = 5000,
): Promise<T> {
  const controller = new AbortController();
  const { signal } = controller;
  const id = setTimeout(() => controller.abort(), timeout);
  const { token } = useAuthStore.getState();
  const fetchOptions: RequestInit = {
    ...options,
    signal,
    headers: {
      ...options.headers,
      Authorization: token ? `Bearer ${token}` : '',
    },
    credentials: 'include',
  };

  // 로그 추가: 요청 URL, 헤더, 옵션 등을 확인
  // console.log('API 요청 URL:', url); // 요청 URL 로그
  // console.log('사용 중인 토큰:', token); // 토큰 로그
  // console.log('API 요청 옵션:', fetchOptions); // 요청 옵션 로그

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}${url}`, fetchOptions); // API 요청 실행

    // console.log('응답 상태 코드:', response.status); // 응답 상태 코드 로그

    if (!response.ok) {
      let errorDetail;
      let errorMessage;
      try {
        const { status, message, ...detail } = await response.json();
        errorMessage = message || `HTTP error! status: ${response.status}`;
        errorDetail = detail;
      } catch {
        errorMessage = `HTTP error! status: ${response.status}`;

        // console.log('JSON 파싱 실패, 에러 메시지:', errorMessage); // JSON 파싱 실패 로그
      }

      throw new ApiError(response.status, errorMessage, errorDetail);
    }

    const data = await response.json();
    return { ...data, headers: response.headers } as T;
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === 'AbortError') throw new ApiError(408, 'Request timeout');
      if (error instanceof ApiError) throw error;
    }
    throw new ApiError(0, 'Network error or request failed');
  } finally {
    clearTimeout(id);
  }
}
