import { getIdValueFromObject } from "services/functions/helpers/getIdValueFromObject";
import { getValueOfDate } from "./getValueOfDate";
import { findEndDate } from "./findEndDate";
import { TDocument } from "types/types";

export const getOverlapTasks = (tasks: TDocument[], currentTask: TDocument, teamTitle: string): TDocument[] => {
  const tasksWithoutCurrent = tasks.filter((row) => row._id !== currentTask._id);

  const currentTeamItems = tasksWithoutCurrent.filter((row) => getIdValueFromObject(row[teamTitle]) === getIdValueFromObject(currentTask[teamTitle]));

  const currentTaskStartValue = getValueOfDate(currentTask.start_date);
  const currentTaskEndValue = getValueOfDate(findEndDate(currentTask.start_date, currentTask.amount_of_days));

  const overlapTasks = currentTeamItems.filter((row) => {
    const rowStartValue = getValueOfDate(row.start_date);
    const rowEndValue = getValueOfDate(findEndDate(row.start_date, row.amount_of_days));

    return (
      (currentTaskStartValue >= rowStartValue && currentTaskStartValue <= rowEndValue) ||
      (currentTaskEndValue >= rowStartValue && currentTaskEndValue <= rowEndValue)
    );
  });

  return overlapTasks;
};
