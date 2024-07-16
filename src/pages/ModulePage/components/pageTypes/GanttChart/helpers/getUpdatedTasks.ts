import { TDocument } from "types/types";
import { findEndDate } from "./findEndDate";
import { getValueOfDate } from "./getValueOfDate";
import { findNextWorkDay } from "./findNextWorkDay";

export const getUpdatedTasks = (tasks: TDocument[], initialTask: TDocument) => {
  const updatedTasks = tasks.reduce<TDocument[]>((acc, item, index) => {
    const prevItem = index === 0 ? initialTask : acc[index - 1];

    const prevEnd = findEndDate(prevItem.start_date, prevItem.amount_of_days);
    const prevEndValue = getValueOfDate(prevEnd);

    const startValue = getValueOfDate(item.start_date);

    if (prevEndValue >= startValue || item.dependencies?.length) {
      const updatedItem = { ...item, start_date: findNextWorkDay(prevEnd), dependencies: prevItem._id ? [`${prevItem._id}`] : [] };
      acc.push(updatedItem);
    } else {
      acc.push(item);
    }

    return acc;
  }, []);

  return updatedTasks;
};
