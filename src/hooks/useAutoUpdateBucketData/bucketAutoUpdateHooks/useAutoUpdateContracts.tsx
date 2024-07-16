import useGetStoredPageData from "hooks/useGetStoredPageData";
import { useNewDataModalStore } from "pages/ModulePage/components/NewDataModal/newDataModalStore";
import React from "react";
import { TAutoUpdateFunction } from "../useAutoUpdateBucketData";
import { getIdValueFromObject } from "services/functions/helpers/getIdValueFromObject";
import { pageIds } from "consts/config/pages/pages";
import { TDocument } from "types/types";
import { findNextWorkDay } from "pages/ModulePage/components/pageTypes/GanttChart/helpers/findNextWorkDay";
import { getValueOfDate } from "pages/ModulePage/components/pageTypes/GanttChart/helpers/getValueOfDate";
import { findEndDate } from "pages/ModulePage/components/pageTypes/GanttChart/helpers/findEndDate";
import { TDataMethodCallback } from "pages/ModulePage/types";
import useDataMethods from "pages/ModulePage/hooks/useDataMethods";

export default function useAutoUpdateContracts() {
  const { handleMultipleCreate, handleDeleteData, handleCreateNewData, handleMultipleUpdate, handleUpdateData } = useDataMethods();

  const { getPageDocuments } = useGetStoredPageData();

  const { formData } = useNewDataModalStore();

  const autoUpdateContracts: TAutoUpdateFunction = (isUpdate, idsToDelete) => {
    if (idsToDelete) {
      handleDeleteData({ dataIds: idsToDelete });
    } else {
      const updateProgressPayments: TDataMethodCallback = (newPagesData, data) => {
        const { units } = data;

        const newProgressPayments = units?.map((unit: any) => ({
          unit: getIdValueFromObject(unit),
        }));
        handleMultipleCreate({
          documents: newProgressPayments,
          pagesData: newPagesData,
          bucket: pageIds.ProgressPayments,
        });
      };

      const updateFeildInspections: TDataMethodCallback = (newPagesData, data) => {
        const { units } = data;

        const newFeildInspections = units?.map((unit: any) => ({
          project: formData.project,
          unit: getIdValueFromObject(unit),
        }));
        handleMultipleCreate({
          documents: newFeildInspections,
          pagesData: newPagesData,
          bucket: pageIds.FieldInspections,
          callback: (newPagesData) => updateProgressPayments(newPagesData, { units }),
        });
      };

      const updateAssemblyPlan: TDataMethodCallback = (newPagesData, data) => {
        const { units } = data;

        const tasks = getPageDocuments({ pageId: pageIds.AssemblyPlan });

        const taskByTeams: { [teamId: string]: TDocument[] } = {};

        tasks.forEach((task) => {
          const teamId = getIdValueFromObject(task.field_team);
          if (!taskByTeams[teamId]) {
            taskByTeams[teamId] = [];
          }
          taskByTeams[teamId].push(task);
        });

        let teamLastTasks: { [teamId: string]: TDocument } = {};

        Object.entries(taskByTeams).forEach(([teamId, teamTasks]) => {
          const sortedTasks = teamTasks.sort((a, b) => getValueOfDate(a.start_date) - getValueOfDate(b.start_date));

          teamLastTasks[teamId] = sortedTasks.at(-1) || { start_date: 0 };
        });

        if (!teamLastTasks[0]) return;

        const requiredTeamLastTask = Object.entries(teamLastTasks).reduce((min, teamLastTask) => {
          return getValueOfDate(teamLastTask[1].start_date) < getValueOfDate(min[1].start_date) ? teamLastTask : min;
        }, teamLastTasks[0]);

        const requiredTeamId = requiredTeamLastTask[0];
        let lastTask = requiredTeamLastTask[1];

        const newTasks = units.map((unit: any) => {
          const lastEndDate = findEndDate(lastTask.start_date, lastTask.amount_of_days);
          const start_date = findNextWorkDay(lastEndDate);

          const newTask = {
            start_date,
            field_team: requiredTeamId,
            unit: getIdValueFromObject(unit),
            amount_of_days: 14,
            dependencies: [lastTask._id],
          };

          lastTask = newTask;
          return newTask;
        });

        handleMultipleCreate({
          documents: newTasks,
          pagesData: newPagesData,
          bucket: pageIds.AssemblyPlan,
          callback: (newPagesData) => updateFeildInspections(newPagesData, { units }),
        });
      };

      const updateAssemblyProjects: TDataMethodCallback = (newPagesData, data) => {
        const { units } = data;

        const newAssemblyPoject = { project: formData.project };

        handleCreateNewData({
          document: newAssemblyPoject,
          pagesData: newPagesData,
          bucket: pageIds.AssemblyProjects,
          callback: (newPagesData) => updateAssemblyPlan(newPagesData, { units }),
        });
      };

      const updateUnits: TDataMethodCallback = (newPagesData, data) => {
        const { units } = data;

        const updatedUnits = units.map((unit: TDocument) => ({ ...unit, status: "exist" }));

        handleMultipleUpdate({
          documents: updatedUnits,
          pagesData: newPagesData,
          bucket: pageIds.Units,
          callback: (newPagesData) => updateAssemblyProjects(newPagesData, { units }),
        });
      };

      const updateOrders: TDataMethodCallback = (newPagesData) => {
        const projectId = getIdValueFromObject(formData.project);
        const units = getPageDocuments({ pageId: pageIds.Units }).filter((unit) => getIdValueFromObject(unit.project) === projectId);

        const newOrder = { project: formData.project };

        handleCreateNewData({
          document: newOrder,
          pagesData: newPagesData,
          bucket: pageIds.Orders,
          callback: (newPagesData) => updateUnits(newPagesData, { units }),
        });
      };

      const updateContracts = () => {
        const thereIsSignedAgreement = formData.agreement_signed?.at(-1)?.deleted === false;
        const thereIsOrder = getPageDocuments({ pageId: pageIds.Orders }).some(
          (order) => getIdValueFromObject(order.project) === getIdValueFromObject(formData.project)
        );

        const saveFunction = isUpdate ? handleUpdateData : handleCreateNewData;

        const callback = thereIsSignedAgreement && !thereIsOrder ? updateOrders : undefined;

        saveFunction({
          document: formData,
          callback,
        });
      };

      updateContracts();
    }
  };

  return autoUpdateContracts;
}
