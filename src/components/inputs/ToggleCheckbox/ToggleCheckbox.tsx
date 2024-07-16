import React, { ChangeEventHandler, useState } from "react";
import Switch from "@mui/material/Switch";
import styles from "./ToggleCheckbox.module.scss";
import { styled } from "@mui/material/styles";

const CustomSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase": {
    color: "#fff",
    "&.Mui-checked": {
      color: "rgb(73, 182, 245)",
    },
  },
  "& .MuiSwitch-track": {
    backgroundColor: "rgb(140, 144, 151)",
  },
  "& .Mui-checked+.MuiSwitch-track": {
    backgroundColor: "rgb(73, 182, 245)",
  },
}));

export default function ToggleCheckbox({
  label,
  name,
  value,
  onChange,
  customValues,
  disabled,
}: {
  label?: string;
  name: string;
  value: boolean;
  onChange: (Event: any) => void;
  customValues?: { notChecked: string; checked: string };
  disabled?: boolean;
}) {
  const handleChange = (e: any) => {
    onChange({
      target: {
        name,
        value: customValues ? (e.target.checked ? customValues.notChecked : customValues.checked) : e.target.checked,
      },
    });
  };

  return (
    <div className={styles["box"]}>
      <p className={styles["title"]}>{label}</p>
      <CustomSwitch name={name} checked={value} onChange={handleChange} inputProps={{ "aria-label": "controlled" }} disabled={disabled} />
    </div>
  );
}
