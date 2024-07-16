import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Typography } from "@mui/material";
import Modal from "@mui/material/Modal";
import styles from "./NotificationList.module.scss";
import { MdOutlineWorkOutline } from "react-icons/md";
import MainButton from "../../../../../../components/buttons/MainButton/MainButton";
import { useNavigate } from "react-router-dom";
import { usePageStore } from "../../../../../../store/pageStore";
import { useTopbarStore } from "../../topbarStore";
import { convertTimeToShow } from "services/functions/helpers/dateHelpers";

export default function NotificationList() {
  const navigate = useNavigate();
  const { notifications, openList, setNotifications, setOpenList } = useTopbarStore();
  const pageStore = usePageStore();

  const notificationCount = notifications.filter((notification) => notification.seen === false).length;

  const handleClose = () => {
    setNotifications(notifications.map((notification) => (notification.seen ? notification : { ...notification, seen: true })));
    setOpenList(false);
  };

  const handleClickAll = () => {
    navigate("/notifications");
    handleClose();
    pageStore.setPage({
      title: "Notifications",
      href: "notifications",
      _id: "6527f226ffa6b3002d10cc44",
      description: "Bildirimler",
    });
  };

  return (
    <Modal
      open={openList}
      onClose={handleClose}
      className={styles["modal"]}
      slotProps={{
        backdrop: {
          className: styles.transparentBackdrop,
        },
      }}
    >
      <div className={styles["box"]}>
        <nav aria-label="secondary mailbox folders">
          <div className={styles["title-box"]}>
            <label className={styles["title"]}>Bildirimler</label>
            <p className={styles["unread"]}>{notificationCount} Okunmamış</p>
          </div>
          <List className={styles["list"]}>
            {notifications.map((notification, index) => (
              <div key={index} className={styles["list-item"]}>
                <MdOutlineWorkOutline className={styles["icon"]} />
                <ListItem disablePadding>
                  <div className={styles["list-text"]}>
                    <ListItemText primary={"Bildirim Başlığı"} className={styles["notification-title"]} />
                    <ListItemText primary={notification.title} className={styles["notification-text"]} />
                    <Typography className={styles["notification-date"]}>{convertTimeToShow(notification.created_at)}</Typography>
                  </div>
                </ListItem>
              </div>
            ))}
          </List>
          <div className={styles["view-all-button"]}>
            <MainButton color="primary" onClick={handleClickAll} height="40px" width="318px">
              Tüm bildirimleri gör
            </MainButton>
          </div>
        </nav>
      </div>
    </Modal>
  );
}
