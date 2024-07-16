import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers";
import { trTR } from "@mui/x-date-pickers/locales";
import "dayjs/locale/tr";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { makeStyles } from "@material-ui/styles";
import dayjs, { Dayjs } from "dayjs";
import { isoDateTimeFormat } from "services/functions/helpers/dateHelpers";

const useStyles = makeStyles((theme) => ({
  datePicker: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    "& .MuiInputBase-root": {
      fontSize: "0.7rem",
      height: 30,
      width: 120,
      overflow: "hidden",
    },
    "& .MuiInputBase-input": {
      padding: 0,
      paddingLeft: 8,
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
}));

export default function DateInput({ name, value, onChange, disabled }: { name: string; value: string; onChange: (Event: any) => void; disabled?: boolean }) {
  const classes = useStyles();

  const handleChange = (date: Dayjs | null) => {
    onChange({
      target: {
        name,
        value: date?.format(isoDateTimeFormat),
      },
    });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} localeText={trTR.components.MuiLocalizationProvider.defaultProps.localeText} adapterLocale={"tr"}>
      <DatePicker
        className={classes.datePicker}
        onChange={handleChange}
        value={dayjs(value, isoDateTimeFormat)}
        sx={{ ".MuiOutlinedInput-notchedOutline": { border: 0 } }}
        slots={{ openPickerIcon: () => <DateRangeIcon fontSize="small" /> }}
        disabled={disabled}
      />
    </LocalizationProvider>
  );
}
