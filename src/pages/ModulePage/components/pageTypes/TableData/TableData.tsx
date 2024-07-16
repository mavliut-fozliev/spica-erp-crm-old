import React, { useState } from "react";
import { useModulePageStore } from "../../../modulePageStore";
import { GridColDef, GridComparatorFn } from "@mui/x-data-grid";
import Table from "./components/Table/Table";
import styles from "./TableData.module.scss";
import { usePageStore } from "../../../../../store/pageStore";
import { TBucketProperty, TconfigPage, obj } from "../../../../../types/types";
import ToggleButtons from "../../../../../components/buttons/ToggleButtons/ToggleButtons";
import { AiOutlineCheck } from "react-icons/ai";
import SchemaIcon from "@mui/icons-material/Schema";
import MainButton from "../../../../../components/buttons/MainButton/MainButton";
import OrganizationalChart from "../../specialForPages/employees/OrganizationalChart/OrganizationalChart";
import SingleDataChanger from "../../../../../components/inputs/SingleDataChanger/SingleDataChanger";
import { TlocalPages } from "../../../types";
import { getNameValueFromObject } from "../../../../../services/functions/helpers/getNameValueFromObject";
import useAutocomplete from "../../../../../hooks/useAutocomplete/useAutocomplete";
import { symbol } from "../../../../../consts/propertySymbols";
import { convertShowTimeToNumber, convertTimeToShow } from "services/functions/helpers/dateHelpers";
import useGetStoredPageData from "hooks/useGetStoredPageData";
import useData from "services/api/useData";
import useAutoUpdateBucketData from "hooks/useAutoUpdateBucketData/useAutoUpdateBucketData";
import { formatNumberBasedOnProp } from "services/functions/helpers/numberHelpers";
import useDataMethods from "pages/ModulePage/hooks/useDataMethods";

