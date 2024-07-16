import React from "react";
import styles from "./IridescentText.module.scss";
import { Modal } from "@mui/material";

export default function IridescentText({ isLoading }: { isLoading: boolean }) {
  return isLoading ? (
    <Modal open={true} style={{ zIndex: 50000 }}>
      <div className={styles["overflowing-text"]}>
        <div className={styles["text-container"]}>{"Kutlay Mühendislik"}</div>
      </div>
    </Modal>
  ) : (
    <div></div>
  );
}
