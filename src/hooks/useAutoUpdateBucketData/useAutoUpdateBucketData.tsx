import React from "react";
import { usePageStore } from "store/pageStore";
import { useModulePageStore } from "pages/ModulePage/modulePageStore";
import { useNewDataModalStore } from "pages/ModulePage/components/NewDataModal/newDataModalStore";
import useAutoUpdateProjects from "./bucketAutoUpdateHooks/useAutoUpdateProjects";
import useAutoUpdateOffers from "./bucketAutoUpdateHooks/useAutoUpdateOffers";
import useAutoUpdateContracts from "./bucketAutoUpdateHooks/useAutoUpdateContracts";
import useAutoUpdateAssignedTrainings from "./bucketAutoUpdateHooks/useAutoUpdateAssignedTrainings";
import useAutoUpdateAssemblyPlan from "./bucketAutoUpdateHooks/useAutoUpdateAssemblyPlan";
import useAutoUpdateMaintenancePlanning from "./bucketAutoUpdateHooks/useAutoUpdateMaintenancePlanning";
import useDataMethods from "pages/ModulePage/hooks/useDataMethods";

type TReturnFunctionObject = { [key: string]: TReturnFunction };

type TReturnFunction = (params: { idsToDelete?: string[]; hasWarning?: boolean }) => void;

export type TAutoUpdateFunction = (isUpdate: boolean, idsToDelete?: string[], hasWarning?: boolean) => void;

export default function useAutoUpdateBucketData(): TReturnFunction {
  const pageStore = usePageStore();

  const { rowForUpdate } = useModulePageStore();

  const { handleCreateNewData, handleUpdateData, handleDeleteData } = useDataMethods();

  const { formData } = useNewDataModalStore();

  const isUpdate = !!Object.keys(rowForUpdate).length;

  const autoUpdateProjects = useAutoUpdateProjects();
  const autoUpdateOffers = useAutoUpdateOffers();
  const autoUpdateContracts = useAutoUpdateContracts();
  const autoUpdateAssemblyPlan = useAutoUpdateAssemblyPlan();
  const autoUpdateAssignedTrainings = useAutoUpdateAssignedTrainings();
  const autoUpdateMaintenancePlanning = useAutoUpdateMaintenancePlanning();

  const returnFunctions: TReturnFunctionObject = {
    "Projects": (params) => autoUpdateProjects(isUpdate, params.idsToDelete),
    "Offers": (params) => autoUpdateOffers(isUpdate, params.idsToDelete),
    "Contracts": (params) => autoUpdateContracts(isUpdate, params.idsToDelete),
    "AssemblyPlan": (params) => autoUpdateAssemblyPlan(isUpdate, params.idsToDelete, params.hasWarning),
    "AssignedTrainings": (params) => autoUpdateAssignedTrainings(isUpdate, params.idsToDelete),
    "MaintenancePlanning": (params) => autoUpdateMaintenancePlanning(isUpdate, params.idsToDelete),
  };

  return (params) => {
    const currentPageTitle = pageStore.page.title;
    const returnFunction = returnFunctions[currentPageTitle];

    if (returnFunction) {
      returnFunction({ idsToDelete: params.idsToDelete, hasWarning: params.hasWarning });
      return;
    }

    if (params.idsToDelete) {
      handleDeleteData({ dataIds: params.idsToDelete });
      return;
    }

    const saveFunction = isUpdate ? handleUpdateData : handleCreateNewData;
    saveFunction({ document: formData });
  };
}
