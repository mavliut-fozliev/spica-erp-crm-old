import { create } from "zustand";
import { TexpandedModule } from "../../types";

interface State {
  expandedModule: TexpandedModule;
  expandedSubmodule: TexpandedModule;
  selectedModule: string;
  selectedSubmodule: string;
  setExpandedModule: (state: TexpandedModule) => void;
  setExpandedSubmodule: (state: TexpandedModule) => void;
  setSelectedModule: (state: string) => void;
  setSelectedSubmodule: (state: string) => void;
}

export const useSidebarStore = create<State>((set) => ({
  expandedModule: { old: "old", new: "new" },
  expandedSubmodule: { old: "old", new: "new" },
  selectedModule: "",
  selectedSubmodule: "",
  setExpandedModule: (state: TexpandedModule) => set({ expandedModule: state }),
  setExpandedSubmodule: (state: TexpandedModule) => set({ expandedSubmodule: state }),
  setSelectedModule: (state: string) => set({ selectedModule: state }),
  setSelectedSubmodule: (state: string) => set({ selectedSubmodule: state }),
}));
