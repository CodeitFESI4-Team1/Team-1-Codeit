export interface SignupResponse {
  token: string | null;
  refreshToken: string | null;
}

export interface SignupRequest {
  nickname: string;
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string | null;
  refreshToken: string | null;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LogoutRequest {
  refreshToken: string | null;
}

export interface User {
  id: number;
  email: string;
  nickname: string;
  profileImageUrl: string;
}
