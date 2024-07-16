import React, { ReactNode } from "react";
import styles from "./TableButton.module.scss";
import MainButton from "../MainButton/MainButton";

export default function TableButton({
  children,
  onClick,
  disabled,
  icon,
}: {
  children?: ReactNode;
  onClick?: (e: any) => void;
  disabled?: boolean;
  icon?: ReactNode;
}) {
  return (
    <MainButton onClick={onClick} disabled={disabled} icon={icon} color="secondary" width="29px" height="29px">
      <p>{children}</p>
    </MainButton>
  );
}
