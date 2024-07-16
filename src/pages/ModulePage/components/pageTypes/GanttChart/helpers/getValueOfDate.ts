import dayjs from "dayjs";
import { isoDateFormat } from "services/functions/helpers/dateHelpers";

export const getValueOfDate = (date: string, amountOfExtraDays?: number) => {
  const inDateFormat = dayjs(date).format(isoDateFormat);
  return dayjs(inDateFormat)
    .add(amountOfExtraDays || 0, "day")
    .valueOf();
};
