import { Input } from "@mui/material";
import React, { useRef } from "react";
import styles from "./InputLine.module.scss";

export default function InputLine({
  name,
  value,
  label,
  onChange,
  width = 100,
  variant = "dotted",
  style,
}: {
  name: string;
  value: string;
  label?: string;
  onChange: (Event: any) => void;
  width?: number;
  variant?: "free" | "border" | "dotted";
  style?: { [key: string]: any };
}) {
  return (
    <div style={style} className={styles["input-container"]}>
      {variant === "border" ? <h5 className={styles.label}>{label}</h5> : <div></div>}
      <Input name={name} value={value || ""} onChange={onChange} className={styles["input-dotted"]} style={{ width: `${width}%` }} />
    </div>
  );
}
