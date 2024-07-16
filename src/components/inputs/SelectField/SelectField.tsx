import React, { useEffect, useState } from "react";
import { FormControl, Box, Autocomplete, TextField } from "@mui/material";
import styles from "./SelectField.module.scss";
import { getNameValueFromObject } from "../../../services/functions/helpers/getNameValueFromObject";

type TSelectField = {
  _id?: string | number;
  [key: string]: any;
};

export default function SelectField({
  name,
  defaultItem,
  onChange,
  label,
  items,
  primary,
  handleUpdatedFormDataChange,
  error,
  readOnly,
  disableClearable,
  freeSolo,
}: {
  name: string;
  defaultItem?: TSelectField;
  onChange: (Event: any) => void;
  label?: string;
  items: TSelectField[];
  primary: string;
  handleUpdatedFormDataChange?: (e: any, parent?: string, arrayIndex?: number) => void;
  error?: boolean;
  readOnly?: boolean;
  disableClearable?: boolean;
  freeSolo?: boolean;
}) {
  const itemsContainDefaultItem = Boolean((items || []).find((item) => item?._id === defaultItem?._id));
  const newDefaultItem = itemsContainDefaultItem ? defaultItem : null;
  const [selectedValue, setSelectedValue] = useState<TSelectField | null>(newDefaultItem ?? null);

  const handleChange = (event: any, newValue: any) => {
    const value = typeof newValue === "string" ? { _id: newValue, name: newValue } : newValue;

    if (value?._id === defaultItem?._id) return;

    setSelectedValue(value);
    onChange({
      target: {
        name,
        value,
      },
    });
  };

  const selectFielsSx = {
    boxShadow: "none",
    border: "1px solid rgb(240, 240, 240)",
    ".MuiOutlinedInput-notchedOutline": { border: 0 },
    ".MuiInput-underline:after": { outline: "none", border: 0 },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "transparent",
    },
    borderRadius: "4px",
    background: readOnly ? "rgb(240, 240, 240)" : "#fff",
    "& > svg": readOnly
      ? {
          display: "none",
        }
      : "",
  };

  useEffect(() => {
    setSelectedValue(newDefaultItem ?? null);
    if (!itemsContainDefaultItem && defaultItem && handleUpdatedFormDataChange) {
      handleUpdatedFormDataChange({
        target: {
          name: name,
          value: null,
        },
      });
    }
  }, [newDefaultItem]);

  return (
    <Box className={styles["box"]}>
      <div id={name} className={styles["label"]}>
        {label}
      </div>
      <div className={styles["input-container"]}>
        <Box className={styles["inner-box"]}>
          <FormControl fullWidth error={error} className={styles["form-control"]}>
            <Autocomplete
              // freeSolo={freeSolo}
              onInputChange={(e, newValue) => {
                if (freeSolo) handleChange(e, newValue);
              }}
              disableClearable={disableClearable}
              readOnly={readOnly}
              id="select"
              value={selectedValue}
              onChange={handleChange}
              className={styles[error ? "select-error" : "select"]}
              noOptionsText={"Bulunamadı"}
              sx={selectFielsSx}
              renderInput={(params) => <TextField {...params} label={""} title={getNameValueFromObject(selectedValue)} />}
              options={items}
              getOptionLabel={(option) => (option ? option[primary]?.toString() || "" : "")}
              isOptionEqualToValue={(option: TSelectField, value) => option?._id === value?._id}
              renderOption={(props, option) => (
                <li {...props} key={option._id} id={option._id} className={styles["item"]} title="wweewew">
                  {option[primary]}
                </li>
              )}
            />
          </FormControl>
        </Box>
      </div>
    </Box>
  );
}
