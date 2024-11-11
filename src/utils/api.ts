import { useAuthStore } from '@/src/store/use-auth-store';

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
    this.name = 'ApiError';
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

  try {
    const response = await fetch(`${url}`, fetchOptions); // API 요청 실행
    if (!response.ok) {
      let errorMessage;
      try {
        const errorData = await response.json();
        errorMessage = errorData.message || `HTTP error! status: ${response.status}`;
      } catch {
        errorMessage = `HTTP error! status: ${response.status}`;
      }

      throw new ApiError(response.status, errorMessage);
    }

    // 응답 데이터를 JSON 형태로 반환
    return (await response.json()) as T;
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
