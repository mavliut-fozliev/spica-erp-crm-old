import React from "react";
import MainButton from "../MainButton/MainButton";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";

export default function ChangeButton(props: { onClick?: (e: any) => void; disabled?: boolean }) {
  return (
    <MainButton variant="outlined" onClick={props.onClick} width="28px" height="28px">
      <ModeEditOutlineOutlinedIcon style={{ width: "14px", height: "14px" }} />
    </MainButton>
  );
}
