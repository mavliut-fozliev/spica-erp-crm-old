import React from "react";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import MainButton from "../../buttons/MainButton/MainButton";
import styles from "./ConfirmationDialog.module.scss";
import { Modal } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import WarningIcon from "@mui/icons-material/Warning";

export default function ConfirmationDialog({
  open,
  onClose,
  onConfirm,
  title,
  subtitle,
  type = "information",
}: {
  open: boolean;
  onClose: () => void;
  onConfirm: (e: any) => void;
  title: string;
  subtitle: string;
  type?: "information" | "warning";
}) {
  const handleConfirm = (e: any) => {
    onConfirm(e);
    onClose();
  };

  return (
    <Modal className={styles["modal"]} open={open} onClose={onClose}>
      <div
        className={styles[`box-up-${type}`]}
        style={{
          transform: `translate(${(window.innerWidth - 400) / 2}px, 0)`,
        }}
      >
        <div className={styles["box"]}>
          {type === "warning" ? <WarningIcon className={styles[`icon-${type}`]} /> : <InfoIcon className={styles[`icon-${type}`]} />}
          <DialogTitle className={styles["title"]}>{title}</DialogTitle>
          <p className={styles["text"]}>{subtitle}</p>
          <DialogActions className={styles["buttons"]}>
            <div>
              <MainButton onClick={onClose} variant="outlined" color={type === "warning" ? "secondary" : "primary"}>
                {type === "warning" ? "Geri" : "Hayır"}
              </MainButton>
            </div>
            <div>
              <MainButton onClick={handleConfirm} color={type === "warning" ? "warning" : "primary"}>
                {type === "warning" ? "Devam Et" : "Evet"}
              </MainButton>
            </div>
          </DialogActions>
        </div>
      </div>
    </Modal>
  );
}
