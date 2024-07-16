import React from "react";
import { TAutocompleteFunction, TprocessAndSaveFormData } from "../useAutocomplete";
import useGetStoredPageData from "hooks/useGetStoredPageData";
import { departmentJobs } from "pages/ModulePage/components/NewDataModal/consts";
import { getNameValueFromObject } from "services/functions/helpers/getNameValueFromObject";
import { getIdValueFromObject } from "services/functions/helpers/getIdValueFromObject";
import { pageIds } from "consts/config/pages/pages";
import { obj } from "types/types";
import dayjs from "dayjs";

export default function useAutocompleteEmployees(
  processAndSaveFormData: TprocessAndSaveFormData,
  getTrainingInfo: (employeeId: string) => obj[],
  workingHours: number
) {
  const { getPageDocuments } = useGetStoredPageData();

  const autocompleteEmployees: TAutocompleteFunction = (newFormData, currentInputName) => {
    const departmentEntry = Object.entries(departmentJobs).find(([department, jobs]) => jobs.some((job) => job === getNameValueFromObject(newFormData.job)));
    const department = departmentEntry ? { _id: departmentEntry[0], name: departmentEntry[0] } : "";

    const currentEmployeeId = getIdValueFromObject(newFormData._id);

    const employeesTrainingsPageData = getPageDocuments({ pageId: pageIds.EmployeesTrainings });
    const savedCurrentEmployeeTrainings = employeesTrainingsPageData.find((row) => {
      const employee = getIdValueFromObject(row.employee);
      return employee === currentEmployeeId;
    });
    const savedReceivedTrainings = savedCurrentEmployeeTrainings?.recieved_trainings;

    const trainingsInfo = getTrainingInfo(currentEmployeeId);

    const received_trainings = trainingsInfo.map((row, index) => ({ ...savedReceivedTrainings?.[index], ...row }));

    const nationalityIsKKTC = getIdValueFromObject(newFormData.nationality) === "KKTC";

    const permit_required = nationalityIsKKTC ? false : newFormData.permit_required;
    const permit_start_date = nationalityIsKKTC ? undefined : newFormData.permit_start_date;
    const permit_end_date = nationalityIsKKTC ? undefined : newFormData.permit_end_date;

    let total_leave = newFormData.total_leave;
    if (currentInputName === "start_date") {
      const difference = dayjs().diff(dayjs(newFormData.start_date), "year");

      const conditions = [
        { threshold: 15, multiplier: 25 },
        { threshold: 10, multiplier: 22 },
        { threshold: 5, multiplier: 18 },
        { threshold: 0, multiplier: 14 },
      ];

      const condition = conditions.find((condition) => difference >= condition.threshold);
      total_leave = condition ? condition.multiplier * workingHours : 0;
    }

    const getRemainingLeave = (totalLeave: number, usedLeave: number) => {
      const difference = totalLeave - (usedLeave || 0);
      const differenceDays = (difference / workingHours).toFixed(1).replace(/\.?0+$/, "");
      const remaining_leave = `${differenceDays} gün (${difference} saat)`;
      return remaining_leave;
    };

    const annualLeavePageData = getPageDocuments({ pageId: pageIds.AnnualLeave });
    const currentEmployeeAnnualLeave = annualLeavePageData.filter((row) => getIdValueFromObject(row.employee) === currentEmployeeId);

    const fmiLeaveType = "FAZLA MESAİ İZNİ";

    const otherLeaves = currentEmployeeAnnualLeave.filter((row) => getNameValueFromObject(row.leave_type) !== fmiLeaveType);
    const otherLeavesTotal = otherLeaves.reduce((acc, curr) => acc + curr.leave_amount, 0);

    const remaining_leave = getRemainingLeave(total_leave, otherLeavesTotal);

    const ovetrimePageData = getPageDocuments({ pageId: pageIds.Overtime });
    const currentEmployeeOvertime = ovetrimePageData.filter(
      (row) => getIdValueFromObject(row.employee) === currentEmployeeId && row.manager_approval && row.department_head_approval
    );
    const fmi_total_leave = currentEmployeeOvertime.reduce((acc, curr) => acc + curr.overtime_amount, 0);

    const fmiLeaves = currentEmployeeAnnualLeave.filter((row) => getNameValueFromObject(row.leave_type) === fmiLeaveType);
    const fmiLeavesTotal = fmiLeaves.reduce((acc, curr) => acc + curr.leave_amount, 0);

    const fmi_remaining_leave = getRemainingLeave(fmi_total_leave, fmiLeavesTotal);

    const dismissal_date = newFormData.status === "passive" ? newFormData.dismissal_date : undefined;

    const finalFormData = {
      ...newFormData,
      department,
      received_trainings,
      permit_required,
      permit_start_date,
      permit_end_date,
      total_leave,
      remaining_leave,
      fmi_remaining_leave,
      dismissal_date,
    };

    return processAndSaveFormData(finalFormData);
  };
  return autocompleteEmployees;
}
