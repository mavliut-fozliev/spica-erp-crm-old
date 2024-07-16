import React from "react";
import { TAutocompleteFunction, TprocessAndSaveFormData } from "../useAutocomplete";
import { usePageStore } from "store/pageStore";
import { roundNumber } from "services/functions/helpers/numberHelpers";

export default function useAutocompleteLocations(processAndSaveFormData: TprocessAndSaveFormData) {
  const pageStore = usePageStore();

  const autocompleteLocations: TAutocompleteFunction = (newFormData) => {
    const location_liter_detail = (index: number) => newFormData.fuel_cost_details[index]?.location_liter_detail || 0;
    const fuel_price = Number(pageStore.variables.find((v) => v.key === "fuel_price")?.value) || 0;

    const fuel_cost_details = newFormData.fuel_cost_details?.map((row: any, index: number) => ({
      ...row,
      total_cost: roundNumber(location_liter_detail(index) * fuel_price),
    }));

    const finalFormData = {
      ...newFormData,
      fuel_cost_details,
    };

    return processAndSaveFormData(finalFormData);
  };

  return autocompleteLocations;
}
