import React from "react";
import { TAutoUpdateFunction } from "../useAutoUpdateBucketData";
import useGetStoredPageData from "hooks/useGetStoredPageData";
import { useNewDataModalStore } from "pages/ModulePage/components/NewDataModal/newDataModalStore";
import { pageIds } from "consts/config/pages/pages";
import { getIdValueFromObject } from "services/functions/helpers/getIdValueFromObject";
import useDataMethods from "pages/ModulePage/hooks/useDataMethods";

export default function useAutoUpdateAssignedTrainings() {
  const { handleCreateNewData, handleMultipleCreate, handleUpdateData, handleDeleteData } = useDataMethods();

  const { formData } = useNewDataModalStore();

  const { getPageDocuments } = useGetStoredPageData();

  const autoUpdateAssignedTrainings: TAutoUpdateFunction = (isUpdate, idsToDelete) => {
    if (idsToDelete) {
      handleDeleteData({ dataIds: idsToDelete });
    } else {
      const saveFunction = isUpdate ? handleUpdateData : handleCreateNewData;

      const employeesTrainingsData = getPageDocuments({ pageId: pageIds.EmployeesTrainings });
      const existEmployees = employeesTrainingsData.map((row) => getIdValueFromObject(row.employee));

      const newEmployees = formData.employees?.filter((employeeObj: any) => {
        const employee = employeeObj.employee;
        const employeeId = getIdValueFromObject(employee);
        return !existEmployees.includes(employeeId);
      });

      saveFunction({
        document: formData,
        callback: newEmployees?.length
          ? (newPagesData) => {
              handleMultipleCreate({
                documents: newEmployees,
                pagesData: newPagesData,
                bucket: pageIds.EmployeesTrainings,
              });
            }
          : undefined,
      });
    }
  };
  return autoUpdateAssignedTrainings;
}
