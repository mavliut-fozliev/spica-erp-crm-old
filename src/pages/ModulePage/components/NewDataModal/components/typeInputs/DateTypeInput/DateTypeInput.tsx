import React from "react";
import DateTimePick from "../../../../../../../components/inputs/DateTimePick/DateTimePick";
import { TBucketProperty, obj } from "../../../../../../../types/types";
import { useNewDataModalStore } from "../../../newDataModalStore";
import { usePageStore } from "../../../../../../../store/pageStore";
import dayjs, { Dayjs } from "dayjs";
import { holidays } from "../../../../../../../consts/holidays";
import { getFeastHolidays } from "../../../../../../../services/functions/getFeastHolidays/getFeastHolidays";
import { getIdValueFromObject } from "../../../../../../../services/functions/helpers/getIdValueFromObject";
import { getValueOfDate } from "../../../../pageTypes/GanttChart/helpers/getValueOfDate";
import useGetProperties from "hooks/useGetProperties";
import useGetStoredPageData from "hooks/useGetStoredPageData";
import { isoDateFormat, monthDayFormat, yearFormat } from "services/functions/helpers/dateHelpers";
import { findEndDate } from "pages/ModulePage/components/pageTypes/GanttChart/helpers/findEndDate";

type TitemsValue = {
  [pageTitle: string]: { [propertyTitle: string]: (date: Dayjs) => boolean };
};

