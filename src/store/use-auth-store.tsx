import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { User } from '@/src/types/auth';

interface AuthState {
  isAuth: boolean;
  user: User | null;
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
  setUser: (user: User | { data: User }) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuth: false,
      user: null,
      token: null,
      login: (token) =>
        set({
          isAuth: true,
          token,
        }),
      logout: () =>
        set({
          isAuth: false,
          user: null,
          token: null,
        }),
      setUser: (user: User | { data: User }) => {
        // user가 { data: User } 형태로 오는 경우 처리
        const userData = 'data' in user ? user.data : user;
        set({ user: userData });
      },
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
