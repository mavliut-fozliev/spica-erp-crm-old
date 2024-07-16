import React from "react";
import NativeCheckbox from "@mui/material/Checkbox";
import styles from "./TextRadio.module.scss";

export default function TextRadio({
  name,
  value,
  onChange,
  style,
}: {
  name: string;
  value: string;
  onChange: (Event: any) => void;
  style?: { [key: string]: any };
}) {
  const handleChange = (title: string) => {
    const newValue = title === "Haberli" ? (value === "Haberli" ? "" : "Haberli") : value === "Habersiz" ? "" : "Habersiz";

    onChange({ target: { name, value: newValue } });
  };

  return (
    <div style={style}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className={styles["box"]}>
          <NativeCheckbox name={name} checked={value === "Haberli" || false} onChange={() => handleChange("Haberli")} className={styles["checkbox"]} />
          <div className={styles["text"]}>Haberli</div>
          <div className={styles["checkmark"]} style={{ display: value === "Haberli" ? "initial" : "none" }}></div>
        </div>
        <div style={{ fontSize: "0.75rem" }}>/</div>
        <div className={styles["box-2"]}>
          <NativeCheckbox name={name} checked={value === "Habersiz" || false} onChange={() => handleChange("Habersiz")} className={styles["checkbox"]} />
          <div className={styles["text"]}>Habersiz</div>
          <div className={styles["checkmark"]} style={{ display: value === "Habersiz" ? "initial" : "none" }}></div>
        </div>
      </div>
    </div>
  );
}
