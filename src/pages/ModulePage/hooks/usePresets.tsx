import useGetStoredPageData from "hooks/useGetStoredPageData";
import React from "react";
import { usePageStore } from "store/pageStore";
import { useUserStore } from "store/userStore";
import { obj } from "types/types";
import { ganttChartQueueFactor } from "../consts";

interface PresetValues {
  [key: string]: (requiredData?: obj) => obj;
}

export default function usePresets() {
  const userStore = useUserStore();
  const pageStore = usePageStore();

  const { getPageDocuments } = useGetStoredPageData();

  const bucketId = pageStore.page._id;

  const currentPageData = getPageDocuments({ pageId: bucketId });

  const presetValues: PresetValues = {
    "Offers": () => {
      const reference_number = `KM${new Date().getFullYear() - 2000}${userStore.name[0]}${userStore.surname[0]}/XXXXXX`;
      return { reference_number, standby_time: "0 gün" };
    },
    "AssemblyPlan": (requiredData) => {
      const { item } = requiredData || {};
      return { field_team: item };
    },
    "ProgressPayments": () => {
      return { high_floor: 0 };
    },
    "Employees": () => {
      return { remaining_leave: "14 gün (126 saat)", total_leave: 126, fmi_remaining_leave: "0 gün (0 saat)", fmi_total_leave: 0 };
    },
    "Projects": () => {
      const year = `${new Date().getFullYear()}`;
      const thisYearProjects = currentPageData.filter((project) => project.serial_number.toString().slice(0, 4) === year);
      const numberOfProjectInThisYear =
        thisYearProjects.reduce(
          (max, obj) => (Number(obj.serial_number.toString().slice(4, 7)) > max ? Number(obj.serial_number.toString().slice(4, 7)) : max),
          0
        ) + 1;
      const numberOfProjectTotal =
        currentPageData.reduce(
          (max, obj) => (Number(obj.serial_number.toString().slice(7, 11)) > max ? Number(obj.serial_number.toString().slice(7, 11)) : max),
          0
        ) + 1;
      return { serial_number: Number(year + numberOfProjectInThisYear.toString().padStart(3, "0") + numberOfProjectTotal.toString().padStart(4, "0")) };
    },
    "MaintenanceOffers": (requiredData) => {
      const yearNumber = `${new Date().getFullYear() - 2000}`;
      const thisYearOffers = currentPageData.filter((offer) => offer.reference_number?.toString().slice(2, 4) === yearNumber);
      const totalOffers = currentPageData.length;
      const reference_number =
        `KM${yearNumber}${userStore.name[0]}${userStore.surname[0]}/BT` +
        String(thisYearOffers.length + 1).padStart(4, "0") +
        String(totalOffers + 1).padStart(3, "0");
      return { reference_number };
    },
    "MaintenancePlanning": (requiredData) => {
      const { item } = requiredData || {};
      return { employee: item };
    },
  };

  const getPresets = (requiredData?: obj) => presetValues[pageStore.page.title]?.(requiredData) ?? {};

  return getPresets;
}
