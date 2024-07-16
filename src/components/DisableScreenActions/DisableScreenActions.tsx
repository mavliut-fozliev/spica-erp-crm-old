import { Modal } from "@mui/material";
import React from "react";

export default function DisableScreenActions({ show }: { show: boolean }) {
  return (
    <Modal open={show}>
      <div></div>
    </Modal>
  );
}
