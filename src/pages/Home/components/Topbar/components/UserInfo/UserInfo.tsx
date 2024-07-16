import React from "react";
import { useUserStore } from "../../../../../../store/userStore";
import styles from "./UserInfo.module.scss";
import { useTopbarStore } from "../../topbarStore";

export default function UserInfo() {
  const userStore = useUserStore();

  const { setOpenUserMenu } = useTopbarStore();

  const handleClick = () => {
    setOpenUserMenu(true);
  };

  return (
    <div className={styles["user-div"]} onClick={handleClick}>
      <p className={styles["identifier"]}>{userStore.identifier}</p>
      <p className={styles["role"]}>{userStore.role ? userStore.role[0]?.toUpperCase() + userStore.role.slice(1) : ""}</p>
    </div>
  );
}
