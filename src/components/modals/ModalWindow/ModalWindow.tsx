import React, { ReactNode, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styles from "./ModalWindow.module.scss";
import FormButton from "../../buttons/FormButton/FormButton";
import { Divider } from "@mui/material";
import ConfirmationDialog from "../ConfirmationDialog/ConfirmationDialog";

export default function ModalWindow({
  children,
  open,
  handleClose,
  handleSave,
  title,
  customWidth,
  columnAmount,
  closeButtonText,
  saveButtonText,
  disabled,
  useConfirmationDialog,
  useGrid,
  customConfirmationDialogText,
}: {
  children?: ReactNode;
  open: boolean;
  handleClose: () => void;
  handleSave?: () => void;
  title?: string;
  customWidth?: number;
  columnAmount?: "single" | "double";
  closeButtonText?: string;
  saveButtonText?: string;
  disabled?: boolean;
  useConfirmationDialog?: boolean;
  useGrid?: boolean;
  customConfirmationDialogText?: { close: string; save: string };
}) {
  const childrenLength = React.Children.toArray(children).length;

  const twoColumns = columnAmount ? columnAmount === "double" : childrenLength > 7;

  const gridClassName = useGrid ? (twoColumns ? "children-box-grid" : "children-box-grid-small") : "children-box";

  const getWidth = () => {
    if (customWidth) {
      return customWidth > window.innerWidth ? window.innerWidth : customWidth;
    }
    if (twoColumns) {
      return window.innerWidth < 1300 ? window.innerWidth : 1300;
    }
    return window.innerWidth < 700 ? window.innerWidth : 700;
  };

  const translateX = (window.innerWidth - getWidth()) / 2;

  const [openConfirmationDialog, setOpenConfirmationDialog] = useState(false);
  const [action, setAction] = useState<"close" | "save">("close");

  const [isMoving, setIsMoving] = useState(false);
  const [staticPos, setStaticPos] = useState<{ xPos: number; yPos: number }>({ xPos: translateX, yPos: 0 });
  const [initialPos, setInitialPos] = useState<{ xPos: number; yPos: number }>({ xPos: 0, yPos: 0 });
  const [translatePos, setTranslatePos] = useState<{ xPos: number; yPos: number }>({ xPos: 0, yPos: 0 });

  const handleMove = (e: any) => {
    if (isMoving) {
      setTranslatePos({ xPos: e.clientX - initialPos.xPos, yPos: e.clientY - initialPos.yPos });
    }
  };

  const onClose = () => {
    setTranslatePos({ xPos: 0, yPos: 0 });
    setIsMoving(false);

    if (useConfirmationDialog) {
      setOpenConfirmationDialog(true);
      setAction("close");
    } else {
      handleClose();
    }
  };

  const getConfirmationDialogText = () => {
    if (action === "close") {
      return customConfirmationDialogText?.close || "Yapılan Değişiklikler Kaydedilmeyecektir";
    }
    return customConfirmationDialogText?.save || "Tüm Değişiklikler Kaydedilecek";
  };

  useEffect(() => {
    setStaticPos({ xPos: translateX, yPos: 0 });
  }, [open]);

  return (
    <Modal
      open={open}
      onClose={onClose}
      className={styles["modal"]}
      onMouseMove={(e) => handleMove(e)}
      onMouseUp={() => {
        setIsMoving(false);
        setStaticPos({ xPos: staticPos.xPos + translatePos.xPos, yPos: staticPos.yPos + translatePos.yPos });
        setTranslatePos({ xPos: 0, yPos: 0 });
      }}
    >
      <Box
        className={styles["box"]}
        style={{
          width: getWidth(),
          transform: `translate(${staticPos.xPos + translatePos.xPos}px, ${staticPos.yPos + translatePos.yPos}px)`,
        }}
      >
        <div
          onMouseDown={(e) => {
            setIsMoving(true);
            setInitialPos({ xPos: e.clientX, yPos: e.clientY });
          }}
          className={styles["holder"]}
        ></div>
        <form className={styles["form"]}>
          <Typography id="modal-modal-title" variant="h5" component="h2" fontWeight={"bold"} className={styles["title"]}>
            {title}
          </Typography>
          <Divider className={styles["divider"]}></Divider>
          <div className={styles[gridClassName]}>{children}</div>
          <div className={styles["buttons"]}>
            <FormButton color="secondary" width="80px" onClick={onClose}>
              {closeButtonText || "Kapat"}
            </FormButton>
            {handleSave ? (
              <FormButton
                onClick={() => {
                  if (useConfirmationDialog) {
                    setOpenConfirmationDialog(true);
                    setAction("save");
                  } else {
                    handleSave();
                  }
                }}
                disabled={disabled}
              >
                {saveButtonText || "Kaydet"}
              </FormButton>
            ) : (
              <div></div>
            )}
          </div>
        </form>
        <ConfirmationDialog
          open={openConfirmationDialog}
          onClose={() => setOpenConfirmationDialog(false)}
          onConfirm={() => (handleSave ? (action === "close" ? handleClose() : handleSave()) : handleClose())}
          title={getConfirmationDialogText()}
          subtitle="Emin Misiniz?"
          type={action === "close" ? "warning" : "information"}
        />
      </Box>
    </Modal>
  );
}
