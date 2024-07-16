import React from "react";
import dayjs from "dayjs";
import { pageIds } from "consts/config/pages/pages";
import { obj } from "types/types";
import { usePageStore } from "store/pageStore";
import { useNewDataModalStore } from "pages/ModulePage/components/NewDataModal/newDataModalStore";
import useGetStoredPageData from "hooks/useGetStoredPageData";
import useAutocompleteCustomers from "./pageAutocompleteHooks/useAutocompleteCustomers";
import useAutocompleteProducts from "./pageAutocompleteHooks/useAutocompleteProducts";
import useAutocompleteProjects from "./pageAutocompleteHooks/useAutocompleteProjects";
import useAutocompleteOffers from "./pageAutocompleteHooks/useAutocompleteOffers";
import useAutocompleteContracts from "./pageAutocompleteHooks/useAutocompleteContracts";
import { isoDateTimeFormat } from "services/functions/helpers/dateHelpers";
import useAutocompleteFieldTeams from "./pageAutocompleteHooks/useAutocompleteFieldTeams";
import useAutocompleteProgressPayments from "./pageAutocompleteHooks/useAutocompleteProgressPayments";
import useAutocompleteMonthlyProgressPayments from "./pageAutocompleteHooks/useAutocompleteMonthlyProgressPayments";
import useAutocompleteLocations from "./pageAutocompleteHooks/useAutocompleteLocations";
import useAutocompleteEmployeesTrainings from "./pageAutocompleteHooks/useAutocompleteEmployeesTrainings";
import useAutocompleteSafetyWalk from "./pageAutocompleteHooks/useAutocompleteSafetyWalk";
import useAutocompleteEmployees from "./pageAutocompleteHooks/useAutocompleteEmployees";
import useAutocompleteAnnualLeave from "./pageAutocompleteHooks/useAutocompleteAnnualLeave";
import useAutocompleteOvertime from "./pageAutocompleteHooks/useAutocompleteOvertime";
import useGetProperties from "hooks/useGetProperties";
import useAutocompleteOrders from "./pageAutocompleteHooks/useAutocompleteOrders";
import useAutocompleteAssemblyProjects from "./pageAutocompleteHooks/useAutocompleteAssemblyProjects";
import useAutocompleteUnits from "./pageAutocompleteHooks/useAutocompleteUnits";
import useAutocompleteMaintenanceContracts from "./pageAutocompleteHooks/useAutocompleteMaintenanceContracts";
import useAutocompleteMaintenanceUnits from "./pageAutocompleteHooks/useAutocompleteMaintenancUnits";
import useAutocompleteMaintenanceOffers from "./pageAutocompleteHooks/useAutocompleteMaintenanceOffers";
import useAutocompleteAssemblyPlan from "./pageAutocompleteHooks/useAutocompleteAssemblyPlan";
import useAutocompleteMaintenancePlanning from "./pageAutocompleteHooks/useAutocompleteMaintenancePlanning";

export type TAutocompleteFunction = (newFormData: obj, currentInputName?: string, currentInputArrayIndex?: number) => obj;

export type TprocessAndSaveFormData = (finalFormData: obj) => obj;

export type TshouldPasteFromStore = (propertyTitle: string, internal?: { parentTitle: string; arrayIndex: number; formDataId: string }) => boolean;

