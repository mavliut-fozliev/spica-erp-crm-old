import { create } from "zustand";
import { TNotificationResolved } from "../../types";

interface State {
  notifications: TNotificationResolved[];
  openList: boolean;
  openUserMenu: boolean;
  setNotifications: (state: TNotificationResolved[]) => void;
  setOpenList: (state: boolean) => void;
  setOpenUserMenu: (state: boolean) => void;
}

export const useTopbarStore = create<State>((set) => ({
  notifications: [],
  openList: false,
  openUserMenu: false,
  setNotifications: (state: TNotificationResolved[]) => set({ notifications: state }),
  setOpenList: (state: boolean) => set({ openList: state }),
  setOpenUserMenu: (state: boolean) => set({ openUserMenu: state }),
}));