export default function DateTypeInput({
  property,
  parent,
  arrayIndex,
  field_features_obj,
  handleInputChange,
  requiredProperties,
  rowForUpdate,
}: {
  property: TBucketProperty;
  parent: string | undefined;
  arrayIndex: number | undefined;
  field_features_obj: { [key: string]: any };
  handleInputChange: (e: any, parent?: string, arrayIndex?: number) => void;
  requiredProperties: string[];
  rowForUpdate: { [key: string]: any };
}) {
  const pageStore = usePageStore();
  const { formData, errors } = useNewDataModalStore();

  const { getItemInternalFieldFeature } = useGetProperties();

  const { getPageDocuments, getPageDocument } = useGetStoredPageData();

  if (formData.type === "project") {
    return <div></div>;
  }

  const isReadOnly = !parent
    ? field_features_obj[property.title!]?.read_only
    : getItemInternalFieldFeature(pageStore.page.title, parent, property.title!)?.read_only;

  const savedDocument = getPageDocument({ pageId: "current", documentId: rowForUpdate._id });
  const isLengthBiggerThanIndex = arrayIndex != undefined && parent ? savedDocument?.[parent]?.length > arrayIndex : true;

  const isDisableEditing =
    Object.keys(rowForUpdate).length &&
    (!parent
      ? field_features_obj[property.title!]?.disable_editing
      : getItemInternalFieldFeature(pageStore.page.title, parent, property.title!)?.disable_editing);

  const readOnly = !!(isReadOnly || (isLengthBiggerThanIndex && isDisableEditing));

  const isSunday = (date: Dayjs) => (date ? date.day() === 0 : false);

  const isHoliday = (date: Dayjs) => (date ? [...holidays, ...getFeastHolidays(Number(date.format(yearFormat)))].includes(date.format(monthDayFormat)) : false);

  const isTimeDisabled: TitemsValue = {
    "AnnualLeave": {
      "start_time": (date: Dayjs) => {
        const nonWorkingHours = date.hour() < 8 || date.hour() > 17;
        const lunchBreak = date.hour() === 12;
        return nonWorkingHours || lunchBreak;
      },
      "end_time": (date: Dayjs) => {
        const smallerThanStart = date.hour() <= (formData.start_time ? dayjs(formData.start_time).hour() : 0);
        const nonWorkingHours = date.hour() < 9 || date.hour() > 18;
        return nonWorkingHours || smallerThanStart;
      },
    },
    "Overtime": {
      "start_time": (date: Dayjs) => {
        const hour = date.hour();
        const overtimeDate = dayjs(formData["overtime"]);

        return isHoliday(overtimeDate) || isSunday(overtimeDate) ? false : hour > 7 && hour < 18;
      },
      "end_time": (date: Dayjs) => {
        const dateToChoose = date.hour();
        const overtimeDate = dayjs(formData["overtime"]);
        const start_time = dayjs(formData["start_time"]).hour();

        const isBeforeStartTime = dateToChoose <= start_time;
        const isWorkStart = dateToChoose > 8;
        const isSpecialDay = isHoliday(overtimeDate) || isSunday(overtimeDate);

        const disableTime = isSpecialDay ? false : start_time < 8 ? isBeforeStartTime || isWorkStart : isBeforeStartTime && isWorkStart;

        return disableTime;
      },
    },
    skip: {
      skip: (date: Dayjs) => false,
    },
  };

  const isDateDisabled: TitemsValue = {
    "AssemblyPlan": {
      "start_date": (date: Dayjs) => {
        return isSunday(date) || isHoliday(date);
      },
    },
    "AnnualLeave": {
      "start_date": (date: Dayjs) => {
        return isSunday(date) || isHoliday(date);
      },
      "end_date": (date: Dayjs) => {
        const smallerThanStart = date.valueOf() < dayjs(formData.start_date?.slice(0, 10)).valueOf();
        return isSunday(date) || isHoliday(date) || smallerThanStart;
      },
    },
    "MaintenancePlanning": {
      "start_date": (date: Dayjs) => {
        return isSunday(date) || isHoliday(date);
      },
    },
    skip: {
      skip: (date: Dayjs) => false,
    },
  };

  const colorCalendar = () => {
    setTimeout(() => {
      const pageTitle = pageStore.page.title;
      if (pageTitle === "AssemblyPlan" || pageTitle === "MaintenancePlanning") {
        const teamTitle = pageTitle === "AssemblyPlan" ? "field_team" : "employee";

        const currentTeamTasks = getPageDocuments({ pageId: "current" }).filter(
          (row) => getIdValueFromObject(row[teamTitle]) === getIdValueFromObject(formData[teamTitle]) && row._id !== formData._id
        );

        const busyDates: string[] = [];

        currentTeamTasks.forEach((task) => {
          busyDates.push(task.start_date);

          let lastDay: string = task.start_date;

          for (let i = 0; i < 300; i++) {
            const nextDay = getValueOfDate(lastDay, 1);
            const endDate = findEndDate(task.start_date, task.amount_of_days);
            const endDateValue = getValueOfDate(endDate);

            if (nextDay >= endDateValue) break;

            const nextDayString = dayjs(nextDay).format(isoDateFormat);
            busyDates.push(nextDayString);

            lastDay = nextDayString;
          }

          const endDate = findEndDate(task.start_date, task.amount_of_days);
          busyDates.push(endDate);
        });

        const busyDatesElements = busyDates.map((date) => document.querySelector(`[data-timestamp="${getValueOfDate(date)}"`));

        busyDatesElements.flat().forEach((date) => date?.setAttribute("style", "background: rgb(160, 160, 160); color: #fff"));
      }

      const sundays = document.querySelectorAll('[aria-colindex="7"]');
      sundays.forEach((sunday) => {
        const isCalendarElement = sunday.classList.contains("MuiPickersDay-root");
        if (isCalendarElement) {
          sunday.setAttribute("style", "background: rgb(230, 83, 60); color: #fff");
        }
      });

      const feastHolidays = Array.from({ length: 100 }, (_, index) => getFeastHolidays(2000 + index).map((elem) => dayjs(`${2000 + index}-${elem}`).valueOf()))
        .flat()
        .map((elem) => document.querySelector(`[data-timestamp="${elem}"`));

      const officialHolidays = holidays.map((holiday) =>
        Array.from({ length: 100 }, (_, index) => document.querySelector(`[data-timestamp="${dayjs(holiday).add(index, "year").valueOf()}"`))
      );

      const holidaysForEveryYear = [...officialHolidays, ...feastHolidays];

      holidaysForEveryYear.flat().forEach((holiday) => holiday?.setAttribute("style", "background: rgb(245, 184, 73); color: #fff"));
    }, 100);
  };

  const getValue = () => {
    if (parent) {
      if (!formData[parent]) return null;

      if (arrayIndex !== undefined) {
        if (!formData[parent][arrayIndex]) return null;
        return formData[parent][arrayIndex][property.title!] ?? null;
      }
      return formData[parent][property.title!] ?? null;
    }

    if (arrayIndex !== undefined) {
      return formData[property.title!][arrayIndex] ?? null;
    }

    return formData[property.title!] ?? null;
  };

  const hideElement = () => {
    const isPermitRequired = property.title?.includes("permit") && !formData.permit_required;
    const isPassive = property.title?.includes("dismissal") && formData.status !== "passive";

    const pageIsAnnualLeave = pageStore.page.title === "AnnualLeave";
    const notLeaveType = !getIdValueFromObject(formData.leave_type);
    const isEndDate = getIdValueFromObject(formData.leave_type) === "SAATLİK İZİN" && property.title === "end_date";
    const isStartDaate = getIdValueFromObject(formData.leave_type) !== "SAATLİK İZİN" && (property.title === "start_time" || property.title === "end_time");

    const isHourlyLeave = pageIsAnnualLeave && (notLeaveType || isEndDate || isStartDaate);

    return isPermitRequired || isPassive || isHourlyLeave;
  };

  const minuteStep: { [key: string]: number } = {
    "AnnualLeave": 60,
    "Overtime": 30,
  };

  return (
    <DateTimePick
      name={property.title!}
      label={getIdValueFromObject(formData.leave_type) === "SAATLİK İZİN" && property.title === "start_date" ? "Tarih" : property.description!}
      value={getValue()}
      onChange={(e) => handleInputChange(e, parent, arrayIndex)}
      colorCalendar={colorCalendar}
      error={!parent && requiredProperties.includes(property.title!) && errors[property.title!]}
      timeOnly={
        !parent ? field_features_obj[property.title!]?.time_only : getItemInternalFieldFeature(pageStore.page.title, parent, property.title!)?.time_only
      }
      dateOnly={
        !parent ? field_features_obj[property.title!]?.date_only : getItemInternalFieldFeature(pageStore.page.title, parent, property.title!)?.date_only
      }
      readOnly={readOnly}
      hide={hideElement()}
      isTimeDisabled={(date: Dayjs) => (isTimeDisabled[pageStore.page.title]?.[property.title!] || isTimeDisabled.skip.skip)(date) || false}
      isDateDisabled={(date: Dayjs) => (isDateDisabled[pageStore.page.title]?.[property.title!] || isDateDisabled.skip.skip)(date) || false}
      minutesStep={minuteStep[pageStore.page.title]}
    />
  );
}
