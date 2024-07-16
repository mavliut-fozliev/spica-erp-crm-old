import React, { useContext, useEffect, useReducer, useState } from "react";
import { usePageStore } from "../../../../../../../store/pageStore";
import { useModulePageStore } from "../../../../../modulePageStore";
import { pageIds } from "../../../../../../../consts/config/pages/pages";
import dayjs from "dayjs";
import styles from "./FieldInspectionsPage.module.scss";
import Accordion from "../../../../../../../components/Accordion/Accordion";
import { getIdValueFromObject } from "../../../../../../../services/functions/helpers/getIdValueFromObject";
import AddIcon from "@mui/icons-material/Add";
import CircleIcon from "@mui/icons-material/Circle";
import { TDocument, obj } from "../../../../../../../types/types";
import { convertTimeToShow } from "services/functions/helpers/dateHelpers";
import useGetStoredPageData from "hooks/useGetStoredPageData";
import useDataMethods from "pages/ModulePage/hooks/useDataMethods";

type TFilterState = {
  passed: boolean;
  empty: boolean;
  successClose: boolean;
  successFar: boolean;
};

type TFilterAction = {
  type: "TOGGLE_PASSED" | "TOGGLE_EMPTY" | "TOGGLE_SUCCESS_CLOSE" | "TOGGLE_SUCCESS_FAR";
};

