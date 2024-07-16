import { create } from "zustand";

interface State {
  loading: boolean;
  dataErrorMessage: string;
  setLoading: (state: boolean) => void;
  setDataErrorMessage: (state: string) => void;
}

export const useLoginFormStore = create<State>((set) => ({
  loading: false,
  dataErrorMessage: "",
  setLoading: (state: boolean) => set({ loading: state }),
  setDataErrorMessage: (state: string) => set({ dataErrorMessage: state }),
}));
