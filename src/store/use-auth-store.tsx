import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { User } from '@/src/types/auth';

interface AuthState {
  isAuth: boolean;
  user: User | null;
  token: string | null;
  rehydrated: boolean; // 상태 복원 여부
  login: (token: string) => void;
  logout: () => void;
  setUser: (user: User) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuth: false,
      user: null,
      token: null,
      rehydrated: false,
      login: (token) => set({ isAuth: true, token }),
      logout: () =>
        set({
          isAuth: false,
          user: null,
          token: null,
        }),
      setUser: (user: User) => set({ user, isAuth: true }),
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => sessionStorage),
      onRehydrateStorage: () => (state) => {
        if (state) {
          // eslint-disable-next-line no-param-reassign
          state.rehydrated = true; // 상태 복원 완료
        }
      },
      partialize: (state) => ({
        isAuth: state.isAuth,
        token: state.token,
        user: state.user,
      }),
    },
  ),
);
