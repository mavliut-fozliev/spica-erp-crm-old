import React from "react";
import styles from "./LoadingLabel.module.scss";
import { CircularProgress } from "@mui/material";

export default function LoadingLabel() {
  return (
    <div className={styles["box"]}>
      <p className={styles["text"]}>Yükleniyor</p>
      <CircularProgress className={styles["progress"]} />
    </div>
  );
}
