import React, { ReactNode } from "react";
import styles from "./CustomDataView.module.scss";
import FieldInspectionsPage from "./components/FieldInspectionsPage/FieldInspectionsPage";
import { usePageStore } from "../../../../../store/pageStore";
import MonthlyProgressPaymentsPage from "./components/MonthlyProgressPayments/MonthlyProgressPaymentsPage";
import ToggleButtons from "components/buttons/ToggleButtons/ToggleButtons";

export default function CustomDataView({ pageSections, pageSectionLabels }: { pageSections: string[]; pageSectionLabels: string[] }) {
  const pageStore = usePageStore();

  const customPageComponents: { [key: string]: ReactNode } = {
    "FieldInspections": <FieldInspectionsPage />,
    "MonthlyProgressPayments": <MonthlyProgressPaymentsPage />,
    "All": <div></div>,
  };

  return (
    <div className={styles["custom-view"]}>
      <div className={styles["sections"]}>
        {pageSections?.length > 1 ? (
          <ToggleButtons
            alignment={pageStore.section}
            setAlignment={pageStore.setSection}
            values={pageSections}
            labels={pageSectionLabels}
            style={window.innerWidth <= 850 ? { fontSize: "0.7rem" } : {}}
          />
        ) : (
          <></>
        )}
      </div>
      <div className={styles["content"]}>{customPageComponents[pageStore.page.title || "All"] || <div></div>}</div>
    </div>
  );
}