export default function TableData({
  currentPage,
  properties,
  field_features_obj,
  pageSections,
  pageSectionLabels,
}: {
  currentPage: TconfigPage;
  properties: TBucketProperty[];
  field_features_obj: { [key: string]: any };
  pageSections: string[];
  pageSectionLabels: string[];
}) {
  const pageStore = usePageStore();

  const dataService = useData();

  const { rowForUpdate, setRowForUpdate } = useModulePageStore();

  const autocompleteFormData = useAutocomplete({ pageTitle: currentPage.title, dontSave: true });

  const { handleOpen, handleChangeButton } = useDataMethods();

  const { getPageDocuments } = useGetStoredPageData();
  const autoUpdateBuckets = useAutoUpdateBucketData();

  const [openOrganizationalChart, setOpenOrganizationalChart] = useState(false);

  const dateComparator: GridComparatorFn<string> = (v1: any, v2: any) => {
    const p1 = convertShowTimeToNumber(v1);
    const p2 = convertShowTimeToNumber(v2);
    return p1 - p2;
  };

  const defaultComparator: GridComparatorFn<string> = (v1: any, v2: any) => {
    let p1 = 0;
    let p2 = 0;

    if (typeof v1 === "string") {
      p1 = v1 ? v1.charCodeAt(0) : 0;
      p2 = v2 ? v2.charCodeAt(0) : 0;
    }
    if (typeof v1 === "number") {
      p1 = v1;
      p2 = v2;
    }
    if (typeof v1 === "boolean") {
      p1 = v1 ? 1 : 0;
      p2 = v2 ? 1 : 0;
    }

    if (typeof v1 === "undefined") {
      p1 = -1;
    }
    if (typeof v2 === "undefined") {
      p2 = -1;
    }
    return p1 - p2;
  };

  const columns: GridColDef[] =
    properties
      .filter((property) => !field_features_obj[property.title!]?.hide_from_table && !field_features_obj[property.title!]?.hide)
      .map((property) => {
        const localPages: TlocalPages = JSON.parse(localStorage.getItem("localPages") ?? "{}");
        const width =
          localPages[pageStore.page.title]?.field_features?.find((f) => f.field_name === property.title)?.width ?? field_features_obj[property.title!]?.width;

        const filterable = window.innerWidth >= 850;
        const sortable = window.innerWidth >= 850;
        const disableColumnMenu = window.innerWidth <= 850;

        const column: GridColDef = {
          field: `${property.title}`,
          headerName: `${property.description}`,
          description: `${property.description}`,
          width: width || 200,
          align: property.type === "boolean" ? "center" : undefined,
          filterable,
          sortable,
          disableColumnMenu,
          sortComparator: property.type === "date" ? dateComparator : defaultComparator,
        };

        function getRowValueOfTitle(params: any) {
          return params.row[property.title!];
        }

        switch (property.type) {
          case "relation":
            const getPrimaryText = (item: obj) => {
              if (!property.primary) {
                console.warn(`Property ${property.title} has no primary field for the item: ${JSON.stringify(item)}`);
                return "";
              }
              if (!item) {
                return "";
              }
              let text = item[property.primary!];
              if (item["status"] === "deleted") {
                text += "(silindi)";
              }
              return text;
            };

            const valueGetterMap: { [key: string]: any } = {
              onetoone: (params: any) => {
                const rowValue = getRowValueOfTitle(params);
                return getPrimaryText(rowValue);
              },
              onetomany: (params: any) => {
                const rowValue = getRowValueOfTitle(params);
                return rowValue ? rowValue.map((item: any) => getPrimaryText(item)).join(", ") : "";
              },
              default: () => "",
            };
            const relationType = property.relationType || "default";
            column.valueGetter = (params) => valueGetterMap[relationType]?.(params) || valueGetterMap.default();
            break;
          case "date":
            column.valueGetter = (params: any) => {
              const rowValue = getRowValueOfTitle(params);
              const row: obj = rowValue !== undefined ? params.row : autocompleteFormData(params.row);
              const timeValue = row[property.title!];

              const isCurrentPageAnnualLeave = currentPage.title === "AnnualLeave";
              const isRowLeaveTypeHourlyLeave = row.leave_type !== "SAATLİK İZİN";
              const isPropertyStartOrEnd = property.title === "start_time" || property.title === "end_time";

              if (isCurrentPageAnnualLeave && isRowLeaveTypeHourlyLeave && isPropertyStartOrEnd) {
                return "-";
              }

              let convertTimeToShowParams;
              const fieldFeature = field_features_obj[property.title!];

              if (fieldFeature?.date_only) {
                convertTimeToShowParams = {
                  dateOnly: true,
                };
              } else if (fieldFeature?.time_only) {
                convertTimeToShowParams = {
                  timeOnly: true,
                };
              }
              return convertTimeToShow(timeValue, convertTimeToShowParams);
            };
            break;
          case "number":
            column.valueGetter = (params: any) => {
              const rowValue = getRowValueOfTitle(params);

              let result = rowValue ?? autocompleteFormData(params.row)[property.title!] ?? "";
              const isRowValueAnObject = typeof rowValue === "object";
              if (isRowValueAnObject) {
                result = getNameValueFromObject(rowValue);
              }

              result = property.title !== "year" ? result?.toLocaleString("en-US") : result;

              const symbolValue = symbol[pageStore.page.title]?.[property.title!]?.value ?? "";
              return `${result} ${result ? symbolValue : ""}`;
            };
            break;
          case "string":
            column.valueGetter = (params: any) => {
              const rowValue = getRowValueOfTitle(params);

              let result = rowValue ?? autocompleteFormData(params.row)[property.title!] ?? "";

              const isRowValueAnObject = typeof rowValue === "object";
              if (isRowValueAnObject) {
                result = getNameValueFromObject(rowValue);
              }

              const symbolValue = symbol[pageStore.page.title]?.[property.title!]?.value ?? "";
              return `${result} ${result ? symbolValue : ""}`;
            };
            break;
          case "array":
            const isFile = property.items?.properties?.hasOwnProperty("storage");
            if (isFile) {
              column.renderCell = (params: any) => {
                const rowValue = getRowValueOfTitle(params);
                const hasFile = rowValue?.at(-1)?.deleted === false;

                return hasFile ? <AiOutlineCheck style={{ width: "18px", height: "18px" }} /> : <div></div>;
              };
            }
            column.valueGetter = (params: any) => {
              const rowValue = getRowValueOfTitle(params);

              let arrayLength = 0;
              const calculatedRow = autocompleteFormData(params.row);
              if (rowValue?.length > calculatedRow[property.title!]?.length) {
                arrayLength = rowValue?.length;
              } else {
                arrayLength = calculatedRow[property.title!]?.length;
              }

              return arrayLength ? `${arrayLength} madde` : "";
            };
            break;
          case "boolean":
            column.renderCell = (params: any) => {
              const rowValue = getRowValueOfTitle(params);

              return rowValue ? <AiOutlineCheck style={{ width: "18px", height: "18px" }} /> : "";
            };
            break;
          default:
            column.renderCell = (params: any) => {
              const rowValue = getRowValueOfTitle(params);
              return <div style={{ color: "red" }}>{JSON.stringify(rowValue)}</div>;
            };
        }

        return column;
      }) || [];

  const handleShowOrganizationalChart = (row: obj) => {
    setRowForUpdate(row);
    setOpenOrganizationalChart(true);
  };

  const jointSections = currentPage.section_features?.[pageStore.section]?.joint_sections || [];

  const currentSectionRows = getPageDocuments({ pageId: currentPage._id, section: pageStore.section });
  let jointSectionRows: obj[] = [];

  jointSections.forEach((section: string) => {
    const sectionRows = getPageDocuments({ pageId: currentPage._id, section });
    jointSectionRows = [...jointSectionRows, ...sectionRows];
  });

  const rows = [...currentSectionRows, ...jointSectionRows];

  const completedRows = rows.map((row) => autocompleteFormData(row));

  return (
    <>
      <div className={styles["table"]}>
        <Table
          rows={completedRows}
          columns={columns}
          handleChangeButton={handleChangeButton}
          deleteRow={(dataIds) => autoUpdateBuckets({ idsToDelete: dataIds })}
          handleOpen={() => handleOpen()}
          section={pageStore.section}
          currentPage={currentPage}
          properties={properties}
          extraButtons={
            <>
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
              {currentPage.title === "Locations" ? (
                <SingleDataChanger
                  label="Yakıt Litre Fiyatı"
                  defaultValue={pageStore.variables.find((v) => v.key === "fuel_price")?.value || 0}
                  onSave={(fuelLiterCost) => {
                    const oldFuelLiterCost = pageStore.variables.find((v) => v.key === "fuel_price")?.value;

                    if (fuelLiterCost === oldFuelLiterCost) return;

                    const projectVariablesBucketId = "6579aa86d71b6e002cfbb32d";
                    const fuelPriceId = "6579aac4d71b6e002cfbb429";

                    const updatedVariables = pageStore.variables.map((row) =>
                      row.key === "fuel_price" ? { ...row, value: fuelLiterCost.toString() || "0" } : row
                    );
                    pageStore.setVariables(updatedVariables);

                    dataService.patchBucketData(projectVariablesBucketId, fuelPriceId, {
                      value: fuelLiterCost.toString() || "0",
                    });
                  }}
                />
              ) : (
                <></>
              )}
            </>
          }
          additionalRowButtons={
            currentPage.title === "Employees"
              ? (row: any) => (
                  <MainButton variant="outlined" width="28px" height="28px" onClick={() => handleShowOrganizationalChart(row)}>
                    <SchemaIcon style={{ width: "14px", height: "14px" }} />
                  </MainButton>
                )
              : undefined
          }
        />
      </div>
      {currentPage.title === "Employees" && (
        <OrganizationalChart
          open={openOrganizationalChart}
          handleClose={() => {
            setOpenOrganizationalChart(false);
            setRowForUpdate({});
          }}
          selectedEmployee={rowForUpdate || {}}
          allEmployees={getPageDocuments({ pageId: "current", section: "exist" })}
        />
      )}
    </>
  );
}
