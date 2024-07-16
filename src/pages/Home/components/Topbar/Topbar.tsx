import React, { useState } from "react";
import styles from "./Topbar.module.scss";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useNavigate, useParams } from "react-router-dom";
import { usePageStore } from "../../../../store/pageStore";
import NotificationButton from "./components/NotificationButton/NotificationButton";
import NotificationList from "./components/NotificationList/NotificationList";
import { useUserStore } from "../../../../store/userStore";
import { IoIosArrowRoundBack } from "react-icons/io";
import IconButton from "../../../../components/buttons/IconButton/IconButton";
import { FiRefreshCcw } from "react-icons/fi";
import { useInstantStore } from "../../../../store/instantStore";
import { TtokenDecoded } from "../../../../types/types";
import jwtDecode from "jwt-decode";
import { IoMdMenu } from "react-icons/io";
import useGetPageData from "../../../../hooks/useGetPageData";
import UserInfo from "./components/UserInfo/UserInfo";
import UserMenu from "./components/UserMenu/UserMenu";
import { pageIds } from "consts/config/pages/pages";
import useData from "services/api/useData";

export default function Topbar() {
  const navigate = useNavigate();
  const params = useParams();
  const pageStore = usePageStore();
  const instantStore = useInstantStore();

  const dataService = useData();

  const handleBackClick = () => {
    if (params.id) navigate(-1);
  };

  const { getPageData } = useGetPageData();

  const hadleClickRefresh = async () => {
    try {
      instantStore.setIsLoading(true);

      //dashboard
      if (pageStore.page.href === "/") {
        const data = await dataService
          .getBucketDataAll(pageIds.Offers, {
            additionalFilter: {
              status: { $eq: "exist" },
            },
            additionalQueryParams: {
              sort: { _id: -1 },
            },
          })
          .then((data) => data.map((row, index) => ({ ...row, id: data.length - index })));
        pageStore.setPagesData({
          ...pageStore.pagesData,
          [pageIds.Offers]: { ...pageStore.pagesData[pageIds.Offers], exist: data },
        });

        return;
      }

      if (pageStore.page.href === "notifications") {
        const token = localStorage.getItem("token");
        const tokenDecoded: TtokenDecoded = token ? jwtDecode(token) : { identifier: "", attributes: { role: "", name: "", surname: "" } };

        const notificationsBucketId = "6527f226ffa6b3002d10cc44";
        const data = await dataService.getBucketDataAll(notificationsBucketId, {
          additionalFilter: { "user.identifier": tokenDecoded.identifier },
          additionalQueryParams: { sort: { _id: 1 } },
        });
        pageStore.setNotifications(data);
        return;
      }

      const pageData = await getPageData();

      pageStore.setPagesData({
        ...pageStore.pagesData,
        [pageStore.page._id]: pageData,
      });
    } catch (error) {
      console.error("Error when refreshing data: " + error);
    } finally {
      instantStore.setIsLoading(false);
    }
  };

  return (
    <>
      <Box className={styles["topbar"]}>
        <AppBar position="static" color="inherit">
          <Toolbar className={styles["toolbar"]}>
            <div className={styles["left-div"]}>
              <div className={styles["back-button"]}>
                <IconButton onClick={handleBackClick} disabled={params.id === undefined}>
                  <IoIosArrowRoundBack className={styles["back-button-icon"]} />
                </IconButton>
              </div>
              <p className={styles["page-name"]}>{`${pageStore.page.description}`}</p>
            </div>
            <div className={styles["middle-div"]}>
              {window.innerWidth > 850 && (
                <IconButton onClick={hadleClickRefresh}>
                  <FiRefreshCcw style={{ height: "20px", width: "20px", marginTop: "5px" }} />
                </IconButton>
              )}
            </div>
            <div className={styles["right-div"]}>
              <NotificationButton />
              <UserInfo />
            </div>
          </Toolbar>
        </AppBar>
      </Box>
      <NotificationList />
      <UserMenu />
    </>
  );
}
