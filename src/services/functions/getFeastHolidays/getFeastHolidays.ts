import Holidays from "date-holidays";
import dayjs from "dayjs";
import { monthDayFormat } from "../helpers/dateHelpers";

export const getFeastHolidays = (year: number) => {
  var hd = new Holidays();
  hd.init("TR");
  const officialHolidays = hd.getHolidays(year);

  const ramadanFeasts = officialHolidays.find((d) => d.name === "Ramazan Bayramı");
  const eidAlAdha = officialHolidays.find((d) => d.name === "Kurban Bayramı");

  const ramadanFeastsStart = dayjs(ramadanFeasts?.start).add(1, "day");
  const ramadanFeastsMiddle = dayjs(ramadanFeasts?.start).add(2, "day");
  const ramadanFeastsEnd = dayjs(ramadanFeasts?.end).subtract(1, "day");

  const eidAlAdhaStart = dayjs(eidAlAdha?.start).add(1, "day");
  const eidAlAdhaMiddle = dayjs(eidAlAdha?.start).add(2, "day");
  const eidAlAdhaMiddle2 = dayjs(eidAlAdha?.start).add(3, "day");
  const eidAlAdhaEnd = dayjs(eidAlAdha?.end).subtract(1, "day");

  const holidays = [
    ramadanFeastsStart.format(monthDayFormat),
    ramadanFeastsMiddle.format(monthDayFormat),
    ramadanFeastsEnd.format(monthDayFormat),
    eidAlAdhaStart.format(monthDayFormat),
    eidAlAdhaMiddle.format(monthDayFormat),
    eidAlAdhaMiddle2.format(monthDayFormat),
    eidAlAdhaEnd.format(monthDayFormat),
  ];
  return holidays;
};
