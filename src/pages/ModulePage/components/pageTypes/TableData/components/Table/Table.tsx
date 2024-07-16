import React, { ReactNode, useEffect, useRef, useState } from "react";
import { DataGrid, GridColDef, GridRowSelectionModel, trTR, GridToolbarExport, GridFooter } from "@mui/x-data-grid";
import styles from "./Table.module.scss";
import { usePageStore } from "../../../../../../../store/pageStore";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ChangeButton from "../../../../../../../components/buttons/ChangeButton/ChangeButton";
import MainButton from "../../../../../../../components/buttons/MainButton/MainButton";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdAdd } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { FcViewDetails } from "react-icons/fc";
import CustomColumnMenu from "./components/CustomColumnMenu/CustomColumnMenu";
import { TlocalPages } from "../../../../../types";
import { TBucketProperty, TDocument, TconfigPage, obj } from "../../../../../../../types/types";
import { useInstantStore } from "../../../../../../../store/instantStore";
import useAutocomplete from "../../../../../../../hooks/useAutocomplete/useAutocomplete";
import { symbol } from "../../../../../../../consts/propertySymbols";
import useGetColors from "./hooks/useGetColors";
import CustomFilter from "./components/CustomFilter/CustomFilter";
import { addCommasToNumber } from "services/functions/helpers/numberHelpers";

export type TDocumentWithId = TDocument & {
  id: number;
};

