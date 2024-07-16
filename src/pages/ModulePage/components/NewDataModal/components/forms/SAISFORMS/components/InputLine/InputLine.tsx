import { Input } from "@mui/material";
import React, { useRef } from "react";
import styles from "./InputLine.module.scss";

export default function InputLine({
  name,
  value,
  label,
  onChange,
  width = 100,
  variant = "border",
  style,
  dontUseSymbol,
}: {
  name: string;
  value: string;
  label: string;
  onChange: (Event: any) => void;
  width?: number;
  variant?: "free" | "border";
  style?: { [key: string]: any };
  dontUseSymbol?: boolean
}) {
  return (
    <div style={style}>
      {variant === "border" ? <h5 className={dontUseSymbol ? styles["label-no-symbol"] : styles["label"]}>{label}</h5> : <div></div>}
      <Input name={name} value={value || ""} onChange={onChange} className={styles["input-free"]} style={{ width: `${width}%` }} />
    </div>
  );
}