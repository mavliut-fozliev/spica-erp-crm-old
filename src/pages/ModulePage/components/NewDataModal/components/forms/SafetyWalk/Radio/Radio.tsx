import React from "react";
import Checkbox from "../Checkbox/Checkbox";

export default function Radio({
  name,
  value,
  onChange,
  style,
}: {
  name: string;
  value: string;
  onChange: (Event: any) => void;
  style?: { [key: string]: any };
}) {
  const handleChange = (title: string) => {
    const newValue =
      title === "1"
        ? value === "1"
          ? "0"
          : "1"
        : title === "2"
        ? value === "2"
          ? "0"
          : "2"
        : title === "3"
        ? value === "3"
          ? "0"
          : "3"
        : value === "4"
        ? "0"
        : "4";
    onChange({ target: { name, value: newValue } });
  };

  return (
    <div style={style}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Checkbox name={name} value={value === "1"} onChange={() => handleChange("1")} variant="smallCircle" />
        <p style={{ marginLeft: "8px", fontSize: "0.8rem" }}>Mühendis tüm risk/tehlikeleri tespit etmiş</p>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Checkbox name={name} value={value === "2"} onChange={() => handleChange("2")} variant="smallCircle" />
        <p style={{ marginLeft: "8px", fontSize: "0.8rem" }}>Uygulanamaz/Risk yok</p>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Checkbox name={name} value={value === "3"} onChange={() => handleChange("3")} variant="smallCircle" />
        <p style={{ marginLeft: "8px", fontSize: "0.8rem" }}>Mühendis Risk/Tehlikelerin sadece çok azını tespit etmiş</p>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Checkbox name={name} value={value === "4"} onChange={() => handleChange("4")} variant="smallCircle" />
        <p style={{ marginLeft: "8px", fontSize: "0.8rem" }}>Mühendis Risk/Tehlikelerin hiçbirini tespit etmemiş</p>
      </div>
    </div>
  );
}
