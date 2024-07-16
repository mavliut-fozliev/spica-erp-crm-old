import React from "react";
import { TAutocompleteFunction, TprocessAndSaveFormData } from "../useAutocomplete";
import useGetStoredPageData from "hooks/useGetStoredPageData";
import { pageIds } from "consts/config/pages/pages";
import { getIdValueFromObject } from "services/functions/helpers/getIdValueFromObject";

export default function useAutocompleteAssemblyProjects(processAndSaveFormData: TprocessAndSaveFormData) {
  const { getPageDocument, getPageDocuments } = useGetStoredPageData();

  const autocompleteAssemblyProjects: TAutocompleteFunction = (newFormData) => {
    const customer = newFormData.customer ?? getPageDocument({ pageId: pageIds.Customers, documentId: getIdValueFromObject(newFormData.project?.customer) });

    const projectId = getIdValueFromObject(newFormData.project);
    const units = getPageDocuments({ pageId: pageIds.Units }).filter((unit) => getIdValueFromObject(unit.project) === projectId);

    const tasks = getPageDocuments({ pageId: pageIds.AssemblyPlan });

    const fully_added_to_gantt_chart = units.every((unit) => tasks.some((task) => getIdValueFromObject(task.unit) === getIdValueFromObject(unit)));

    const finalFormData = {
      ...newFormData,
      customer: customer,
      fully_added_to_gantt_chart,
    };

    return processAndSaveFormData(finalFormData);
  };

  return autocompleteAssemblyProjects;
}
