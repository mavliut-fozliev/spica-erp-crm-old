import dayjs from "dayjs";
import { ganttChartQueueFactor } from "pages/ModulePage/consts";
import { isoDateFormat } from "services/functions/helpers/dateHelpers";
import { getIdValueFromObject } from "services/functions/helpers/getIdValueFromObject";
import { TDocument } from "types/types";
import { getValueOfDate } from "./getValueOfDate";

export const calculateOrder = (task: TDocument, teams: TDocument[], teamTitle: string) => {
  const getTeamOrder = () => {
    const teamIndex = teams.findIndex((team) => getIdValueFromObject(team) === getIdValueFromObject(task[teamTitle]));
    return (teamIndex + 1) * ganttChartQueueFactor;
  };

  const valueOfDate = getValueOfDate(task.start_date);

  const dayFactor = 1000 * 3600 * 24;

  return getTeamOrder() + Math.round(valueOfDate / dayFactor);
};
