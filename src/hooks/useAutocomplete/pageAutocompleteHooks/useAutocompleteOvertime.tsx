import React from "react";
import { TAutocompleteFunction, TprocessAndSaveFormData, TshouldPasteFromStore } from "../useAutocomplete";
import dayjs from "dayjs";
import useGetStoredPageData from "hooks/useGetStoredPageData";
import { pageIds } from "consts/config/pages/pages";
import { getIdValueFromObject } from "services/functions/helpers/getIdValueFromObject";

export default function useAutocompleteOvertime(processAndSaveFormData: TprocessAndSaveFormData, shouldPasteFromStore: TshouldPasteFromStore) {
  const { getPageDocument } = useGetStoredPageData();
  const autocompleteOvertime: TAutocompleteFunction = (newFormData, currentInputName) => {
    const getProject = () => {
      let project = newFormData.project;
      if (!project && shouldPasteFromStore("project")) {
        project = getPageDocument({ pageId: pageIds.Projects, documentId: getIdValueFromObject(newFormData.unit?.project) });
      }
      return project;
    };

    const start_hour = newFormData.start_time ? dayjs(newFormData.start_time) : undefined;
    const end_hour = newFormData.end_time ? dayjs(newFormData.end_time) : undefined;

    let overtime_amount = 0;

    if (start_hour && end_hour) {
      const minuteDifference =
        end_hour.valueOf() <= start_hour.valueOf() ? end_hour.add(1, "day").diff(start_hour, "minute") : end_hour.diff(start_hour, "minute");

      overtime_amount = minuteDifference / 60;
    }

    const start_time = currentInputName === "overtime" ? undefined : newFormData.start_time;
    const end_time = currentInputName === "overtime" ? undefined : newFormData.end_time;

    const finalFormData = {
      ...newFormData,
      project: getProject(),
      start_time,
      end_time,
      overtime_amount,
    };

    return processAndSaveFormData(finalFormData);
  };
  return autocompleteOvertime;
}
