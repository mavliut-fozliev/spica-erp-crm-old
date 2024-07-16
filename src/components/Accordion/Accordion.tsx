import React, { ReactNode } from "react";
import NativeAccordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./Accordion.module.scss";
import getColor, { TColors } from "consts/colors/colors";

export default function Accordion({
  expanded,
  onChange,
  title,
  details,
  color,
}: {
  expanded: boolean;
  onChange: () => void;
  title: ReactNode;
  details: ReactNode;
  color?: keyof TColors;
}) {
  return (
    <NativeAccordion expanded={expanded} onChange={onChange} className={styles[`accordion-${color}`]} sx={{ background: getColor(color, 0.1) }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>{title}</AccordionSummary>
      <AccordionDetails>
        <div className={styles["information"]}>{details}</div>
      </AccordionDetails>
    </NativeAccordion>
  );
}
