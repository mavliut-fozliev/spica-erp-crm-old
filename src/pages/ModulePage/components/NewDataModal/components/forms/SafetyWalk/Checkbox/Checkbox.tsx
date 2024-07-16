import React from "react";
import NativeCheckbox from "@mui/material/Checkbox";
import styles from "./Checkbox.module.scss";

export default function Checkbox({
  name,
  value,
  onChange,
  variant = "smallRect",
  style,
}: {
  name: string;
  value: boolean;
  onChange: (Event: any) => void;
  variant?: "smallRect" | "largeRect" | "smallCircle" | "largeCircle";
  style?: { [key: string]: any };
}) {
  const classes = {
    box: {
      smallRect: "box",
      largeRect: "box-large",
      smallCircle: "box-circle",
      largeCircle: "box-circle-large",
    },
    checkbox: {
      smallRect: "checkbox",
      largeRect: "checkbox-large",
      smallCircle: "checkbox-circle",
      largeCircle: "checkbox-circle-large",
    },
    checkmark: {
      smallRect: "checkmark",
      largeRect: "checkmark-large",
      smallCircle: "checkmark-circle",
      largeCircle: "checkmark-circle-large",
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
        <NativeCheckbox
          name={name}
          checked={value || false}
          onChange={handleChange}
          className={styles[classes.checkbox[variant]]}
        />
        <div className={styles[classes.checkmark[variant]]} style={{ display: value ? "initial" : "none" }}></div>
      </div>
    </div>
  );
}