export default function useAutocomplete(params: { pageTitle: string; dontSave?: boolean; isOnUpdate?: boolean; callComponent?: string }) {
  const { pageTitle, dontSave, isOnUpdate, callComponent } = params;

  const pageStore = usePageStore();

  const { setFormData } = useNewDataModalStore();

  const { getPageDocuments, getPageDocument } = useGetStoredPageData();

  const { getFieldFeatures, getItemInternalFieldFeature } = useGetProperties();

  function processAndSaveFormData(finalFormData: obj) {
    if (!dontSave) setFormData(finalFormData);
    return finalFormData;
  }

  const workingHours = 9;

  const getTrainingInfo = (currentEmployeeId: string) => {
    const assignedTrainingsPageData = getPageDocuments({ pageId: pageIds.AssignedTrainings });
    const currentEmployeeTrainings = assignedTrainingsPageData.filter((row) => {
      const employees = row.employees.map((obj: obj) => obj.employee);
      return employees.includes(currentEmployeeId);
    });

    const trainingsInfo: obj[] = currentEmployeeTrainings.map((row) => {
      const training = row.training;
      const validatyPeriod = training.validity_period ?? 0;
      const end_date = row.date ? dayjs(row.date).add(validatyPeriod, "month").format(isoDateTimeFormat) : undefined;
      return { training_name: training.name, start_date: row.date, end_date };
    });
    return trainingsInfo;
  };

  const shouldPasteFromStore: TshouldPasteFromStore = (propertyTitle, internal) => {
    let fieldFeature = internal ? getItemInternalFieldFeature(pageTitle, internal.parentTitle, propertyTitle) : getFieldFeatures(pageTitle)?.[propertyTitle];
    const isReadOnly = fieldFeature?.read_only;
    const isDisableEditing = fieldFeature?.disable_editing;

    let isLengthBiggerThanIndex = true;
    if (internal) {
      const savedDocument = getPageDocument({ pageId: "current", documentId: internal.formDataId });
      isLengthBiggerThanIndex = savedDocument?.[internal.parentTitle]?.length > internal.arrayIndex;
    }

    const isDisabeEditingActive = isDisableEditing && isOnUpdate && isLengthBiggerThanIndex;

    return callComponent !== "newDataModal" || isReadOnly || isDisabeEditingActive;
  };

  const returnFunction: { [key: string]: TAutocompleteFunction } = {
    "Customers": useAutocompleteCustomers(processAndSaveFormData),
    "Products": useAutocompleteProducts(processAndSaveFormData),
    "Projects": useAutocompleteProjects(processAndSaveFormData),
    "Offers": useAutocompleteOffers(processAndSaveFormData, shouldPasteFromStore),
    "Contracts": useAutocompleteContracts(processAndSaveFormData, shouldPasteFromStore),
    "Orders": useAutocompleteOrders(processAndSaveFormData),
    "Units": useAutocompleteUnits(processAndSaveFormData),
    "AssemblyProjects": useAutocompleteAssemblyProjects(processAndSaveFormData),
    "AssemblyPlan": useAutocompleteAssemblyPlan(processAndSaveFormData, shouldPasteFromStore),
    "FieldTeams": useAutocompleteFieldTeams(processAndSaveFormData),
    "ProgressPayments": useAutocompleteProgressPayments(processAndSaveFormData),
    "MonthlyProgressPayments": useAutocompleteMonthlyProgressPayments(processAndSaveFormData, shouldPasteFromStore),
    "Locations": useAutocompleteLocations(processAndSaveFormData),
    "EmployeesTrainings": useAutocompleteEmployeesTrainings(processAndSaveFormData, getTrainingInfo),
    "SafetyWalk": useAutocompleteSafetyWalk(processAndSaveFormData),
    "Employees": useAutocompleteEmployees(processAndSaveFormData, getTrainingInfo, workingHours),
    "AnnualLeave": useAutocompleteAnnualLeave(processAndSaveFormData, workingHours),
    "Overtime": useAutocompleteOvertime(processAndSaveFormData, shouldPasteFromStore),
    "MaintenanceOffers": useAutocompleteMaintenanceOffers(processAndSaveFormData, shouldPasteFromStore),
    "MaintenanceContracts": useAutocompleteMaintenanceContracts(processAndSaveFormData, shouldPasteFromStore),
    "MaintenanceUnits": useAutocompleteMaintenanceUnits(processAndSaveFormData),
    "MaintenancePlanning": useAutocompleteMaintenancePlanning(processAndSaveFormData, shouldPasteFromStore),
    "All": (newFormData) => processAndSaveFormData(newFormData),
  };

  if (returnFunction.hasOwnProperty(pageTitle)) {
    return returnFunction[pageTitle];
  } else {
    return returnFunction["All"];
  }
}
