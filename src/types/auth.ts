export interface LoginResponse {
  token: string;
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
