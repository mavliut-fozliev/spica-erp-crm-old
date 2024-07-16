import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import styles from "./ToggleButtons.module.scss";
import CheckIcon from "@mui/icons-material/Check";

export default function ToggleButtons({
  alignment,
  setAlignment,
  values,
  labels,
  color = "primary",
  style,
  checkedItem,
  disabled,
  disabledValues,
}: {
  alignment: string;
  setAlignment: (alignment: string) => void;
  values: string[];
  labels: string[];
  color?: "primary" | "blue";
  style?: { [key: string]: any };
  checkedItem?: number;
  disabled?: boolean;
  disabledValues?: string[];
}) {
  const handleChange = (event: React.MouseEvent<HTMLElement, MouseEvent>, newAlignment: string) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
      className={styles[disabled ? "group-disabled" : "group"]}
      disabled={disabled}
    >
      {values.map((value, index) => (
        <ToggleButton
          key={index}
          value={value}
          className={styles[alignment === value ? `selected-${color}` : `hidden-${color}`]}
          style={{ textTransform: "none", background: disabledValues?.includes(value) ? "rgb(225, 225, 225)" : "initial", ...style }}
          disabled={disabledValues?.includes(value)}
        >
          {labels[index]}
          {index === checkedItem && <CheckIcon />}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}
