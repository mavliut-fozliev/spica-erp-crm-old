import React from "react";
import NativeCheckbox from "@mui/material/Checkbox";
import styles from "./Checkbox.module.scss";

export default function Checkbox({
  name,
  value,
  onChange,
  variant = "round",
  style,
  checkBoxStyle,
}: {
  name: string;
  value: boolean;
  onChange: (Event: any) => void;
  variant?: "square" | "rect" | "bold" | "round" | "horizontal" | "presais";
  style?: { [key: string]: any };
  checkBoxStyle?: { [key: string]: any };
}) {
  const classes = {
    box: {
      square: "box-square",
      rect: "box-rect",
      bold: "box-bold",
      round: "box-round",
      horizontal: "box-horizontal",
      presais: "box-presais",
    },
    checkbox: {
      square: "checkbox-square",
      rect: "checkbox-rect",
      bold: "checkbox-bold",
      round: "checkbox-round",
      horizontal: "checkbox-horizontal",
      presais: "checkbox-presais",
    },
    checkmark: {
      square: "checkmark-square",
      rect: "checkmark-rect",
      bold: "checkmark-bold",
      round: "checkmark-round",
      horizontal: "checkmark-horizontal",
      presais: "checkmark-presais",
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
      <div className={styles[classes.box[variant]]} style={checkBoxStyle}>
        <NativeCheckbox name={name} checked={value || false} onChange={handleChange} className={styles[classes.checkbox[variant]]} />
        <div className={styles[classes.checkmark[variant]]} style={{ display: value ? "initial" : "none" }}></div>
      </div>
    </div>
  );
}
