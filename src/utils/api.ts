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

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}${url}`, fetchOptions);

    if (!response.ok) {
      let errorDetail;
      let errorMessage;
      try {
        const { status, message, ...detail } = await response.json();
        errorMessage = message || `HTTP error! status: ${response.status}`;
        errorDetail = detail;
      } catch {
        errorMessage = `HTTP error! status: ${response.status}`;
      }

      throw new ApiError(response.status, errorMessage, errorDetail);
    }

    return { data: await response.json() } as T;
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
