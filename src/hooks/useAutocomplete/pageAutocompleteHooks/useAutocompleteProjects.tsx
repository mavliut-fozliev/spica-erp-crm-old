import React from "react";
import { TAutocompleteFunction, TprocessAndSaveFormData } from "../useAutocomplete";
import dayjs from "dayjs";
import { isoDateTimeFormat } from "services/functions/helpers/dateHelpers";

export default function useAutocompleteProjects(processAndSaveFormData: TprocessAndSaveFormData) {
  const autocompleteProjects: TAutocompleteFunction = (newFormData) => {
    const finalFormData = {
      ...newFormData,
      created_date: newFormData.created_date ?? dayjs().format(isoDateTimeFormat),
    };

    return processAndSaveFormData(finalFormData);
  };
  return autocompleteProjects;
}
