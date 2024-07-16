import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Titem } from "../../../../types";
import styles from "./SidebarItem.module.scss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { usePageStore } from "../../../../../../store/pageStore";
import { useNavigate } from "react-router-dom";
import { useInstantStore } from "../../../../../../store/instantStore";
import useGetPageData from "../../../../../../hooks/useGetPageData";
import { useSidebarStore } from "../../sidebarStore";

export default function SidebarItem({ item, expanded, onChange }: { item: Titem; expanded: boolean; onChange: () => void }) {
  const navigate = useNavigate();

  const pageStore = usePageStore();
  const instantStore = useInstantStore();
  const { expandedSubmodule, setExpandedSubmodule, selectedModule, selectedSubmodule } = useSidebarStore();

  const { getModuleData } = useGetPageData();

  const handleChangeSubmodule = (panel: string) => {
    setExpandedSubmodule({ old: expandedSubmodule.new, new: panel });
  };

  const handleClick = async (href: string, description: string, title: string, _id: string) => {
    getModuleData(title);
    navigate(href);
    pageStore.setPage({ title, href, _id, description });

    const page = pageStore.config.Pages.find((p) => p.title === title);

    pageStore.setSection(page?.default_section ?? "exist");
    if (window.innerWidth <= 850) {
      instantStore.setHideSidebar(true);
    }
  };

  return (
    <div className={styles["items"]}>
      <Accordion disableGutters square className={styles["item"]} expanded={expanded} onChange={onChange}>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="sidebar"
          className={styles[selectedModule === item.label ? "title-expanded" : "title"]}
          expandIcon={<ExpandMoreIcon className={styles["expand-icon"]} />}
        >
          {item.icon}
          <Typography className={styles["text"]}>{item.label}</Typography>
        </AccordionSummary>
        <AccordionDetails className={styles["content"]}>
          <List className={styles["list"]}>
            {item.links.map((link, index) =>
              link ? (
                <ListItem key={index} className={styles["link"]}>
                  <ListItemButton
                    className={styles[pageStore.page.title === link.title ? "link-button-selected" : "link-button"]}
                    onClick={() => handleClick(link.href, link.description, link.title, link._id)}
                  >
                    <ListItemText primary={link.description} className={styles["link-text"]} />
                  </ListItemButton>
                </ListItem>
              ) : null
            )}
            {item.submodules.map((submodule, subIndex) => (
              <ListItem key={subIndex} className={styles["link-submodule-title"]}>
                <Accordion
                  disableGutters
                  square
                  className={styles["item"]}
                  expanded={expandedSubmodule.new === submodule.label}
                  onChange={() => handleChangeSubmodule(submodule.label)}
                >
                  <AccordionSummary
                    className={styles[selectedSubmodule === submodule.label ? "title-expanded-submodule" : "title-submodule"]}
                    expandIcon={<ExpandMoreIcon className={styles["expand-icon"]} />}
                  >
                    <Typography className={styles["link-text-submodule"]}>{submodule.label}</Typography>
                  </AccordionSummary>
                  <AccordionDetails className={styles["content-submodule"]}>
                    <List className={styles["list-submodule"]}>
                      {submodule.links.map((link, index) => (
                        <ListItem key={index} className={styles["link-submodule"]}>
                          <ListItemButton
                            className={styles[pageStore.page.title === link.title ? "link-button-selected" : "link-button"]}
                            onClick={() => handleClick(link.href, link.description, link.title, link._id)}
                          >
                            <ListItemText primary={link.description} className={styles["link-text"]} />
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </List>
                  </AccordionDetails>
                </Accordion>
              </ListItem>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
