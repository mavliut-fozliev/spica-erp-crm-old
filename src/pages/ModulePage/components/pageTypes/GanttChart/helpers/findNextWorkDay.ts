import dayjs from "dayjs";
import { holidays } from "consts/holidays";
import { getFeastHolidays } from "services/functions/getFeastHolidays/getFeastHolidays";
import { isoDateTimeFormat, monthDayFormat } from "services/functions/helpers/dateHelpers";

/**
 * @returns end date in "YYYY-MM-DDTHH:mm:ssZ" format
 */

export const findNextWorkDay = (date: Date | string) => {
  let nextDay = dayjs(date);
  const holidayDates = (year: number) => [...holidays, ...getFeastHolidays(year)];

  for (let i = 0; i < 1000; i++) {
    nextDay = nextDay.add(1, "day");
    const year = nextDay.year();

    const isHoliday = holidayDates(year).includes(nextDay.format(monthDayFormat));
    const isWeekend = nextDay.day() === 0;

    if (!isHoliday && !isWeekend) {
      break;
    }
  }
  return dayjs(nextDay).format(isoDateTimeFormat);
};
