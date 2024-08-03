import { create } from 'zustand';
import { axiosPublic } from '../services/axios.api.config';

type State = {
  token: string;
};

type Action = {
  // setToken: (value: string) => void;
  setToken: () => Promise<true | undefined>;
};

export const useTokenStore = create<State & Action>(set => ({
  token: '',
  // setToken: (value: string) => set({ token: value }),
  setToken: async () => {
    const { data } = await axiosPublic.get('/token');
    if (data.success) {
      set({ token: data.token });
      return true;
    }
  },
}));