import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./Text.module.scss";
import { obj } from "types/types";
import { addCommasToNumber } from "services/functions/helpers/numberHelpers";

export default function Text({
  label,
  name,
  value,
  onChange,
  error,
  type,
  id,
  required,
  autoComplete,
  autoFocus,
  disable,
  style,
  inputStyle,
  clearOutsideLabel,
  backgroundColor,
  color,
  symbol,
  hide,
  maxValue,
}: {
  label?: string;
  name?: string;
  value?: string | number;
  onChange?: any;
  error?: boolean | undefined;
  type?: "string" | "number" | "email" | "password";
  id?: string;
  required?: boolean;
  autoComplete?: string;
  autoFocus?: boolean;
  disable?: boolean;
  style?: { [key: string]: string };
  inputStyle?: { [key: string]: string };
  clearOutsideLabel?: boolean;
  backgroundColor?: string;
  color?: string;
  symbol?: string;
  hide?: boolean;
  maxValue?: number;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const inputDivRef = useRef<HTMLInputElement>(null);

  const [cursorPosition, setCursorPosition] = useState(1);
  const [displayValue, setDisplayValue] = useState(typeof value === "number" ? addCommasToNumber(value) : "");

  const inputDivWidth = inputDivRef.current?.clientWidth || 0;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value;

    if (maxValue && value) {
      const numberValue = Number(value);
      if (numberValue > maxValue) return;
    }

    const target: obj = { name, value };

    setCursorPosition(inputRef.current?.selectionStart || 1);

    if (type === "number") {
      const numberValue: number = parseFloat(value.replace(/,/g, "")) || 0;
      setDisplayValue(addCommasToNumber(numberValue));

      target.value = numberValue;
    }

    onChange({ target });
  };

  useEffect(() => {
    setDisplayValue(typeof value === "number" ? addCommasToNumber(value) : "");
  }, [value]);

  const setCursor = (start: any, end: any) => {
    if (inputRef.current) {
      inputRef.current.selectionStart = start;
      inputRef.current.selectionEnd = end;
    }
  };

  useLayoutEffect(() => {
    setCursor(cursorPosition, cursorPosition);
  }, [value, cursorPosition]);

  return (
    <div className={styles[hide ? "box-hide" : "box"]} style={style}>
      {!clearOutsideLabel && <label className={styles["label"]}>{label}</label>}
      <div ref={inputDivRef} className={styles["input-div"]}>
        {value}
      </div>
      <input
        ref={inputRef}
        name={name}
        value={type === "number" ? displayValue : value}
        onChange={handleInputChange}
        id={id}
        required={required}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        placeholder={symbol ? "" : label}
        className={styles[error ? "input-error" : "input"]}
        readOnly={disable}
        style={{ background: backgroundColor ? backgroundColor : disable ? "rgb(240, 240, 240)" : "#fff", ...inputStyle, color: color }}
        type={type === "password" ? "password" : undefined}
      />
      <span
        className={styles[label ? "symbol" : "symbol-no-label"]}
        style={{ color: color, ...(value || value === 0 ? { left: `${inputDivWidth > 100 ? 100 : inputDivWidth}px` } : { right: "10px" }) }}
      >
        {symbol}
      </span>
    </div>
  );
}
