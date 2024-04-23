import { create } from 'zustand';

type User = {
  userId: string | null;
  name: string | null;
  contact: string | null;
  role: string | null;
};

type AuthState = {
  user: User;
  isLoggedin: boolean;
  actions: {
    updateUser: (user: User) => void;
    setIsLoggedin: () => void;
    reset: () => void;
  };
};

const useAuthStore = create<AuthState>((set) => ({
  user: {
    userId: null,
    name: null,
    contact: null,
    role: null,
  },
  isLoggedin: false,

  actions: {
    updateUser: (newUser) => set(() => ({ user: newUser })),
    setIsLoggedin: () => set(() => ({ isLoggedin: true })),
    reset: () =>
      set({
        user: {
          userId: null,
          contact: null,
          name: null,
          role: null,
        },
        isLoggedin: false,
      }),
  },
}));

export const useAuthActions = () => useAuthStore((state) => state.actions);
export const useLoggedinUser = () => useAuthStore((state) => state.user);
export const useLoggedinState = () => useAuthStore((state) => state.isLoggedin);
