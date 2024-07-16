import React from "react";
import { TAutocompleteFunction, TprocessAndSaveFormData } from "../useAutocomplete";

export default function useAutocompleteCustomers(processAndSaveFormData: TprocessAndSaveFormData) {
  const autocompleteCustomers: TAutocompleteFunction = (newFormData) => {
    const name = newFormData.name?.replace(/i/g, "İ").toUpperCase();

    const finalFormData = {
      ...newFormData,
      name,
    };

    return processAndSaveFormData(finalFormData);
  };

  return autocompleteCustomers;
}
