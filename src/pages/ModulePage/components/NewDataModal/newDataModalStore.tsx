import { obj } from "types/types";
import { create } from "zustand";
export type TSingleFile = { content: File[]; parent?: string; arrayIndex?: number };
export type TFile = { [key: string]: TSingleFile };

interface State {
  formData: obj;
  errors: obj;
  isRemoved: boolean;
  files: TFile;
  uploadingFiles: string[];
  isDisableSaveButton: boolean;
  formDataHasChanged: boolean;
  isFieldFormFilled: boolean;
  setFormData: (state: obj) => void;
  setErrors: (state: obj) => void;
  setIsRemoved: (state: boolean) => void;
  setFiles: (state: TFile) => void;
  setUploadingFiles: (state: string[]) => void;
  setIsDisableSaveButton: (state: boolean) => void;
  setFormDataHasChanged: (state: boolean) => void;
  setIsFieldFormFilled: (state: boolean) => void;
}

export const useNewDataModalStore = create<State>((set) => ({
  formData: {},
  errors: {},
  isRemoved: false,
  files: {},
  uploadingFiles: [],
  isDisableSaveButton: false,
  formDataHasChanged: false,
  isFieldFormFilled: true,
  setFormData: (state: obj) => set({ formData: state }),
  setErrors: (state: obj) => set({ errors: state }),
  setIsRemoved: (state: boolean) => set({ isRemoved: state }),
  setFiles: (state: TFile) => set({ files: state }),
  setUploadingFiles: (state: string[]) => set({ uploadingFiles: state }),
  setIsDisableSaveButton: (state: boolean) => set({ isDisableSaveButton: state }),
  setFormDataHasChanged: (state: boolean) => set({ formDataHasChanged: state }),
  setIsFieldFormFilled: (state: boolean) => set({ isFieldFormFilled: state }),
}));
