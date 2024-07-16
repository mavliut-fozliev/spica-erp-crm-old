import React from "react";
import MainButton from "../../../../../../../../components/buttons/MainButton/MainButton";
import CreateIcon from "@mui/icons-material/Create";
import styles from "./FormActions.module.scss";

export default function FormActions({ handleOpen, disable }: { handleOpen: () => void; disable?: boolean }) {
  return (
    <div className={styles["box"]}>
      <MainButton width="20px" height="20px" onClick={handleOpen} disabled={disable}>
        <CreateIcon style={{ height: "100%", width: "100%" }} />
      </MainButton>
    </div>
  );
}
