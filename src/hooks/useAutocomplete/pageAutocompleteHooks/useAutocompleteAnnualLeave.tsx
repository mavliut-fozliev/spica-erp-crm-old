import React from "react";
import { TAutocompleteFunction, TprocessAndSaveFormData } from "../useAutocomplete";
import { getNameValueFromObject } from "services/functions/helpers/getNameValueFromObject";
import dayjs from "dayjs";
import { holidays } from "consts/holidays";
import { monthDayFormat, yearFormat } from "services/functions/helpers/dateHelpers";
import { getFeastHolidays } from "services/functions/getFeastHolidays/getFeastHolidays";
import { getIdValueFromObject } from "services/functions/helpers/getIdValueFromObject";
import { pageIds } from "consts/config/pages/pages";
import useGetStoredPageData from "hooks/useGetStoredPageData";

export default function useAutocompleteAnnualLeave(processAndSaveFormData: TprocessAndSaveFormData, workingHours: number) {
  const { getPageDocuments, getPageDocument } = useGetStoredPageData();

  const autocompleteAnnualLeave: TAutocompleteFunction = (newFormData, currentInputName) => {
    let finalFormData = {
      ...newFormData,
    };

    const leaveType = getNameValueFromObject(newFormData.leave_type);

    let leave_amount = 0;

    if (leaveType === "SAATLİK İZİN") {
      const start_time = newFormData.start_time;
      const end_time = currentInputName === "start_time" ? undefined : newFormData.end_time;

      if (start_time && end_time) {
        const start = dayjs(start_time).hour();
        const end = dayjs(end_time).hour();
        const hasLunchBreak = start < 12 && end > 12;
        leave_amount = end - start - (hasLunchBreak ? 1 : 0);
      }

      const leave_amount_show = `${leave_amount} saat`;

      finalFormData = {
        ...finalFormData,
        end_time,
        leave_amount: leave_amount > 0 ? leave_amount : 0,
        end_date: newFormData.start_date,
        leave_amount_show,
      };
    } else {
      const start_date = newFormData.start_date;

      const end_date = currentInputName === "start_date" ? undefined : newFormData.end_date;

      if (start_date && end_date) {
        const difference = dayjs(end_date).diff(dayjs(start_date), "day");

        let leaveDayAmount = 0;
        let currentDay = dayjs(start_date);

        for (let i = 0; i < difference + 1; i++) {
          const currentYear = currentDay.format(yearFormat);
          const holidaysArray = [...holidays, ...getFeastHolidays(Number(currentYear))];

          const currentDate = currentDay.format(monthDayFormat);
          const isHoliday = holidaysArray.includes(currentDate);
          const isSunday = currentDay.day() === 0;

          if (!isHoliday && !isSunday) {
            leaveDayAmount += 1;
          }
          currentDay = currentDay.add(1, "day");
        }

        leave_amount = leaveDayAmount * workingHours - (leaveType === "SAĞLIK İZNİ" ? workingHours * 2 : 0);
        leave_amount = leave_amount < 0 ? 0 : leave_amount;
      }

      const leave_amount_show = `${leave_amount / workingHours} gün (${leave_amount} saat)`;

      finalFormData = {
        ...finalFormData,
        end_date,
        start_time: newFormData.start_date,
        end_time: newFormData.start_date,
        leave_amount,
        leave_amount_show,
      };
    }

    const currentEmployeeId = getIdValueFromObject(newFormData.employee);

    const currentEmployee = getPageDocument({ pageId: pageIds.Employees, documentId: currentEmployeeId });
    const total_leave = currentEmployee?.total_leave;

    const ovetrimePageData = getPageDocuments({ pageId: pageIds.Overtime });
    const currentEmployeeOvertimes = ovetrimePageData.filter((row) => getIdValueFromObject(row.employee) === currentEmployeeId);
    const totalOvertimeAmount = currentEmployeeOvertimes.reduce((acc, curr) => acc + curr.overtime_amount, 0);

    const fmiLeaveType = "FAZLA MESAİ İZNİ";

    const totalLeave = leaveType === fmiLeaveType ? totalOvertimeAmount : total_leave;

    const annualLeavePageData = getPageDocuments({ pageId: pageIds.AnnualLeave });
    const currentEmployeeAnnualLeave = annualLeavePageData.filter(
      (row) => getIdValueFromObject(row.employee) === currentEmployeeId && row._id !== newFormData._id
    );

    const currentTypeLeaves = currentEmployeeAnnualLeave.filter((row) => {
      if (leaveType === fmiLeaveType) {
        return getNameValueFromObject(row.leave_type) === fmiLeaveType;
      } else {
        return getNameValueFromObject(row.leave_type) !== fmiLeaveType;
      }
    });

    const totalLeaveAmount = currentTypeLeaves.reduce((acc, curr) => acc + curr.leave_amount, 0) + leave_amount;

    const remainingLeave = totalLeave - totalLeaveAmount;
    const remaining_leave_amount = `${(remainingLeave / workingHours).toFixed(1)} gün (${remainingLeave} saat)`;

    finalFormData = {
      ...finalFormData,
      remaining_leave_amount,
    };

    return processAndSaveFormData(finalFormData);
  };
  return autocompleteAnnualLeave;
}
