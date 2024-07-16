import * as React from "react";
import Slider from "@mui/material/Slider";
import styles from "./CustomSlider.module.scss";

export default function CustomSlider({ name, label, value, onChange }: { name: string; label?: string; value: number; onChange: (any: any) => void }) {
  const handleChange = (e: any) => {
    onChange({
      target: {
        name: name,
        value: e.target.value,
      },
    });
  };

  return (
    <div className={styles["box"]}>
      <label className={styles["label"]}>{label}</label>
      <Slider className={styles["slider"]} aria-label="Default" value={value} onChange={handleChange} />
    </div>
  );
}
