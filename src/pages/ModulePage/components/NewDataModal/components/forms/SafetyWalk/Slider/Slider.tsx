import React from "react";
import Checkbox from "@mui/material/Checkbox";
import styles from "./Slider.module.scss";

export default function Slider({
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
    const newValue = title;
    onChange({ target: { name, value: newValue } });
  };

  return (
    <div style={style}>
      <div className={styles["container"]}>
        <div className={styles["box"]}>
          <Checkbox
            name={name}
            checked={value === "0"}
            onChange={() => handleChange("0")}
            className={styles["checkbox"]}
          />
          <div style={{ display: "flex" }}>
            <div className={styles["number"]}>0</div>
            <div style={{ width: "110px" }}>
              <p className={styles["description"]}>(1) Yetersiz-Zayıf Tutum</p>
            </div>
          </div>
          <div className={styles["checkmark"]} style={{ display: value === "0" || !value ? "initial" : "none" }}></div>
        </div>
        <div className={styles["box"]}>
          <Checkbox
            name={name}
            checked={value === "1"}
            onChange={() => handleChange("1")}
            className={styles["checkbox"]}
          />
          <div style={{ display: "flex" }}>
            <div className={styles["number"]}>1</div>
            <div style={{ width: "110px" }}>
              <p className={styles["description"]}>(2) Koçluk İhtiyacı</p>
            </div>
          </div>
          <div className={styles["checkmark"]} style={{ display: value === "1" ? "initial" : "none" }}></div>
        </div>
        <div className={styles["box"]}>
          <Checkbox
            name={name}
            checked={value === "2"}
            onChange={() => handleChange("2")}
            className={styles["checkbox"]}
          />
          <div style={{ display: "flex" }}>
            <div className={styles["number"]}>2</div>
            <div style={{ width: "110px" }}>
              <p className={styles["description"]}>(3) Güvenli Davranma</p>
            </div>
          </div>
          <div className={styles["checkmark"]} style={{ display: value === "2" ? "initial" : "none" }}></div>
        </div>
        <div className={styles["box"]}>
          <Checkbox
            name={name}
            checked={value === "3"}
            onChange={() => handleChange("3")}
            className={styles["checkbox"]}
          />
          <div style={{ display: "flex" }}>
            <div className={styles["number"]}>3</div>
            <div style={{ width: "110px" }}>
              <p className={styles["description"]}>(4) İlgili-Katılan</p>
            </div>
          </div>
          <div className={styles["checkmark"]} style={{ display: value === "3" ? "initial" : "none" }}></div>
        </div>
        <div className={styles["box"]}>
          <Checkbox
            name={name}
            checked={value === "4"}
            onChange={() => handleChange("4")}
            className={styles["checkbox"]}
          />
          <div style={{ display: "flex" }}>
            <div className={styles["number"]}>4</div>
            <div style={{ width: "110px" }}>
              <p className={styles["description"]}>(5) Rol Model</p>
            </div>
          </div>
          <div className={styles["checkmark"]} style={{ display: value === "4" ? "initial" : "none" }}></div>
        </div>
        <div className={styles["box-without-line"]}>
          <Checkbox
            name={name}
            checked={value === "5"}
            onChange={() => handleChange("5")}
            className={styles["checkbox"]}
          />
          <div className={styles["number"]}>5</div>
          <div className={styles["checkmark"]} style={{ display: value === "5" ? "initial" : "none" }}></div>
        </div>
      </div>
    </div>
  );
}
