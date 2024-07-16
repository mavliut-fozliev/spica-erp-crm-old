import React, { useEffect, useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker, TimePicker, DatePicker } from "@mui/x-date-pickers";
import styles from "./DateTimePick.module.scss";
import { makeStyles } from "@material-ui/styles";
import dayjs, { Dayjs } from "dayjs";
import { trTR } from "@mui/x-date-pickers/locales";
import "dayjs/locale/tr";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { isoDateTimeFormat } from "services/functions/helpers/dateHelpers";

const useStyles = makeStyles((theme) => ({
  dateTimePicker: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    "& .MuiInputBase-root": {
      fontSize: "0.875rem",
      height: 30,
      overflow: "hidden",
      marginRight: "10px",
    },
  },
  error: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    "& .MuiInputBase-root": {
      fontSize: "0.875rem",
      height: 30,
      overflow: "hidden",
      marginRight: "10px",
      border: "1px solid red",
    },
  },
  readOnly: {
    pointerEvents: "none",
  },
  hide: {
    display: "none",
  },
}));

export default function DateTimePick({
  name,
  label,
  value,
  onChange,
  colorCalendar,
  error,
  timeOnly = false,
  dateOnly = false,
  readOnly = false,
  hide = false,
  isTimeDisabled,
  isDateDisabled,
  minutesStep,
}: {
  name: string;
  label: string;
  value: string;
  onChange: (e: { target: { name: string; value: string } }) => void;
  colorCalendar: () => void;
  error?: boolean;
  timeOnly?: boolean;
  dateOnly?: boolean;
  readOnly?: boolean;
  hide?: boolean;
  isTimeDisabled?: (date: Dayjs) => boolean;
  isDateDisabled?: (date: Dayjs) => boolean;
  minutesStep?: number;
}) {
  const classes = useStyles();

  const parsedDate = value === "" ? null : dayjs(value, isoDateTimeFormat);

  const [currentDate, setCurrentDate] = useState(parsedDate);

  const handleDateChange = (date: Dayjs | null) => {
    setCurrentDate(date);
    if (date?.format(isoDateTimeFormat)?.slice(0, 10) !== value?.slice(0, 10) && !timeOnly) {
      date = date?.set("hour", 8).set("minute", 0) || null;
    }

    if (!readOnly) {
      if (date === null) {
        onChange({ target: { name: name, value: "" } });
        //@ts-ignore
      } else if (`${date.$d}` !== "Invalid Date") {
        onChange({
          target: { name: name, value: date.format(isoDateTimeFormat) },
        });
      }
    }
  };

  useEffect(() => {
    if (parsedDate?.valueOf() !== currentDate?.valueOf()) {
      setCurrentDate(parsedDate);
    }
  }, [value]);

  return (
    <div className={`${styles["container"]} ${hide ? classes.hide : readOnly ? classes.readOnly : ""}`}>
      <label className={styles["label"]}>{label}</label>
      <LocalizationProvider dateAdapter={AdapterDayjs} localeText={trTR.components.MuiLocalizationProvider.defaultProps.localeText} adapterLocale={"tr"}>
        <div className={styles[readOnly ? "picker-read-only" : "picker"]}>
          {dateOnly ? (
            <DatePicker
              onOpen={() => colorCalendar()}
              onMonthChange={() => colorCalendar()}
              onYearChange={() => colorCalendar()}
              //@ts-ignore
              value={`${currentDate?.$d}` === "Invalid Date" ? null : currentDate}
              onChange={handleDateChange}
              className={error ? classes.error : classes.dateTimePicker}
              readOnly={readOnly}
              shouldDisableDate={isDateDisabled}
              sx={{ ".MuiOutlinedInput-notchedOutline": { border: 0 } }}
              slots={{ openPickerIcon: DateRangeIcon }}
            />
          ) : timeOnly ? (
            <TimePicker
              //@ts-ignore
              value={`${currentDate?.$d}` === "Invalid Date" ? null : currentDate}
              onChange={handleDateChange}
              className={error ? classes.error : classes.dateTimePicker}
              ampm={false}
              readOnly={readOnly}
              shouldDisableTime={isTimeDisabled}
              sx={{ ".MuiOutlinedInput-notchedOutline": { border: 0 } }}
              // viewRenderers={{
              //   hours: renderTimeViewClock,
              //   minutes: renderTimeViewClock,
              // }}
              minutesStep={minutesStep}
            />
          ) : (
            <DateTimePicker
              onOpen={() => colorCalendar()}
              onMonthChange={() => colorCalendar()}
              onYearChange={() => colorCalendar()}
              //@ts-ignore
              value={`${currentDate?.$d}` === "Invalid Date" ? null : currentDate}
              onChange={handleDateChange}
              className={error ? classes.error : classes.dateTimePicker}
              ampm={false}
              readOnly={readOnly}
              shouldDisableTime={isTimeDisabled}
              shouldDisableDate={isDateDisabled}
              sx={{ ".MuiOutlinedInput-notchedOutline": { border: 0 } }}
              slots={{ openPickerIcon: DateRangeIcon }}
              // viewRenderers={{
              //   hours: renderTimeViewClock,
              //   minutes: renderTimeViewClock,
              // }}
            />
          )}
        </div>
      </LocalizationProvider>
    </div>
  );
}
