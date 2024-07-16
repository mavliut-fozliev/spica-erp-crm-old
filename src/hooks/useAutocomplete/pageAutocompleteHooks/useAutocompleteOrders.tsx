import React from "react";
import { TAutocompleteFunction, TprocessAndSaveFormData } from "../useAutocomplete";
import { getIdValueFromObject } from "services/functions/helpers/getIdValueFromObject";
import useGetStoredPageData from "hooks/useGetStoredPageData";
import { pageIds } from "consts/config/pages/pages";
import { TDocument } from "types/types";

export default function useAutocompleteOrders(processAndSaveFormData: TprocessAndSaveFormData) {
  const { getPageDocument, getPageDocuments } = useGetStoredPageData();

  const autocompleteOrders: TAutocompleteFunction = (newFormData) => {
    const customer = newFormData.customer ?? getPageDocument({ pageId: pageIds.Customers, documentId: getIdValueFromObject(newFormData.project?.customer) });
    const projectId = getIdValueFromObject(newFormData.project);
    const units = getPageDocuments({ pageId: pageIds.Units }).filter((unit) => getIdValueFromObject(unit.project) === projectId);

    const tasks = getPageDocuments({ pageId: pageIds.AssemblyPlan });

    const unitArray = units.map((unit: TDocument) => ({
      product: getIdValueFromObject(unit.product),
      serial_number: unit.serial_number,
      added_to_gantt_chart: tasks.some((task) => getIdValueFromObject(task.unit) === getIdValueFromObject(unit)),
    }));

    const finalFormData = {
      ...newFormData,
      customer: customer,
      units: unitArray,
    };

    return processAndSaveFormData(finalFormData);
  };

  return autocompleteOrders;
}
