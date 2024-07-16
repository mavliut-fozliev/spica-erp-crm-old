import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface UserState {
  role: string;
  identifier: string;
  name: string;
  surname: string;
  setRole: (state: string) => void;
  setIdentifier: (state: string) => void;
  setName: (state: string) => void;
  setSurname: (state: string) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      role: "",
      identifier: "",
      name: "",
      surname: "",
      setRole: (state: string) => set({ role: state }),
      setIdentifier: (state: string) => set({ identifier: state }),
      setName: (state: string) => set({ name: state }),
      setSurname: (state: string) => set({ surname: state }),
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
