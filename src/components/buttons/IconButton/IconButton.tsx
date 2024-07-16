import { Button } from "@mui/material";
import React, { ReactNode } from "react";
import styles from "./IconButton.module.scss";

export default function IconButton({
  children,
  onClick,
  icon,
  disabled,
  width,
  height,
  style,
}: {
  children?: ReactNode;
  onClick?: (e: any) => void;
  icon?: ReactNode;
  disabled?: boolean;
  width?: number;
  height?: number;
  style?: any;
}) {
  return (
    <Button
      disableRipple
      variant="text"
      onClick={onClick}
      className={styles[disabled ? "button-disabled" : "button"]}
      disabled={disabled}
      style={{ width: width, height: height, ...style }}
    >
      {icon}
      {children}
    </Button>
  );
}
