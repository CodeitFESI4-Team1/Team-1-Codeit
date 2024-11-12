import { fetchApi } from '@/src/utils/api';
import { LoginRequest, LoginResponse, SignupRequest, SignupResponse, User } from '@/src/types/auth';

export function signupUser(data: SignupRequest): Promise<{ data: SignupResponse }> {
  return fetchApi<{ data: SignupResponse }>('/auths/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}

export function loginUser(data: LoginRequest): Promise<{ data: LoginResponse }> {
  return fetchApi<{ data: LoginResponse; headers: Headers }>('/auths/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((response) => {
    const token = response.headers.get('Authorization');
    return { data: { token } };
  });
}

export function getUser(): Promise<{ data: User }> {
  return fetchApi<{ data: User }>('/auths/user', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
