import React from "react";
import Checkbox from "../Checkbox/Checkbox";

export default function DoubleCheckbox({
  name,
  value,
  onChange,
  variant = "rect",
  style,
}: {
  name: string;
  value: string;
  onChange: (Event: any) => void;
  variant?: "rect" | "textUp" | "noText" | "circle";
  style?: { [key: string]: any };
}) {
  const handleChange = (title: "yes" | "no") => {
    const newValue = title === "yes" ? (value === "evet" ? "boş" : "evet") : value === "hayır" ? "boş" : "hayır";
    onChange({ target: { name, value: newValue } });
  };

  return (
    <div style={style}>
      {variant === "rect" ? (
        <div style={{ display: "flex" }}>
          <p style={{ margin: "0 3px", fontSize: "0.88rem" }}>Evet</p>
          <Checkbox name={name} value={value === "evet"} onChange={() => handleChange("yes")} />
          <p style={{ margin: "0 3px", fontSize: "0.88rem" }}>Hayır</p>
          <Checkbox name={name} value={value === "hayır"} onChange={() => handleChange("no")} />
        </div>
      ) : variant === "textUp" ? (
        <div style={{ display: "flex" }}>
          <div>
            <p style={{ margin: "0 5px 0 0", fontSize: "0.75rem", opacity: 0.6 }}>evet</p>
            <Checkbox name={name} value={value === "evet"} onChange={() => handleChange("yes")} />
          </div>
          <div>
            <p style={{ margin: "0", fontSize: "0.75rem", opacity: 0.6 }}>hayır</p>
            <Checkbox name={name} value={value === "hayır"} onChange={() => handleChange("no")} />
          </div>
        </div>
      ) : variant === "noText" ? (
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: "6px" }}>
            <Checkbox name={name} value={value === "evet"} onChange={() => handleChange("yes")} />
          </div>
          <div>
            <Checkbox name={name} value={value === "hayır"} onChange={() => handleChange("no")} />
          </div>
        </div>
      ) : (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Checkbox name={name} value={value === "evet"} onChange={() => handleChange("yes")} variant={"largeCircle"} />
          <p style={{ margin: "0 3px", fontSize: "0.65rem", fontWeight: 600, marginRight: "15px" }}>Evet</p>
          <Checkbox name={name} value={value === "hayır"} onChange={() => handleChange("no")} variant={"largeCircle"} />
          <p style={{ margin: "0 3px", fontSize: "0.65rem", fontWeight: 600 }}>Hayır</p>
        </div>
      )}
    </div>
  );
}
