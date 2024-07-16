import React from "react";
import { TAutocompleteFunction, TprocessAndSaveFormData, TshouldPasteFromStore } from "../useAutocomplete";
import useGetStoredPageData from "hooks/useGetStoredPageData";
import { pageIds } from "consts/config/pages/pages";
import { getIdValueFromObject } from "services/functions/helpers/getIdValueFromObject";

export default function useAutocompleteMaintenanceUnits(processAndSaveFormData: TprocessAndSaveFormData) {
  const { getPageDocument } = useGetStoredPageData();

  const autocompleteMaintenanceUnits: TAutocompleteFunction = (newFormData) => {
    const product = getPageDocument({ pageId: pageIds.Products, documentId: getIdValueFromObject(newFormData.unit?.product) });

    const project = getPageDocument({ pageId: pageIds.Projects, documentId: getIdValueFromObject(newFormData.unit?.project) });

    const finalFormData = { ...newFormData, product, project };
    return processAndSaveFormData(finalFormData);
  };
  return autocompleteMaintenanceUnits;
}
