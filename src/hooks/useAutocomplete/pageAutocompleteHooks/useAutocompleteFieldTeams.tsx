import React from "react";
import { TAutocompleteFunction, TprocessAndSaveFormData } from "../useAutocomplete";
import { obj } from "types/types";

export default function useAutocompleteFieldTeams(processAndSaveFormData: TprocessAndSaveFormData) {
  const autocompleteFieldTeams: TAutocompleteFunction = (newFormData, currentInputName, currentInputArrayIndex) => {
    let employees = newFormData.employees?.map((row: obj, index: number) => {
      if (currentInputName === "is_boss") {
        return { ...row, is_boss: index === currentInputArrayIndex, salary: undefined };
      } else {
        return row;
      }
    });

    const hasBoss = Boolean(employees?.find((row: obj) => row.is_boss));
    if (!hasBoss && employees && employees[0]) {
      employees[0].is_boss = true;
    }

    const finalFormData = {
      ...newFormData,
      employees,
    };

    return processAndSaveFormData(finalFormData);
  };
  return autocompleteFieldTeams;
}
