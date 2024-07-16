import React from "react";
import { TAutocompleteFunction, TprocessAndSaveFormData, TshouldPasteFromStore } from "../useAutocomplete";
import { useInstantStore } from "store/instantStore";
import useGetStoredPageData from "hooks/useGetStoredPageData";
import { pageIds } from "consts/config/pages/pages";
import { getIdValueFromObject } from "services/functions/helpers/getIdValueFromObject";
import dayjs from "dayjs";
import { findEndDate } from "pages/ModulePage/components/pageTypes/GanttChart/helpers/findEndDate";
import { findNextWorkDay } from "pages/ModulePage/components/pageTypes/GanttChart/helpers/findNextWorkDay";
import { getValueOfDate } from "pages/ModulePage/components/pageTypes/GanttChart/helpers/getValueOfDate";

export default function useAutocompleteMaintenancePlanning(processAndSaveFormData: TprocessAndSaveFormData, shouldPasteFromStore: TshouldPasteFromStore) {
  const { getPageDocuments, getPageDocument } = useGetStoredPageData();
  const instantStore = useInstantStore();

  const autocompleteMaintenancePlanning: TAutocompleteFunction = (newFormData) => {
    const getCustomer = () => {
      let customer = newFormData.customer;
      if (!customer && shouldPasteFromStore("customer")) {
        const project = getPageDocument({ pageId: pageIds.Projects, documentId: getIdValueFromObject(newFormData.unit?.project) });

        customer = getPageDocument({ pageId: pageIds.Customers, documentId: getIdValueFromObject(project?.customer) });
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

    const pageData = getPageDocuments({ pageId: "current" });

    const currentTeamItems = pageData.filter((row) => getIdValueFromObject(row.employee) === getIdValueFromObject(newFormData.employee));

    const sortedItems = currentTeamItems.sort((a, b) => getValueOfDate(a.start_date) - getValueOfDate(b.start_date));

    const lastTask = sortedItems.at(-1);

    const lastEnd = findEndDate(lastTask?.start_date, lastTask?.amount_of_days);

    const start_date = newFormData.start || findNextWorkDay(lastEnd);

    const maxDays = 300;
    const defaultDays = 14;

    const amount_of_days = newFormData.amount_of_days ? (newFormData.amount_of_days > maxDays ? maxDays : newFormData.amount_of_days) : defaultDays;

    const end_date = findEndDate(start_date, newFormData.amount_of_days);

    const finalFormData = {
      ...newFormData,
      customer: getCustomer(),
      project: getProject(),
      start_date,
      end_date,
    };

    return processAndSaveFormData(finalFormData);
  };

  return autocompleteMaintenancePlanning;
}
