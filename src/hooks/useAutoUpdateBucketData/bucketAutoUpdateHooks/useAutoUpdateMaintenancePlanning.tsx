import React, { useContext } from "react";
import { TAutoUpdateFunction } from "../useAutoUpdateBucketData";
import useGetStoredPageData from "hooks/useGetStoredPageData";
import { useNewDataModalStore } from "pages/ModulePage/components/NewDataModal/newDataModalStore";
import { getIdValueFromObject } from "services/functions/helpers/getIdValueFromObject";
import { getValueOfDate } from "pages/ModulePage/components/pageTypes/GanttChart/helpers/getValueOfDate";
import { findEndDate } from "pages/ModulePage/components/pageTypes/GanttChart/helpers/findEndDate";
import { getUpdatedTasks } from "pages/ModulePage/components/pageTypes/GanttChart/helpers/getUpdatedTasks";
import useDataMethods from "pages/ModulePage/hooks/useDataMethods";

export default function useAutoUpdateMaintenancePlanning() {
  const { handleCreateNewData, handleUpdateData, handleDeleteData, handleMultipleUpdate } = useDataMethods();

  const { getPageDocuments, getPageDocument } = useGetStoredPageData();

  const { formData } = useNewDataModalStore();

  const autoUpdateUpdateMaintenancePlanning: TAutoUpdateFunction = (isUpdate, idsToDelete) => {
    const pageData = getPageDocuments({ pageId: "current" });

    if (idsToDelete) {
      const dependentTask = pageData.find((row) => row.dependencies?.[0] === idsToDelete[0]);

      handleDeleteData({
        dataIds: idsToDelete,
        callback: dependentTask
          ? (newPagesData) => {
              handleUpdateData({ document: { ...dependentTask, dependencies: [] }, pagesData: newPagesData });
            }
          : undefined,
      });
      return;
    }

    const oldTask = getPageDocument({ pageId: "current", documentId: formData._id });
    const startHasChanged = formData.start_date !== oldTask?.start_date;

    const finalDocument = { ...formData, dependencies: startHasChanged && formData.dependencies ? [] : formData.dependencies };

    const tasksWithoutCurrent = pageData.filter((row) => row._id !== formData._id);

    const currentTeamTasks = tasksWithoutCurrent.filter((row) => getIdValueFromObject(row.employee) === getIdValueFromObject(formData.employee));

    const sortedTasks = currentTeamTasks.sort((a, b) => getValueOfDate(a.start_date) - getValueOfDate(b.start_date));

    const tasksForUpdate = sortedTasks.filter((row) => {
      const endDate = findEndDate(row.start_date, row.amount_of_days);
      return getValueOfDate(endDate) >= getValueOfDate(formData.start_date);
    });

    const updatedTasks = getUpdatedTasks(tasksForUpdate, formData);

    const saveFunction = isUpdate ? handleUpdateData : handleCreateNewData;

    saveFunction({
      document: finalDocument,
      callback: (newPagesData) => {
        handleMultipleUpdate({ documents: updatedTasks, pagesData: newPagesData });
      },
    });
  };

  return autoUpdateUpdateMaintenancePlanning;
}
