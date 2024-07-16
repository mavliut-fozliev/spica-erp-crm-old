import React, { ReactNode } from "react";
import Checkbox from "../Checkbox/Checkbox";
import styles from "./Radio.module.scss";
export default function Radio({
  name,
  value,
  onChange,
  style,
  variant = "circle",
  inputArray,
  height,
}: {
  name: string;
  value: string;
  onChange: (Event: any) => void;
  style?: { [key: string]: any };
  variant?: "square" | "circle" | "horizontal" | "presais";
  inputArray: string[] | ReactNode[];
  height: number;
}) {
  const handleChange = (title: string) => {
    const newValue = value === title ? "0" : title;
    onChange({ target: { name, value: newValue } });
  };

  return (
    <div style={style}>
      {variant === "square" ? (
        <div style={{ display: "flex", width: "150px", justifyContent: "space-between" }}>
          <Checkbox name={name} value={value === "1"} onChange={() => handleChange("1")} variant="square" />
          <Checkbox name={name} value={value === "2"} onChange={() => handleChange("2")} variant="square" />
          <Checkbox name={name} value={value === "3"} onChange={() => handleChange("3")} variant="square" />
          <Checkbox name={name} value={value === "4"} onChange={() => handleChange("4")} variant="square" />
        </div>
      ) : variant === "circle" ? (
        <>
          <div style={{ marginTop: "1rem" }}>
            {inputArray.map((singleInput, index) => {
              return (
                <div style={{ display: "flex", alignItems: "center", marginBottom: "3px" }}>
                  <Checkbox name={name} value={value === (index + 1).toString()} onChange={() => handleChange((index + 1).toString())} variant="round" />
                  <p className={styles["singleInput"]} style={{ marginLeft: "15px", fontSize: "0.7rem", fontWeight: 700 }}>
                    {singleInput}
                  </p>
                </div>
              );
            })}
          </div>
        </>
      ) : variant === "horizontal" ? (
        <>
          <div style={{ marginTop: "1rem", display: "flex", width: "100%", justifyContent: "flex-end", borderRadius: "15px" }}>
            {inputArray.map((singleInput, index) => {
              return (
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Checkbox
                    name={name}
                    value={value === (index + 1).toString()}
                    onChange={() => handleChange((index + 1).toString())}
                    variant="horizontal"
                    checkBoxStyle={{
                      borderTopLeftRadius: index === 0 ? "4px" : undefined,
                      borderBottomLeftRadius: index === 0 ? "4px" : undefined,
                      borderTopRightRadius: index === inputArray.length - 1 ? "4px" : undefined,
                      borderBottomRightRadius: index === inputArray.length - 1 ? "4px" : undefined,
                      borderRight: index === inputArray.length - 1 ? "1px solid black" : undefined,
                    }}
                  />
                  <p
                    className={`${styles["horizontalRadio"]} ${value === (index + 1).toString() && styles["horizontalRadio-active"]}`}
                    style={{ fontSize: "0.7rem", fontWeight: 700 }}
                  >
                    {singleInput}
                  </p>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <>
          <div style={{ display: "flex" }}>
            {inputArray.map((singleInput, index) => {
              return (
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Checkbox
                    name={name}
                    value={value === (index + 1).toString()}
                    onChange={() => handleChange((index + 1).toString())}
                    variant="presais"
                    checkBoxStyle={{
                      borderTopLeftRadius: index === 0 ? "4px" : undefined,
                      borderBottomLeftRadius: index === 0 ? "4px" : undefined,
                      borderTopRightRadius: index === inputArray.length - 1 ? "4px" : undefined,
                      borderBottomRightRadius: index === inputArray.length - 1 ? "4px" : undefined,
                      borderRight: index === inputArray.length - 1 ? "1px solid black" : undefined,
                      height: `${height}px`,
                    }}
                  />
                  <div
                    className={`${styles["horizontalRadio-sais"]} ${value === (index + 1).toString() && styles["horizontalRadio-active"]}`}
                    style={{ fontSize: "0.7rem", fontWeight: 700, top: `-${height / 2}px`, translate: "0 -50%" }}
                  >
                    {singleInput}
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
