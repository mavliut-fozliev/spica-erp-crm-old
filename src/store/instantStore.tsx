import { obj } from "types/types";
import { create } from "zustand";
type TToast = { clue: string; type?: "info" | "alert" | "error" };

interface InstantState {
  selectedRow: obj | undefined;
  isLoading: boolean;
  disableAnyAction: boolean;
  moduleDataLoaded: boolean;
  hideSidebar: boolean;
  showToast: TToast;
  setSelectedRow: (state: obj | undefined) => void;
  setIsLoading: (state: boolean) => void;
  setDisableAnyAction: (state: boolean) => void;
  setModuleDataLoaded: (state: boolean) => void;
  setHideSidebar: (state: boolean) => void;
  setShowToast: (state: TToast) => void;
}

export const useInstantStore = create<InstantState>()((set) => ({
  selectedRow: undefined,
  isLoading: false,
  disableAnyAction: false,
  moduleDataLoaded: false,
  hideSidebar: window.innerWidth <= 850,
  showToast: { clue: "", type: "info" },
  setSelectedRow: (state: obj | undefined) => set({ selectedRow: state }),
  setIsLoading: (state: boolean) => set({ isLoading: state }),
  setDisableAnyAction: (state: boolean) => set({ disableAnyAction: state }),
  setModuleDataLoaded: (state: boolean) => set({ moduleDataLoaded: state }),
  setHideSidebar: () => set((state) => ({ hideSidebar: !state.hideSidebar })),
  setShowToast: (state: TToast) => set({ showToast: state }),
}));
