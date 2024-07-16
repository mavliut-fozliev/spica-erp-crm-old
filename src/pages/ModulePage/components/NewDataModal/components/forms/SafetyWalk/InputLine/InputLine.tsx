import { Input } from "@mui/material";
import React, { useRef } from "react";
import styles from "./InputLine.module.scss";

export default function InputLine({
  name,
  value,
  onChange,
  width = 100,
  variant = "straight",
  style,
}: {
  name: string;
  value: string;
  onChange: (Event: any) => void;
  width?: number;
  variant?: "straight" | "doted" | "frame";
  style?: { [key: string]: any };
}) {
  const divRef = useRef<HTMLDivElement>(null);
  if (divRef.current) {
    divRef.current.innerText = value || "";
  }

  const valueWidth = divRef.current?.clientWidth || width;

  return (
    <div style={style}>
      <div
        style={{
          height: "25px",
          border: variant === "frame" ? "3px solid rgb(200, 0, 0)" : undefined,
          padding: "0 2px",
          width: "fit-content",
        }}
      >
        <Input
          name={name}
          value={value || ""}
          onChange={onChange}
          className={styles["input-" + variant]}
          style={{ width: valueWidth > width ? `${valueWidth}px` : `${width}px` }}
        />
        <div ref={divRef} className={styles["length-div"]}></div>
      </div>
    </div>
  );
}
