import React, { useState } from "react";
import { Gantt, ViewMode } from "../../../../../modified_modules/gantt-task-react/dist";
import "../../../../../modified_modules/gantt-task-react/dist/index.css";
import styles from "./GanttChart.module.scss";
import MainButton from "../../../../../components/buttons/MainButton/MainButton";
import { MdAdd } from "react-icons/md";
import { TconfigPage, obj } from "../../../../../types/types";
import { useInstantStore } from "../../../../../store/instantStore";
import { useTasks } from "./hooks/useTasks";
import SelectField from "../../../../../components/inputs/SelectField/SelectField";
import ConfirmationDialog from "../../../../../components/modals/ConfirmationDialog/ConfirmationDialog";
import { getIdValueFromObject } from "../../../../../services/functions/helpers/getIdValueFromObject";
import useAutoUpdateBucketData from "hooks/useAutoUpdateBucketData/useAutoUpdateBucketData";
import useDataMethods from "pages/ModulePage/hooks/useDataMethods";

type TviewModeItem = {
  _id: string;
  title: string;
  description: string;
};

const viewModeItems: TviewModeItem[] = [
  {
    _id: "3",
    title: "Hour",
    description: "Saat",
  },
  {
    _id: "4",
    title: "Day",
    description: "Gün",
  },
  {
    _id: "5",
    title: "Week",
    description: "Hafta",
  },
  {
    _id: "6",
    title: "Month",
    description: "Ay",
  },
  {
    _id: "7",
    title: "Year",
    description: "Yıl",
  },
];

export default function GanttChart({ currentPage }: { currentPage: TconfigPage }) {
  const instantStore = useInstantStore();

  const { handleOpen, handleChangeButton } = useDataMethods();

  const autoUpdateBuckets = useAutoUpdateBucketData();

  const [viewMode, setViewMode] = useState<TviewModeItem>(viewModeItems.find((i) => i._id === "5") || viewModeItems[0]);

  const [openConfirmationDialog, setOpenConfirmationDialog] = useState(false);

  const handleOpenConfirmationDialog = () => {
    setOpenConfirmationDialog(true);
  };

  const { content, TaskListColumn, TaskListHeader } = useTasks(
    currentPage,
    handleChangeButton,
    handleOpenConfirmationDialog,
    (item: obj) => handleOpen({ requiredData: { item } }),
    styles
  );

  return (
    <div className={styles["container"]}>
      <div className={styles["top-buttons"]}>
        {!currentPage.page_features?.includes("no_new_button") && (
          <MainButton icon={<MdAdd />} onClick={() => handleOpen()} width="60px" height="29px">
            Yeni
          </MainButton>
        )}
        <div className={styles["view-mode-selection"]}>
          <SelectField
            name="viewMode"
            label="Görünüm"
            items={viewModeItems}
            primary="description"
            onChange={(e) => setViewMode(e.target.value)}
            defaultItem={viewMode}
            disableClearable={true}
          />
        </div>
      </div>
      <div className={styles["gantt"]}>
        <Gantt
          tasks={content}
          locale="tr"
          viewMode={viewMode.title as ViewMode}
          TaskListHeader={TaskListHeader}
          TaskListTable={TaskListColumn}
          todayColor="rgba(0, 170, 0, 0.3)"
        />
      </div>
      <ConfirmationDialog
        open={openConfirmationDialog}
        onClose={() => setOpenConfirmationDialog(false)}
        onConfirm={() => {
          if (!instantStore.selectedRow) {
            console.log("selectedRow is undefined");
            return;
          }
          autoUpdateBuckets({ idsToDelete: [getIdValueFromObject(instantStore.selectedRow)] });
          instantStore.setSelectedRow(undefined);
        }}
        title="Emin misiniz?"
        subtitle={"Ünite Silinecektir."}
        type="warning"
      />
    </div>
  );
}