export default function Table({
  rows,
  columns,
  handleChangeButton,
  deleteRow,
  handleOpen,
  section = "exist",
  extraButtons,
  additionalRowButtons,
  currentPage,
  properties,
}: {
  rows: TDocument[];
  columns: GridColDef[];
  handleChangeButton: (row: any) => void;
  deleteRow: (dataIds: string[]) => any;
  handleOpen: () => void;
  section?: string;
  extraButtons?: any;
  additionalRowButtons?: (row: any) => ReactNode;
  currentPage: TconfigPage;
  properties: TBucketProperty[];
}) {
  const navigate = useNavigate();
  const location = useLocation();

  const pageStore = usePageStore();
  const instantStore = useInstantStore();

  const [rowSelectionModel, setRowSelectionModel] = useState<GridRowSelectionModel>([]);

  const detailsButton = false;

  const rowsWithId: TDocumentWithId[] = rows.map((row, index) => ({ ...row, id: rows.length - index }));

  const getColors = useGetColors({ rows: rowsWithId });

  const [filteredRows, setFilteredRows] = useState(rowsWithId);

  const pageTitle = currentPage.title;
  const correctedRows: obj = {
    "Offers": [...filteredRows].reverse(),
    "Employees": [...filteredRows].reverse(),
    "All": filteredRows,
  };
  const resultRows = correctedRows[pageTitle || "All"] ?? correctedRows["All"];

  const colorsObject = getColors();

  const aggregationColumnNames: obj = {
    "ProgressPayments": ["total_payed", "finality"],
  };

  const autocompleteFormData = useAutocomplete({ pageTitle: currentPage.title, dontSave: true });

  const columnsWithAggregationValue = columns.map((column) => {
    if (!aggregationColumnNames[pageStore.page.title]?.includes(column.field)) {
      return column;
    }

    const getValue = (row: { [key: string]: any }) => {
      return typeof row[column.field] === "number" ? Number(row[column.field]) : 0;
    };

    const calculatedRows = filteredRows.map((row) => autocompleteFormData(row));
    const sum = calculatedRows.reduce((acc: number, curr: { [key: string]: any }) => getValue(curr) + acc, 0);
    return { ...column, headerName: column.headerName + ` (${addCommasToNumber(sum)} ${symbol[pageStore.page.title]?.[column.field]?.value})` };
  });

  const idColumn: GridColDef = {
    field: "id",
    headerName: "No",
    align: "center",
    disableColumnMenu: true,
    sortable: window.innerWidth >= 850,
    width: 50,
  };

  const extendedColumns: GridColDef[] = [
    // idColumn,
    {
      field: "changeButton",
      headerName: "\u00a0",
      align: "center",
      disableColumnMenu: true,
      filterable: false,
      sortable: false,
      width: additionalRowButtons ? (detailsButton ? 120 : 90) : detailsButton ? 90 : 50,
      renderCell: (params) => (
        <div style={{ display: "flex" }}>
          {detailsButton && (
            <MainButton
              variant="outlined"
              color="secondary"
              icon={<FcViewDetails style={{ width: "22px", height: "22px" }} />}
              onClick={(e: any) => {
                handleDetailsClick(e, params.row);
              }}
              width="28px"
              height="28px"
            ></MainButton>
          )}
          <ChangeButton
            onClick={(e: any) => {
              e.stopPropagation();
              handleChangeButton(params.row);
            }}
          />
          {additionalRowButtons ? additionalRowButtons(params.row) : <></>}
        </div>
      ),
    },

    ...(columnsWithAggregationValue || []),
  ];

  const handleDetailsClick = (e: any, row: { id: string }) => {
    pageStore.setClickedRow(row);
    navigate(`${location.pathname}/${Number(row.id)}`);
  };

  async function handleRemove() {
    for (let selectedRow of rowSelectionModel) {
      const dataId = filteredRows.find((row) => row.id === Number(selectedRow))?._id;
      if (dataId) {
        deleteRow([dataId]);
      }
    }
    setRowSelectionModel([]);
  }

  const theme = createTheme(
    {
      palette: {
        primary: { main: "#1976d2" },
      },
    },
    trTR
  );

  const changingElement = useRef<HTMLDivElement | null>(null);
  const currentSvgElement = useRef<SVGElement | null>(null);

  let newWidth = 50;

  const handleMouseMove = (event: any) => {
    if (changingElement.current) {
      const width = event.clientX - changingElement.current.getBoundingClientRect().left;
      newWidth = width < 50 ? 50 : width > 1000 ? 1000 : width;

      const fieldName = changingElement.current.getAttribute("data-field");
      const columnElements = document.querySelectorAll(`[data-field="${fieldName}"]`);
      columnElements.forEach((elem) => {
        elem.setAttribute("style", `min-width: ${newWidth}px; max-width: ${newWidth}px; width: ${newWidth}px`);
      });
    }
  };

  const bucketIdRef = useRef<string>(currentPage._id);

  bucketIdRef.current = currentPage._id;

  const getLocalPages = () => {
    let localPages: TlocalPages = {};
    if (localStorage.getItem("localPages")) {
      localPages = JSON.parse(localStorage.getItem("localPages") ?? "{}");
    } else {
      pageStore.config.Pages.forEach((page) => {
        localPages[page.title] = { field_features: page.field_features };
      });
      localStorage.setItem("localPages", JSON.stringify(localPages));
    }
    return localPages;
  };

  const handleStopColumnWidthResize = () => {
    if (currentSvgElement.current) {
      currentSvgElement.current.style.fill = "rgb(224, 224, 224)";

      const fieldName = changingElement.current?.getAttribute("data-field");
      currentSvgElement.current = null;

      const localPages = getLocalPages();

      if (localPages[bucketIdRef.current]) {
        const oldFieldFeatures = localPages[bucketIdRef.current]?.field_features;
        const newFieldFeatures = oldFieldFeatures.map((f) => (f.field_name === fieldName ? { ...f, width: newWidth } : f));

        localPages[bucketIdRef.current] = {
          field_features: newFieldFeatures,
        };
      }

      localStorage.setItem("localPages", JSON.stringify(localPages));

      changingElement.current = null;
      document.removeEventListener("mousemove", handleMouseMove);
    }
  };

  const findParentWithAttribute = (event: any): HTMLDivElement => {
    let element = event.currentTarget;
    while (element && !element.hasAttribute("data-field")) {
      element = element.parentElement;
    }
    return element && element.hasAttribute("data-field") ? element : null;
  };

  const handleColumnWidthResize = (event: any) => {
    const parent = findParentWithAttribute(event);

    if (parent.getAttribute("data-field") === "details" || parent.getAttribute("data-field") === "id") return;
    changingElement.current = parent;

    document.addEventListener("mousemove", handleMouseMove);
    currentSvgElement.current = event.currentTarget;
    event.currentTarget.style.fill = "#333";
  };

  const headerDiv = document.getElementsByClassName("css-yrdy0g-MuiDataGrid-columnHeaderRow")[0] || document.getElementsByClassName("css-k008qs")[0];

  const sectionLabel = pageStore.config.Pages.find((p) => p.title === pageStore.page.title)?.section_features?.[section]?.label;

  useEffect(() => {
    setRowSelectionModel([]);
  }, [location.pathname, pageStore.section]);

  useEffect(() => {
    const selectedRow = filteredRows.find((row) => row.id === rowSelectionModel[0]);
    instantStore.setSelectedRow(selectedRow);
  }, [rowSelectionModel]);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const svgElements = document.querySelectorAll('[data-testid="SeparatorIcon"]');

      svgElements.forEach((element) => {
        element.removeEventListener("mousedown", handleColumnWidthResize);

        const parent = findParentWithAttribute({ currentTarget: element });

        element.setAttribute("viewBox", "0 0 10 24");
        element.setAttribute("style", "width: 10px; height: 24px");
        element.firstElementChild?.setAttribute("d", ["1", "2"].includes(`${parent.getAttribute("aria-colindex")}`) ? "M20 19V5h2v14z" : "M2 19V5h2v14z");
      });

      svgElements.forEach((element) => {
        element.addEventListener("mousedown", handleColumnWidthResize);
      });
    });

    const observerConfig = { childList: true, subtree: true };

    if (headerDiv) observer.observe(headerDiv, observerConfig);

    return () => {
      observer.disconnect();
    };
  }, [headerDiv]);

  useEffect(() => {
    const svgElements = document.querySelectorAll('[data-testid="SeparatorIcon"]');

    document.addEventListener("mouseup", handleStopColumnWidthResize);

    svgElements.forEach((element) => {
      element.addEventListener("mousedown", handleColumnWidthResize);

      const parent = findParentWithAttribute({ currentTarget: element });

      element.setAttribute("viewBox", "0 0 10 24");
      element.setAttribute("style", "width: 10px; height: 24px");
      element.firstElementChild?.setAttribute("d", ["1", "2"].includes(`${parent.getAttribute("aria-colindex")}`) ? "M20 19V5h2v14z" : "M2 19V5h2v14z");
    });

    return () => {
      document.removeEventListener("mouseup", handleStopColumnWidthResize);

      svgElements.forEach((element) => {
        element.removeEventListener("mousedown", handleColumnWidthResize);
      });
    };
  }, [headerDiv]);

  useEffect(() => {
    setFilteredRows(rowsWithId);
  }, [pageStore.page._id]);

  return (
    <>
      <div className={styles["all-buttons"]}>
        <div className={styles["buttons"]}>
          {section === "exist" && !currentPage.page_features?.includes("no_new_button") && (
            <MainButton onClick={handleOpen} icon={<MdAdd />} width={window.innerWidth <= 850 ? "30px" : "60px"} height="30px">
              {window.innerWidth <= 850 ? "" : "Yeni"}
            </MainButton>
          )}
          {rowSelectionModel.length !== 0 && (
            <>
              {!currentPage.page_features?.includes("no_remove_button") && (
                <MainButton
                  variant="outlined"
                  color="danger"
                  onClick={handleRemove}
                  icon={<RiDeleteBinLine fontSize="large" />}
                  width="30px"
                  height="30px"
                ></MainButton>
              )}
            </>
          )}
        </div>
        <div>{extraButtons}</div>
      </div>

      <CustomFilter
        columnNames={extendedColumns
          .filter((column) => column.field !== "changeButton")
          .map((column) => ({ _id: column.field, label: column.headerName?.split("(")[0].trim() ?? "" }))}
        rowsWithId={rowsWithId}
        setFilteredRows={setFilteredRows}
        properties={properties}
      />

      <ThemeProvider theme={theme}>
        <DataGrid
          className={styles["grid"]}
          rows={resultRows}
          columns={extendedColumns}
          rowHeight={40}
          density="compact"
          // getRowHeight={() => "auto"}
          onRowDoubleClick={(e: any) => {
            handleDetailsClick(e, e.row);
          }}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 100 },
            },
            // sorting: {
            //   sortModel: pageStore.pageBuckets[bucketId].title === "ProgressPayments" ? [{ field: "assembly_start_date", sort: "asc" }] : undefined,
            // },
          }}
          pageSizeOptions={[15, 30, 50, 100]}
          onRowSelectionModelChange={(newRowSelectionModel) => {
            rowSelectionModel[0] === newRowSelectionModel[0] ? setRowSelectionModel([]) : setRowSelectionModel(newRowSelectionModel);
          }}
          rowSelectionModel={rowSelectionModel}
          checkboxSelection={false}
          slots={{
            columnMenu: (props) => CustomColumnMenu(props, currentPage._id),
            footer: () => (
              <div className={styles["footer"]}>
                <GridToolbarExport
                  size="small"
                  csvOptions={{
                    fileName: `${pageStore.page.description}-${sectionLabel || "genel"}`,
                    delimiter: ";",
                    utf8WithBom: true,
                  }}
                />
                <GridFooter />
              </div>
            ),
          }}
          sx={{
            ...colorsObject,
            "&, [class^=MuiDataGrid]": { border: "none" },
            "& .MuiDataGrid-columnHeaderTitle": {
              fontSize: "0.85rem",
            },
            "& .MuiDataGrid-row": {
              fontSize: "0.8rem",
            },
            "& .MuiCheckbox-root svg": {
              width: 18,
              height: 18,
              backgroundColor: "transparent",
              color: "rgb(132, 90, 223)",
            },
            "& .MuiDataGrid-columnHeaderCheckbox .MuiDataGrid-columnHeaderTitleContainer": {
              display: "none",
            },
            "& .MuiDataGrid-row--dynamicHeight": {
              margin: "2px 0",
              minHeight: "",
            },
            "& .Mui-selected": {
              "& > *": {
                background: "rgba(129, 223, 255, 0.25)",
              },
            },
            "& .additional--header": {
              backgroundColor: "rgba(100, 100, 100, 0.2)",
            },
            "& .button--header": {
              color: "rgb(150, 50, 50)",
            },
          }}
        />
      </ThemeProvider>
    </>
  );
}
