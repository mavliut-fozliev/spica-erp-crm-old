import { create } from "zustand";
import { TtokenDecoded } from "../types/types";

interface AuthState {
  signedIn: boolean;
  tokenDecoded: TtokenDecoded | undefined;
  setSignedIn: (state: boolean) => void;
  setTokenDecoded: (state: TtokenDecoded | undefined) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  signedIn: false,
  tokenDecoded: undefined,
  setSignedIn: (state: boolean) => set({ signedIn: state }),
  setTokenDecoded: (state: TtokenDecoded | undefined) => set({ tokenDecoded: state }),
}));
