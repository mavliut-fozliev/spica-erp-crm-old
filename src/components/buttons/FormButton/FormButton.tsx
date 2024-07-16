import React, { ReactNode } from "react";
import MainButton from "../MainButton/MainButton";
import { TColors } from "consts/colors/colors";

export default function FormButton({
  children,
  onClick,
  type,
  width,
  variant = "contained",
  color = "primary",
  style,
  disabled,
}: {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  width?: string;
  variant?: "contained" | "outlined" | undefined;
  color?: keyof TColors;
  style?: object;
  disabled?: boolean;
}) {
  return (
    <div>
      <MainButton
        type={type}
        variant={variant}
        color={color}
        onClick={onClick}
        width={width ? width : "140px"}
        height={"40px"}
        style={style}
        disabled={disabled}
      >
        {children}
      </MainButton>
    </div>
  );
}
