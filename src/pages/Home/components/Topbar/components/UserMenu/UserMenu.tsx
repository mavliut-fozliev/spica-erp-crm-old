import React, { useEffect, useState } from "react";
import { useTopbarStore } from "../../topbarStore";
import styles from "./UserMenu.module.scss";
import Modal from "@mui/material/Modal";
import LogoutIcon from "@mui/icons-material/Logout";
import { defaultPage, usePageStore } from "../../../../../../store/pageStore";
import { useInstantStore } from "../../../../../../store/instantStore";
import authService from "../../../../../../services/api/Authentication";
import { useAuthStore } from "../../../../../../store/authStore";
import { useNavigate } from "react-router-dom";

export default function UserMenu() {
  const navigate = useNavigate();

  const pageStore = usePageStore();
  const instantStore = useInstantStore();
  const authStore = useAuthStore();

  const { openUserMenu, setOpenUserMenu } = useTopbarStore();

  const [openModal, setOpenModal] = useState(false);
  const [position, setPosition] = useState(0);

  const logOut = async () => {
    instantStore.setIsLoading(true);
    pageStore.setPage(defaultPage);
    authService.logOut();
    authStore.setSignedIn(false);
    instantStore.setIsLoading(false);
    navigate("/login");
  };

  useEffect(() => {
    if (openUserMenu) {
      setOpenModal(true);
      setTimeout(() => setPosition(10), 0);
    } else {
      setPosition(0);
      setTimeout(() => setOpenModal(false), 200);
    }
  }, [openUserMenu]);

  return (
    <Modal
      open={openModal}
      onClose={() => setOpenUserMenu(false)}
      className={styles["modal"]}
      slotProps={{
        backdrop: {
          className: styles.transparentBackdrop,
        },
      }}
    >
      <div
        className={styles["box"]}
        style={{
          translate: `0 ${position}px`,
          opacity: `${position * 0.1}`,
          transition: "ease 0.3s",
        }}
      >
        <div className={styles["menu-item"]} onClick={logOut}>
          <LogoutIcon fontSize="small" style={{ width: "18px", height: "18px" }} />
          <div className={styles["menu-item-text"]}>Çıkış Yap</div>
        </div>
      </div>
    </Modal>
  );
}
