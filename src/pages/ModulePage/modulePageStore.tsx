import { create } from "zustand";

interface State {
  openModal: boolean;
  rowForUpdate: { [key: string]: any };
  presets: { [key: string]: any };
  selectedArrayIndex: number;
  setOpenModal: (state: boolean) => void;
  setRowForUpdate: (state: { [key: string]: any }) => void;
  setPresets: (state: { [key: string]: any }) => void;
  setSelectedArrayIndex: (state: number) => void;
}

export const useModulePageStore = create<State>((set) => ({
  openModal: false,
  rowForUpdate: {},
  presets: {},
  selectedArrayIndex: 0,
  setOpenModal: (state: boolean) => set({ openModal: state }),
  setRowForUpdate: (state: { [key: string]: any }) => set({ rowForUpdate: state }),
  setPresets: (state: { [key: string]: any }) => set({ presets: state }),
  setSelectedArrayIndex: (state: number) => set({ selectedArrayIndex: state }),
}));
