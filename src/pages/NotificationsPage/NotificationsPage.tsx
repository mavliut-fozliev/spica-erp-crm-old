import React, { useEffect, useState } from "react";
import { usePageStore } from "../../store/pageStore";
import { List, ListItem, ListItemText, Typography } from "@mui/material";
import styles from "./NotificationsPage.module.scss";
import jwtDecode from "jwt-decode";
import { TtokenDecoded } from "../../types/types";
import LoadingLabel from "../../components/progress/LoadingLabel/LoadingLabel";
import { convertTimeToShow } from "services/functions/helpers/dateHelpers";
import useData from "services/api/useData";

export default function NotificationsPage() {
  const pageStore = usePageStore();

  const dataService = useData();

  const quantityNotificationForLoading = 10;

  const initialNotificationCount = quantityNotificationForLoading + 10;

  const [limit, setLimit] = useState(initialNotificationCount);
  const [lastLimit, setLastLimit] = useState(10);

  const [hideLoading, setHideLoading] = useState(false);

  const handleScroll = (e: any) => {
    setLimit(Math.round(e.target.scrollTop / 100) + initialNotificationCount);
    console.log("limit: ", limit);
    console.log("lastLimit: ", lastLimit);
  };

  useEffect(() => {
    if (pageStore.page.title === "Notifications") {
      const token = localStorage.getItem("token");
      const tokenDecoded: TtokenDecoded = token ? jwtDecode(token) : { identifier: "", attributes: { role: "", name: "", surname: "" } };

      dataService
        .getBucketDataAll("6527f226ffa6b3002d10cc44", {
          additionalFilter: [{ "user.identifier": tokenDecoded.identifier }],
          additionalQueryParams: { limit: lastLimit, sort: { _id: -1 } },
        })
        .then((data) => {
          pageStore.setNotifications(data);
          dataService
            .getBucketDataAll("6527f226ffa6b3002d10cc44", {
              additionalFilter: [{ "user.identifier": tokenDecoded.identifier }],
              additionalQueryParams: { limit: 1, sort: { _id: 1 } },
            })
            .then((firstNotification) => {
              if (data?.at(-1)?._id === firstNotification[0]?._id) {
                setHideLoading(true);
              }
            });
        });
    }
  }, [pageStore.page, lastLimit]);

  useEffect(() => {
    if (limit > lastLimit + quantityNotificationForLoading) {
      setLastLimit(limit);
    }
  }, [limit]);

  useEffect(() => {
    pageStore.setPage({
      title: "Notifications",
      href: "notifications",
      _id: "6527f226ffa6b3002d10cc44",
      description: "Bildirimler",
    });
  }, []);

  return (
    <div className={styles["container"]} onScroll={handleScroll}>
      <List className={styles["list"]}>
        {pageStore.notificatons.map((notification: any, index: number) => (
          <ListItem key={index} className={styles["list-item"]}>
            <div className={styles["text-box"]}>
              <ListItemText primary={"Bildirim Başlığı"} className={styles["notification-title"]} />
              <ListItemText primary={notification.title} className={styles["notification-text"]} />
            </div>
            <Typography className={styles["notification-date"]}>{convertTimeToShow(notification.created_at)}</Typography>
          </ListItem>
        ))}
        <div className={styles["loading-box"]}>{!hideLoading && <LoadingLabel />}</div>
      </List>
    </div>
  );
}
