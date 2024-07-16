import React from "react";
import styles from "./LineProgress.module.scss";

export default function LineProgress({ percentage, width }: { percentage: number; width?: string }) {
  return (
    <div className={styles["loading-container"]} style={{ width }}>
      <div className={styles["loading-box"]}>
        <div className={styles["loading-line"]} style={{ width: `${percentage === 100 ? 0 : percentage}%` }}></div>
      </div>
    </div>
  );
}
