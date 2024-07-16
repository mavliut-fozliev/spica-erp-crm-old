import React from "react";
import { TextareaAutosize } from "@mui/material";
import styles from "./TextArea.module.scss";

export default function TextArea({
  name,
  placeholder,
  value,
  onChange,
  readOnly,
  height,
}: {
  name?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
  readOnly?: boolean;
  height?: number;
}) {
  return (
    <div className={styles["box"]}>
      <label className={styles["label"]}>{placeholder}</label>
      <TextareaAutosize
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={styles[readOnly ? "text-area-read-only" : "text-area"]}
        style={height ? { height: `${height}px` } : {}}
        readOnly={readOnly}
      />
    </div>
  );
}
