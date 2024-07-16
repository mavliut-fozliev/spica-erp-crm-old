import { Modal } from "@mui/material";
import React from "react";
import styles from "./Spinner.module.scss";
import { RotatingLines } from "react-loader-spinner";

export default function Spinner({ isLoading, hideSidebar }: { isLoading: boolean; hideSidebar: boolean }) {
  return (
    <Modal open={isLoading}>
      <div className={styles["container"]}>
        <div className={styles["box"]}>
          <RotatingLines strokeColor={"rgb(132, 90, 223)"} strokeWidth="2" width="50" />
        </div>
      </div>
    </Modal>
  );
}