export default function FieldInspectionsPage() {
  const pageStore = usePageStore();

  const modulePageStore = useModulePageStore();

  const { handleChangeButton } = useDataMethods();

  const { getPageDocuments, getPageDocument } = useGetStoredPageData();

  const [expandedIndex, setExpandedIndex] = useState(-1);

  const getRowValues = (row: obj) => {
    const lastInform = row.information?.at(-1);
    const today = dayjs().valueOf();
    const lastInformDay = dayjs(lastInform?.next_date).valueOf();

    const isLastRow = row.information?.indexOf(lastInform) === row.information?.length - 1;
    const passed = today > lastInformDay && isLastRow;

    const differenceDays = Math.ceil((lastInformDay - today) / 1000 / 3600 / 24);
    return { passed, empty: !lastInform, differenceDays };
  };

  const rows = getPageDocuments({ pageId: pageIds.FieldInspections, section: pageStore.section });
  const passedRows = rows.filter((row) => !!getRowValues(row).passed);
  const emptyRows = rows.filter((row) => !!getRowValues(row).empty);
  const successCloseRows = rows.filter((row) => !getRowValues(row).passed && !getRowValues(row).empty && getRowValues(row).differenceDays <= 7);
  const successFarRows = rows.filter((row) => !getRowValues(row).passed && !getRowValues(row).empty && getRowValues(row).differenceDays > 7);

  const sortByNextDate = (a: obj, b: obj) => {
    const aDate = a.information?.at(-1)?.next_date;
    const aValue = dayjs(aDate).valueOf();
    const bDate = b.information?.at(-1)?.next_date;
    const bValue = dayjs(bDate).valueOf();
    return aValue - bValue;
  };

  const sortedPassedRows = passedRows.sort(sortByNextDate);

  const sortedEmptyRows = emptyRows.sort((a, b) => {
    const aValue = dayjs(a.created_date).valueOf();
    const bValue = dayjs(b.created_date).valueOf();
    return aValue - bValue;
  });

  const sortedSuccessCloseRows = successCloseRows.sort(sortByNextDate);

  const sortedSuccessFarRows = successFarRows.sort(sortByNextDate);

  const [correctOrderRows, setCorrectOrderRows] = useState<obj[]>([
    ...sortedPassedRows,
    ...sortedEmptyRows,
    ...sortedSuccessCloseRows,
    ...sortedSuccessFarRows,
  ]);

  const filterReducer = (state: TFilterState, action: TFilterAction) => {
    switch (action.type) {
      case "TOGGLE_PASSED":
        return { ...state, passed: !state.passed };
      case "TOGGLE_EMPTY":
        return { ...state, empty: !state.empty };
      case "TOGGLE_SUCCESS_CLOSE":
        return { ...state, successClose: !state.successClose };
      case "TOGGLE_SUCCESS_FAR":
        return { ...state, successFar: !state.successFar };
      default:
        return state;
    }
  };

  const [filterProps, dispatch] = useReducer(filterReducer, {
    passed: true,
    empty: true,
    successClose: true,
    successFar: true,
  });

  const onAcordionClick = (index: number) => (index === expandedIndex ? setExpandedIndex(-1) : setExpandedIndex(index));

  const handleOpenFormModal = (row: obj, innerIndex: number) => {
    modulePageStore.setSelectedArrayIndex(innerIndex);
    handleChangeButton(row);
  };

  const onAddButtonClick = (row: obj) => {
    modulePageStore.setSelectedArrayIndex(row.information?.length || 0);
    const newRow = {
      ...row,
      information: [...(row.information || []), {}],
    };
    handleChangeButton(newRow);
  };

  function onFilterPropsChanged() {
    const filterMapping: Record<keyof TFilterState, TDocument[]> = {
      passed: sortedPassedRows,
      empty: sortedEmptyRows,
      successClose: sortedSuccessCloseRows,
      successFar: sortedSuccessFarRows,
    };

    const newRows = Object.entries(filterProps)
      .filter(([key, value]) => !!value)
      .flatMap(([key]) => filterMapping[key as keyof TFilterState]);

    setCorrectOrderRows(newRows);
  }

  useEffect(onFilterPropsChanged, [rows, filterProps]);

  const filterElement = (
    filterProp: boolean,
    dispatchType: TFilterAction["type"],
    iconType: "passed" | "empty" | "success-close" | "success-far",
    text: string
  ) => {
    return (
      <div className={styles["description-box-item"]}>
        <div
          className={styles[filterProp ? "description-box-icon-container-checked" : "description-box-icon-container"]}
          onClick={() => dispatch({ type: dispatchType })}
        >
          <CircleIcon className={`${styles["description-box-icon"]} ${styles[`description-box-icon-${iconType}`]}`} />
        </div>
        <p className={styles["description-box-text"]}>- {text}</p>
      </div>
    );
  };

  return (
    <div style={{ height: "100%" }}>
      <div className={styles["description-box"]}>
        <div>
          {filterElement(filterProps.passed, "TOGGLE_PASSED", "passed", "Kontrol Tarihi Geçti")}
          {filterElement(filterProps.empty, "TOGGLE_EMPTY", "empty", "Kontrol Formu Eksik")}
        </div>
        <div>
          {filterElement(filterProps.successClose, "TOGGLE_SUCCESS_CLOSE", "success-close", "Kontrole 1 Hafta veya Daha Az Vakit Kaldı")}
          {filterElement(filterProps.successFar, "TOGGLE_SUCCESS_FAR", "success-far", "Kontrole 1 Haftadan Fazla Vakit Var")}
        </div>
        <div className={styles["next-control-title"]}>Bir Sonraki Kontrole Kalan Süre</div>
      </div>
      <div style={{ overflowY: "auto", height: "94%" }}>
        {correctOrderRows.map((row, index) => {
          const project = getPageDocument({ pageId: pageIds.Projects, documentId: getIdValueFromObject(row.unit?.project) });
          return (
            <div className={styles["row"]} key={index.toString()}>
              <Accordion
                expanded={index === expandedIndex}
                onChange={() => onAcordionClick(index)}
                color={
                  getRowValues(row).passed ? "danger" : getRowValues(row).empty ? "disabled" : getRowValues(row).differenceDays <= 7 ? "warning" : "success"
                }
                title={
                  <>
                    <div className={styles["unit-title"]}>{project?.name}</div>
                    <div className={styles["unit-title"]}>{row.unit?.serial_number}</div>
                    <div className={styles["next-control-days"]}>{getRowValues(row).differenceDays} gün</div>
                  </>
                }
                details={
                  <>
                    <div className={styles["form-titles"]}>
                      <div className={styles["form-titles-item"]} style={{ width: "20px" }}></div>
                      <h5 className={styles["form-titles-item"]}>Tarih</h5>
                      <h5 className={styles["form-titles-item"]}>Bir Sonraki Kontrol Tarihi</h5>
                      <h5 className={styles["form-titles-item"]}>Mail Gönderen</h5>
                    </div>
                    {row.information?.map((inform: any, innerIndex: number) => {
                      return (
                        <div className={styles["form-values"]} key={innerIndex.toString()}>
                          <div className={styles["inform"]} onClick={() => handleOpenFormModal(row, innerIndex)}>
                            <div className={styles["inform-item"]} style={{ width: "20px" }}>{`\u00a0${innerIndex + 1})\u00a0\u00a0\u00a0`}</div>
                            <div className={styles["inform-item"]}>{convertTimeToShow(inform.date, { dateFirst: true, dateOnly: true })}</div>
                            <div className={styles["inform-item"]}>{convertTimeToShow(inform.next_date, { dateFirst: true, dateOnly: true })}</div>
                            <div className={styles["inform-item"]}>{inform.sender_identifier}</div>
                          </div>
                        </div>
                      );
                    })}
                    <div className={styles["add-button"]} onClick={() => onAddButtonClick(row)}>
                      <AddIcon style={{ width: "100%", height: "100%" }} />
                    </div>
                  </>
                }
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
