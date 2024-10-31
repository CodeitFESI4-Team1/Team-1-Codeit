import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface User {
  id: number;
  nickname: string;
  email: string;
  profileImageUrl: string;
}

interface AuthState {
  isAuth: boolean;
  user: User | null;
  token: string | null;
  login: (userData: User, token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuth: false,
      user: null,
      token: null,
      login: (userData, token) =>
        set({
          isAuth: true,
          user: userData,
          token,
        }),
      logout: () =>
        set({
          isAuth: false,
          user: null,
          token: null,
        }),
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({
        isAuth: state.isAuth,
        token: state.token,
        user: state.user,
      }),
    },
  ),
);
