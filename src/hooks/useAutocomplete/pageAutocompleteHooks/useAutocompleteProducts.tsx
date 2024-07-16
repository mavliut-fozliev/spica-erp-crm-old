import React from "react";
import { TAutocompleteFunction, TprocessAndSaveFormData } from "../useAutocomplete";

export default function useAutocompleteProducts(processAndSaveFormData: TprocessAndSaveFormData) {
  const autocompleteProducts: TAutocompleteFunction = (newFormData) => {
    const brand = newFormData.brand?.replace(/i/g, "İ").toUpperCase() || "";
    const type = newFormData.type?.replace(/i/g, "İ").toUpperCase() || "";
    const model = newFormData.model?.replace(/i/g, "İ").toUpperCase() || "";
    const abbreviation = newFormData.abbreviation?.replace(/i/g, "İ").toUpperCase() || "";

    const finalFormData = {
      ...newFormData,
      name: `${brand} ${type} ${model}`,
      brand,
      type,
      model,
      abbreviation,
    };

    return processAndSaveFormData(finalFormData);
  };
  return autocompleteProducts;
}
