import { Button } from "@mui/material";
import React, { ReactNode } from "react";
import styles from "./MainButton.module.scss";
import { TColors } from "consts/colors/colors";

export default function MainButton({
  children,
  onClick,
  disabled,
  icon,
  color = "primary",
  variant = "contained",
  style,
  sx,
  type = "button",
  width,
  height,
  onMouseDown,
  tabIndex,
}: {
  children?: ReactNode;
  onClick?: (e: any) => void;
  disabled?: boolean;
  icon?: ReactNode;
  color?: keyof TColors;
  variant?: "contained" | "outlined";
  style?: object;
  sx?: object;
  type?: "button" | "submit" | "reset";
  width?: string;
  height?: string;
  onMouseDown?: (e: any) => void;
  tabIndex?: number;
}) {
  return (
    <div style={{ width: width, height: height, margin: "0 2px", ...style }}>
      <Button
        sx={{ textTransform: "none", ...sx }}
        id={styles[variant]}
        className={styles[disabled ? "button-disabled" : `button-${color}`]}
        onClick={onClick}
        disabled={disabled}
        type={type}
        onMouseDown={onMouseDown}
        tabIndex={tabIndex}
      >
        {icon}
        {children}
      </Button>
    </div>
  );
}
