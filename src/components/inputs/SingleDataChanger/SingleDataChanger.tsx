import React, { useEffect, useRef, useState } from "react";
import MainButton from "../../buttons/MainButton/MainButton";
import styles from "./SingleDataChanger.module.scss";
import ChangeButton from "../../buttons/ChangeButton/ChangeButton";
import { LuPencilLine } from "react-icons/lu";
import { Button } from "@mui/material";

export default function SingleDataChanger({
  onSave,
  label,
  defaultValue,
}: {
  onSave: (value: number | string) => void;
  label?: string;
  defaultValue?: string | number;
}) {
  const [disabled, setDisabled] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  const [inputValue, setInputValue] = useState(defaultValue);

  const handleSave = () => {
    setDisabled(true);
    onSave(inputValue || 0);
  };

  const handleBlur = (e: any) => {
    if (e?.relatedTarget?.tabIndex !== 1007) {
      setDisabled(true);
      setInputValue(defaultValue);
    }
  };

  useEffect(() => {
    if (!disabled) {
      inputRef.current?.focus();
    }
  }, [disabled]);

  return (
    <div className={styles["box"]}>
      <label className={styles["label"]}>{label}:</label>
      <input
        className={styles["input"]}
        disabled={disabled}
        ref={inputRef}
        type="number"
        value={inputValue}
        onBlur={handleBlur}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSave();
          }
        }}
      />
      {disabled ? (
        <MainButton color="secondary" height="30px" width="30px" onClick={() => setDisabled(false)}>
          <LuPencilLine style={{ width: "13px", height: "13px" }} />
        </MainButton>
      ) : (
        <div id="submit-button">
          <MainButton color="success" height="30px" width="30px" onClick={handleSave} tabIndex={1007}>
            ok
          </MainButton>
        </div>
      )}
    </div>
  );
}
