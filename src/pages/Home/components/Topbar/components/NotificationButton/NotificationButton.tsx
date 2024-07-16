import React, { useEffect } from "react";
import Badge from "@mui/material/Badge";
import styles from "./NotificationButton.module.scss";
import { Button } from "@mui/material";
import { useUserStore } from "../../../../../../store/userStore";
import { IoMdNotificationsOutline } from "react-icons/io";
import { usePageStore } from "../../../../../../store/pageStore";
import { useTopbarStore } from "../../topbarStore";
import { convertDateObjectToString } from "services/functions/helpers/dateHelpers";
import useData from "services/api/useData";

export default function NotificationButton() {
  const pageStore = usePageStore();
  const { identifier } = useUserStore();
  const { notifications, setNotifications, setOpenList } = useTopbarStore();

  const dataService = useData();

  const notificationCount = notifications.filter((notification) => notification.seen === false).length;

  const makeNotificationsViewed = async () => {
    for (let notification of notifications) {
      if (!notification.seen) {
        await dataService.patchBucketData("6527f226ffa6b3002d10cc44", notification._id!, {
          seen: true,
          seen_date: convertDateObjectToString(new Date()),
        });
      }
    }
  };

  const handleClick = () => {
    setOpenList(true);
    makeNotificationsViewed();
  };

  useEffect(() => {
    if (identifier && pageStore.notificatons) {
      setNotifications([...pageStore.notificatons?.filter((notification) => notification.seen === false)] || []);
    }
  }, [identifier, pageStore.notificatons]);

  return (
    <>
      <Button disableRipple variant="text" onClick={handleClick} className={styles["notification-button"]}>
        <Badge badgeContent={notificationCount} color="secondary" max={9}>
          <IoMdNotificationsOutline className={styles["notification"]} />
        </Badge>
      </Button>
    </>
  );
}
