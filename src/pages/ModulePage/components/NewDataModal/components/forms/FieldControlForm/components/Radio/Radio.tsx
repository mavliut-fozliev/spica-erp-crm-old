import React from "react";
import Checkbox from "../Checkbox/Checkbox";

export default function Radio({
  name,
  value,
  onChange,
  style,
  variant = "square",
  disabled,
}: {
  name: string;
  value: string;
  onChange: (Event: any) => void;
  style?: { [key: string]: any };
  variant?: "square" | "bold" | "double";
  disabled?: boolean;
}) {
  const handleChange = (title: string) => {
    const newValue = value === title ? "0" : title;
    onChange({ target: { name, value: newValue } });
  };

  const getCheckboxElement = (ownValue: string, type: "square" | "bold" | "rect") => (
    <Checkbox name={name} value={value === ownValue} onChange={() => handleChange(ownValue)} variant={type} disabled={disabled} />
  );

  const getCheckboxWithText = (ownValue: string, title: string) => (
    <div style={{ display: "flex", alignItems: "center", marginBottom: "3px" }}>
      {getCheckboxElement(ownValue, "bold")}
      <p style={{ marginLeft: "2px", fontSize: "0.7rem", fontWeight: 700 }}>{title}</p>
    </div>
  );

  return (
    <div style={style}>
      {variant === "square" ? (
        <div style={{ display: "flex", width: "150px", justifyContent: "space-between" }}>
          {getCheckboxElement("1", "square")}
          {getCheckboxElement("2", "square")}
          {getCheckboxElement("3", "square")}
          {getCheckboxElement("4", "square")}
        </div>
      ) : variant === "bold" ? (
        <>
          {getCheckboxWithText("1", "Sipariş öncesi kontrol")}
          {getCheckboxWithText("2", "Sevkiyat öncesi kontrol")}
          {getCheckboxWithText("3", "Teslim öncesi kontrol")}
          {getCheckboxWithText("4", "Montaj Öncesi Kontrol")}
        </>
      ) : (
        <>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ fontSize: "0.7rem", marginRight: "6px" }}>a)</div>
            {getCheckboxElement("1", "rect")}
          </div>
          <div style={{ display: "flex", alignItems: "center", marginTop: "30px" }}>
            <div style={{ fontSize: "0.7rem", marginRight: "6px" }}>b)</div>
            {getCheckboxElement("2", "rect")}
          </div>
        </>
      )}
    </div>
  );
}
