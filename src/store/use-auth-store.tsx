import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { User } from '@/src/types/auth';

interface AuthState {
  isAuth: boolean;
  user: User | null;
  token: string | null;
  refreshToken: string | null;
  login: (token: string, refreshToken: string) => void;
  logout: () => void;
  setUser: (user: User) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuth: false,
      user: null,
      token: null,
      refreshToken: null,
      login: (token, refreshToken) =>
        set({
          isAuth: true,
          token,
          refreshToken,
        }),
      logout: () =>
        set({
          isAuth: false,
          user: null,
          token: null,
          refreshToken: null,
        }),
      setUser: (user: User) => set((state) => ({ ...state, user })),
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({
        isAuth: state.isAuth,
        token: state.token,
        refreshToken: state.refreshToken,
        user: state.user,
      }),
    },
  ),
);
