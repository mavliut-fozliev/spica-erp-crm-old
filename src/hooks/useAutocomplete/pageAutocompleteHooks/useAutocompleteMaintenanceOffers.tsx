import React from "react";
import { TAutocompleteFunction, TprocessAndSaveFormData, TshouldPasteFromStore } from "../useAutocomplete";
import useGetStoredPageData from "hooks/useGetStoredPageData";
import { pageIds } from "consts/config/pages/pages";
import { getIdValueFromObject } from "services/functions/helpers/getIdValueFromObject";

export default function useAutocompleteMaintenanceOffers(processAndSaveFormData: TprocessAndSaveFormData, shouldPasteFromStore: TshouldPasteFromStore) {
  const { getPageDocument } = useGetStoredPageData();

  const autocompleteMaintenanceOffers: TAutocompleteFunction = (newFormData) => {
    const getCustomer = () => {
      let customer = newFormData.customer;
      if (!customer && shouldPasteFromStore("customer")) {
        const project = getPageDocument({ pageId: pageIds.Projects, documentId: getIdValueFromObject(newFormData.unit?.project) });
        customer = project?.customer;
      }
      return customer;
    };

    const getProject = () => {
      let project = newFormData.project;
      if (!project && shouldPasteFromStore("project")) {
        project = getPageDocument({ pageId: pageIds.Projects, documentId: getIdValueFromObject(newFormData.unit?.project) });
      }
      return project;
    };

    const finalFormData = { ...newFormData, customer: getCustomer(), project: getProject() };
    return processAndSaveFormData(finalFormData);
  };
  return autocompleteMaintenanceOffers;
}
