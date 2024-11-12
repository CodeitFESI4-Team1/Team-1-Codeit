export interface SignupResponse {
  token: string;
}

export interface SignupRequest {
  nickname: string;
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string | null;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface User {
  id: number;
  email: string;
  nickname: string;
  profileImageUrl: string;
}
