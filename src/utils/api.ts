export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

// 재시도 요청 시 딜레이 함수
function delay(ms: number) {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, ms);
  });
}

// API 요청 함수
export async function fetchApi<T>(
  url: string,
  options: RequestInit = {},
  timeout = 5000,
  retries = 2,
): Promise<T> {
  const controller = new AbortController();
  const { signal } = controller;
  const id = setTimeout(() => controller.abort(), timeout);

  const fetchOptions: RequestInit = {
    ...options,
    signal,
    headers: {
      ...(options.body instanceof FormData ? {} : { 'Content-Type': 'application/json' }),
      ...options.headers,
      // TODO: 추후 쿠키 추가
    },
    credentials: 'include',
  };

  if (options.body && !(options.body instanceof FormData)) {
    fetchOptions.body = JSON.stringify(options.body);
  }

  try {
    const response = await fetch(url, fetchOptions); // API 요청 실행

    if (!response.ok) {
      let errorMessage;
      try {
        const errorData = await response.json();
        errorMessage = errorData.message || `HTTP error! status: ${response.status}`;
      } catch {
        errorMessage = `HTTP error! status: ${response.status}`;
      }

      if (response.status >= 500 && retries > 0) {
        await delay(1000); // 1초 대기
        return await fetchApi(url, options, timeout, retries - 1); // return await 추가
      }

      throw new ApiError(response.status, errorMessage);
    }

    // 응답 데이터를 JSON 형태로 반환
    return (await response.json()) as T; // return await 추가
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
