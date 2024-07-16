import React from "react";
import NativeCheckbox from "@mui/material/Checkbox";
import styles from "./Checkbox.module.scss";

export default function Checkbox({
  name,
  value,
  onChange,
  variant = "square",
  style,
  disabled,
}: {
  name: string;
  value: boolean;
  onChange: (Event: any) => void;
  variant?: "square" | "rect" | "bold";
  style?: { [key: string]: any };
  disabled?: boolean;
}) {
  const classes = {
    box: {
      square: "box-square",
      rect: "box-rect",
      bold: "box-bold",
    },
    checkbox: {
      square: "checkbox-square",
      rect: "checkbox-rect",
      bold: "checkbox-bold",
    },
    checkmark: {
      square: "checkmark-square",
      rect: "checkmark-rect",
      bold: "checkmark-bold",
    },
  };

  const handleChange = (e: any) => {
    onChange({
      target: {
        name,
        value: e.target.checked,
      },
    });
  };

  return (
    <div style={style}>
      <div className={styles[classes.box[variant]]}>
        <NativeCheckbox name={name} checked={value || false} onChange={handleChange} className={styles[classes.checkbox[variant]]} disabled={disabled} />
        <div className={styles[classes.checkmark[variant]]} style={{ display: value ? "initial" : "none" }}></div>
      </div>
    </div>
  );
}
