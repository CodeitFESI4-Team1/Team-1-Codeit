import { fetchApi } from '@/src/utils/api';
import { LoginRequest, LoginResponse, SignupRequest, SignupResponse, User } from '@/src/types/auth';

export function signupUser(data: SignupRequest): Promise<{ data: SignupResponse }> {
  return fetchApi<{ data: SignupResponse }>('/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}

export function loginUser(data: LoginRequest): Promise<{ data: LoginResponse }> {
  return fetchApi<{ data: LoginResponse }>('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}

export function getUser(): Promise<{ data: User }> {
  return fetchApi<{ data: User }>('/user/1', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
