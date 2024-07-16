import React from "react";
import { TAutocompleteFunction, TprocessAndSaveFormData } from "../useAutocomplete";
import useGetStoredPageData from "hooks/useGetStoredPageData";
import { pageIds } from "consts/config/pages/pages";
import { getIdValueFromObject } from "services/functions/helpers/getIdValueFromObject";

export default function useAutocompleteUnits(processAndSaveFormData: TprocessAndSaveFormData) {
  const { getPageDocuments } = useGetStoredPageData();

  const autocompleteUnits: TAutocompleteFunction = (newFormData) => {
    const tasks = getPageDocuments({ pageId: pageIds.AssemblyPlan });

    const added_to_gantt_chart = tasks.some((task) => getIdValueFromObject(task.unit) === newFormData._id);

    const finalFormData = {
      ...newFormData,
      added_to_gantt_chart,
    };

    return processAndSaveFormData(finalFormData);
  };
  return autocompleteUnits;
}
