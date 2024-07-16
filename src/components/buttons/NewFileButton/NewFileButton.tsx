import React, { ReactNode } from "react";
import TableButton from "../TableButton/TableButton";
import { AiOutlineFileAdd } from "react-icons/ai";

export default function NewFileButton({ onClick, disabled }: { onClick?: (e: any) => void; disabled?: boolean }) {
  return <TableButton icon={<AiOutlineFileAdd />} onClick={onClick} disabled={disabled}></TableButton>;
}
