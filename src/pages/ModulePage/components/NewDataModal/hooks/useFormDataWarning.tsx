import React from "react";
import { useNewDataModalStore } from "../newDataModalStore";
import { usePageStore } from "store/pageStore";
import useGetStoredPageData from "hooks/useGetStoredPageData";
import { getOverlapTasks } from "../../pageTypes/GanttChart/helpers/getOverlapTasks";

type TCheckFunction = () => boolean;

export default function useFormDataWarning() {
  const pageStore = usePageStore();
  const { formData } = useNewDataModalStore();

  const { getPageDocuments } = useGetStoredPageData();

  const checkFunctions: { [page: string]: TCheckFunction } = {
    "Customers": () => {
      const pageData = getPageDocuments({ pageId: "current" });
      const isNameDuplicate = pageData.filter((row) => row._id !== formData._id).some((row) => row.name === formData.name);

      return isNameDuplicate;
    },
    "AssemblyPlan": () => {
      const pageData = getPageDocuments({ pageId: "current" });

      const overlapTasks = getOverlapTasks(pageData, formData, "field_team");

      return !!overlapTasks.length;
    },
    "MaintenancePlanning": () => {
      const pageData = getPageDocuments({ pageId: "current" });

      const overlapTasks = getOverlapTasks(pageData, formData, "employee");

      return !!overlapTasks.length;
    },
  };

  return checkFunctions[pageStore.page.title] || (() => false);
}
