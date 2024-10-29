import { UseMutationOptions, UseQueryOptions, useMutation, useQuery } from '@tanstack/react-query';
import { ApiError, fetchApi } from '../utils/api';

// API 데이터 조회용 React Query 훅
export function useApiQuery<T>(
  key: string | string[],
  url: string,
  options?: Omit<UseQueryOptions<T, ApiError>, 'queryKey' | 'queryFn'>,
) {
  return useQuery<T, ApiError>({
    queryKey: Array.isArray(key) ? key : [key],
    queryFn: () => fetchApi<T>(url),
    retry: false,
    ...options,
  });
}

// 데이터 수정용 React Query 훅 (POST, PUT, DELETE 등)
export function useApiMutation<T, V>(
  url: string,
  method: 'POST' | 'PUT' | 'DELETE',
  options?: Omit<UseMutationOptions<T, ApiError, V>, 'mutationFn'>,
) {
  return useMutation<T, ApiError, V>({
    mutationFn: (data) => {
      const fetchOptions: RequestInit = {
        method,
        headers: data instanceof FormData ? {} : { 'Content-Type': 'application/json' },
        body: data instanceof FormData ? data : JSON.stringify(data),
      };
      return fetchApi<T>(url, fetchOptions);
    },
    ...options,
  });
}
