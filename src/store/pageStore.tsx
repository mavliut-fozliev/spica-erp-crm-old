import { create } from "zustand";
import { TBucket, TVariables, Tconfig, Tpage, TpagesData } from "../types/types";
import { persist, createJSONStorage } from "zustand/middleware";

export const defaultPage = {
  title: "",
  description: "",
  href: "/",
  _id: "",
};

const defaultConfig = {
  PageModules: [],
  Pages: [],
};

interface PageState {
  page: Tpage;
  pageBuckets: { [key: string]: TBucket };
  pagesData: TpagesData;
  clickedRow: { [key: string]: any };
  section: string;
  config: Tconfig;
  variables: TVariables;
  notificatons: { [key: string]: any }[];
  changedWidth: number;
  setPage: (state: Tpage) => void;
  setPageBuckets: (state: { [key: string]: TBucket }) => void;
  setPagesData: (state: TpagesData) => void;
  setClickedRow: (state: { [key: string]: any }) => void;
  setSection: (state: string) => void;
  setConfig: (state: Tconfig) => void;
  setVariables: (state: TVariables) => void;
  setNotifications: (state: { [key: string]: any }[]) => void;
  setChangedWidth: (state: number) => void;
}

export const usePageStore = create<PageState>()(
  persist(
    (set) => ({
      page: defaultPage,
      pageBuckets: {},
      pagesData: {},
      clickedRow: {},
      section: "exist",
      config: defaultConfig,
      variables: [],
      notificatons: [],
      changedWidth: 40,
      setPage: (state: Tpage) => set({ page: state }),
      setPageBuckets: (state: { [key: string]: TBucket }) => set({ pageBuckets: state }),
      setPagesData: (state: TpagesData) => set({ pagesData: state }),
      setClickedRow: (state: { [key: string]: any }) => set({ clickedRow: state }),
      setSection: (state: string) => set({ section: state }),
      setConfig: (state: Tconfig) => set({ config: state }),
      setVariables: (state: TVariables) => set({ variables: state }),
      setNotifications: (state: { [key: string]: any }[]) => set({ notificatons: state }),
      setChangedWidth: (state: number) => set({ changedWidth: state }),
    }),
    {
      name: "page-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
