import React, { useEffect, useRef, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Input } from "@material-ui/core";
import styles from "./SelectFieldWithText.module.scss";
import MainButton from "../../buttons/MainButton/MainButton";

type TSelectField = {
  label: string;
  value: string;
};

const SelectFieldWithText = ({
  name,
  label,
  items,
  onChange,
  value,
  error,
  readOnly,
}: {
  name: string;
  onChange: (Event: any) => void;
  label: string;
  items: TSelectField[] | string[];
  value: string;
  error?: boolean;
  readOnly?: boolean;
}) => {
  const correctedItems: TSelectField[] = typeof items[0] === "string" ? (items as string[]).map((i) => ({ label: i, value: i })) : (items as TSelectField[]);

  const valueIsValid = Boolean(correctedItems.find((item) => item.value === value));

  const [selectedValue, setSelectedValue] = useState(value);
  const [textInput, setTextInput] = useState(false);
  const [customItem, setCustomItem] = useState<TSelectField>({ label: "", value: "" });

  const selectFielsSx = {
    boxShadow: "none",
    border: "1px solid rgb(225, 225, 225)",
    ".MuiOutlinedInput-notchedOutline": { border: 0 },
    background: readOnly ? "rgb(240, 240, 240)" : "transparent",
    "& > svg": readOnly
      ? {
          display: "none",
        }
      : "",
  };
  const errorSx = {
    border: "1px solid red",
  };

  const handleChange = (e: any) => {
    setSelectedValue(e.target.value);
    onChange(e);
  };

  const setCustomValue = (event: any) => {
    setTextInput(false);
    const val = event.target.value;
    setCustomItem({ label: val, value: val });
    handleChange({ target: { name, value: val } });
  };

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      setCustomValue(event);
    }
  };

  const onBlur = (event: any) => {
    setCustomValue(event);
  };

  useEffect(() => {
    if (!valueIsValid) {
      setCustomItem({ label: value, value: value });
    }
    setSelectedValue(value);
  }, [value]);

  return (
    <div className={styles["box"]}>
      <p className={styles["label"]}>{label}</p>
      <FormControl fullWidth className={styles["form-control"]}>
        {!textInput ? (
          <Select
            name={name}
            value={selectedValue}
            onChange={handleChange}
            className={styles[textInput ? "select-corrected" : "select"]}
            sx={error ? { ...selectFielsSx, ...errorSx } : selectFielsSx}
            readOnly={readOnly}
          >
            {correctedItems.map((item, index) => (
              <MenuItem key={index} value={item.value} className={styles["item"]} title={item.label}>
                {item.label}
              </MenuItem>
            ))}
            <MenuItem value={customItem.value} className={styles["custom-item"]}>
              {customItem.label}
            </MenuItem>
            <div className={styles["custom-button"]}>
              <MainButton onClick={() => setTextInput(true)} width="120%" style={{ translate: "-10%" }}>
                Özel
              </MainButton>
            </div>
          </Select>
        ) : (
          <div className={styles["text-input-box"]}>
            <input type="text" autoFocus onKeyDown={handleKeyPress} onBlur={onBlur} className={styles["text-input"]} />
            <MainButton color="success" onClick={setCustomValue} width="30px" height="30px">
              OK
            </MainButton>
          </div>
        )}
      </FormControl>
    </div>
  );
};

export default SelectFieldWithText;
