import { create } from 'zustand';

type State = {
  token: string;
};

type Action = {
  setToken: (value: string) => void;
};

export const useTokenStore = create<State & Action>(set => ({
  token: '',
  setToken: (value: string) => set({ token: value }),
}));