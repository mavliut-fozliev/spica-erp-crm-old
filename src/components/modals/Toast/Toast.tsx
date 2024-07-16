import React, { useEffect, useState } from "react";
import styles from "./Toast.module.scss";
import { useInstantStore } from "../../../store/instantStore";

export default function Toast() {
  const instantStore = useInstantStore();

  const [opacity, setOpacity] = useState(0);
  const [timeoutId1, setTimeoutId1] = useState<any>();
  const [timeoutId2, setTimeoutId2] = useState<any>();

  useEffect(() => {
    if (instantStore.showToast.clue) {
      setOpacity(0.9);
      if (timeoutId1) {
        clearTimeout(timeoutId1);
      }
      if (timeoutId2) {
        clearTimeout(timeoutId2);
      }
      const newTimeoutId1 = setTimeout(() => instantStore.setShowToast({ clue: "" }), 2500);
      const newTimeoutId2 = setTimeout(() => setOpacity(0), 2000);
      setTimeoutId1(newTimeoutId1);
      setTimeoutId2(newTimeoutId2);
    }
  }, [instantStore.showToast]);

  return (
    <div
      className={styles["container-" + (instantStore.showToast.type || "info")]}
      style={{
        transform: `translate(${(window.innerWidth - 392) / 2}px, 0)`,
        opacity,
        translate: `0 -${opacity * 10}px`,
        display: `${instantStore.showToast.clue.length ? "flex" : "none"}`,
      }}
    >
      <div className={styles["box"]}>
        <div className={styles["text"]}>
          <div>{instantStore.showToast.clue}</div>
        </div>
      </div>
    </div>
  );
}
