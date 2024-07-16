import React from "react";
import { TAutocompleteFunction, TprocessAndSaveFormData } from "../useAutocomplete";
import { useUserStore } from "store/userStore";

export default function useAutocompleteSafetyWalk(processAndSaveFormData: TprocessAndSaveFormData) {
  const userStore = useUserStore();

  const autocompleteSafetyWalk: TAutocompleteFunction = (newFormData) => {
    const finalFormData = {
      ...newFormData,
      access_identifier: userStore.identifier,
    };

    return processAndSaveFormData(finalFormData);
  };
  return autocompleteSafetyWalk;
}
