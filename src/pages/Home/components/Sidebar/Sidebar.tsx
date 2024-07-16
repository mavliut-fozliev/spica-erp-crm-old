import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import styles from "./Sidebar.module.scss";
import SidebarItem from "./components/SidebarItem/SidebarItem";
import { Divider, ListItemButton, Typography } from "@mui/material";
import { defaultPage, usePageStore } from "../../../../store/pageStore";
import { useLocation, useNavigate } from "react-router-dom";
import useMenuItems from "./hooks/useMenuItems";
import MainButton from "../../../../components/buttons/MainButton/MainButton";
import { useInstantStore } from "../../../../store/instantStore";
import { VscGraph } from "react-icons/vsc";
import IconButton from "../../../../components/buttons/IconButton/IconButton";
import { IoMdMenu } from "react-icons/io";
import { useSidebarStore } from "./sidebarStore";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = useMenuItems();

  const pageStore = usePageStore();
  const instantStore = useInstantStore();

  const { expandedModule, setExpandedModule, expandedSubmodule, setExpandedSubmodule, setSelectedModule, setSelectedSubmodule } = useSidebarStore();

  const handleChangeModule = (panel: string) => {
    setExpandedModule({ old: expandedModule.new, new: panel });
  };

  const handleHomeClick = () => {
    setExpandedModule({ old: expandedModule.new, new: "home" });
    setExpandedSubmodule({ old: expandedSubmodule.new, new: "home" });
    setSelectedModule("");
    setSelectedSubmodule("");
    navigate("/");
    pageStore.setPage(defaultPage);
    pageStore.setSection("exist");
    if (window.innerWidth <= 850) {
      instantStore.setHideSidebar(true);
    }
  };

  useEffect(() => {
    if (expandedModule.new === expandedModule.old) {
      setExpandedModule({ old: expandedModule.new, new: "" });
    }
  }, [expandedModule, setExpandedModule]);

  useEffect(() => {
    if (expandedSubmodule.new === expandedSubmodule.old) {
      setExpandedSubmodule({ old: expandedSubmodule.new, new: "" });
    }
  }, [expandedSubmodule, setExpandedSubmodule]);

  useEffect(() => {
    for (let item of menuItems) {
      for (let link of item.links) {
        if (link?.href === "/" + location.pathname.split("/")[1]) {
          setExpandedModule({ old: "old", new: item.label });
          setExpandedSubmodule({ old: expandedSubmodule.new, new: "new" });
          setSelectedModule(item.label);
          setSelectedSubmodule("");
          pageStore.setPage({
            title: link.title,
            href: link.href,
            _id: link._id,
            description: link.description,
          });
          return;
        } else {
          for (let submodule of item.submodules) {
            for (let link of submodule.links) {
              if (link.href === "/" + location.pathname.split("/")[1]) {
                setExpandedModule({ old: "old", new: item.label });
                setExpandedSubmodule({ old: "old", new: submodule.label });
                setSelectedModule(item.label);
                setSelectedSubmodule(submodule.label);
                pageStore.setPage({
                  title: link.title,
                  href: link.href,
                  _id: link._id,
                  description: link.description,
                });
                return;
              }
            }
          }
        }
      }
    }
    setSelectedModule("");
    setSelectedSubmodule("");

    if (location.pathname === "/") {
      pageStore.setPage(defaultPage);
    }
  }, [location.pathname]);

  return (
    <div className={styles["container"]}>
      <Box role="presentation" className={styles[instantStore.hideSidebar ? "sidebar-hidden" : "sidebar"]}>
        <Typography className={styles["logo-text"]}>Kutlay Mühendislik</Typography>
        <Divider sx={{ borderColor: "#3c4257" }} />
        <List className={styles["list"]}>
          <ListItem className={styles["home-page"]} disablePadding onClick={handleHomeClick}>
            <ListItemButton className={styles[pageStore.page.title === "" ? "home-page-button-selected" : "home-page-button"]}>
              <VscGraph style={{ width: "18px", height: "18px" }} />
              <p className={styles["home-page-text"]}>Dashboard</p>
            </ListItemButton>
          </ListItem>
          {menuItems.map((item, index) => (
            <ListItem key={index} disablePadding className={styles["list-item"]}>
              <SidebarItem item={item} expanded={expandedModule.new === item.label} onChange={() => handleChangeModule(item.label)} />
            </ListItem>
          ))}
        </List>
      </Box>
      <div className={styles[instantStore.hideSidebar ? "hide-button-hidden" : "hide-button"]}>
        <IconButton onClick={() => instantStore.setHideSidebar(true)}>
          <IoMdMenu style={{ width: "26px", height: "26px" }} />
        </IconButton>
      </div>
      <div className={styles[instantStore.hideSidebar ? "modal-button-hidden" : "modal-button"]} onClick={() => instantStore.setHideSidebar(false)}></div>
    </div>
  );
}
