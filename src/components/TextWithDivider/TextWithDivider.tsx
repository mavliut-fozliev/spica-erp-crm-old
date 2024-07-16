import React from "react";
import styles from "./TextWidhDivider.module.scss";

const TextWithDivider = ({ text }: { text: string }) => {
  return (
    <div className={styles["text-with-divider"]}>
      <div className={styles["divider"]}></div>
      <span className={styles["text"]}>{text}</span>
      <div className={styles["divider"]}></div>
    </div>
  );
};

export default TextWithDivider;
