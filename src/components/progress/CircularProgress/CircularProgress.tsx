import { CircularProgress as Progress, Modal } from "@mui/material";
import React from "react";
import styles from "./CircularProgress.module.scss";

export default function CircularProgress({ open, percentage }: { open: boolean; percentage: number }) {
  return (
    <div>
      <Modal open={open} aria-labelledby="modal-title" aria-describedby="modal-description" className={styles["modal"]}>
        <div>
          <Progress className={styles["progress"]} />
          <div className={styles["text"]}>{Math.round(percentage)}</div>
        </div>
      </Modal>
    </div>
  );
}
