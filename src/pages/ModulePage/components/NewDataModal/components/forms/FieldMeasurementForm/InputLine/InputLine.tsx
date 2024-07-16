import { Input } from "@mui/material";
import React, { useRef } from "react";
import styles from "./InputLine.module.scss";

export default function InputLine({
  name,
  value,
  onChange,
  width = 15,
  variant = "bold",
  style,
}: {
  name: string;
  value: string;
  onChange: (Event: any) => void;
  width?: number;
  variant?: "bold" | "doted" | "free";
  style?: { [key: string]: any };
}) {
  const divRef = useRef<HTMLDivElement>(null);
  if (divRef.current) {
    divRef.current.innerText = value || "";
  }

  const valueWidth = divRef.current?.clientWidth || width;

  return (
    <div style={style}>
      <Input
        name={name}
        value={value || ""}
        onChange={onChange}
        className={styles["input-" + variant]}
        style={{ width: valueWidth > width ? `${valueWidth}px` : `${variant === "bold" || variant === "free" ? 50 : width}px` }}
      />
      <div ref={divRef} className={styles["length-div-" + variant]}></div>
    </div>
  );
}
