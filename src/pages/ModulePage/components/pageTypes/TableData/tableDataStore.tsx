import { create } from "zustand";

type TSelectField = {
  _id: string;
  label: string;
};

export type TFilterProps = {
  columnName: TSelectField;
  operator: TSelectField;
  value: string;
};

export const defaultFilterProps: TFilterProps = {
  columnName: { _id: "ALL_NAMES", label: "Hepsi" },
  operator: { _id: "contain", label: "içerir" },
  value: "",
};

interface State {
  filterProps: TFilterProps;
  setFilterProps: (state: TFilterProps) => void;
}

export const useTableDataStore = create<State>((set) => ({
  filterProps: defaultFilterProps,
  setFilterProps: (state) => set({ filterProps: state }),
}));
