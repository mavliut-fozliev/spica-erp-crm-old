import React from "react";
import { DataGrid, GridColDef, trTR } from "@mui/x-data-grid";
import styles from "./Table.module.scss";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function Table({ rows, columns }: { rows: any[]; columns: GridColDef[] }) {
  const theme = createTheme(
    {
      palette: {
        primary: { main: "#1976d2" },
      },
    },
    trTR
  );

  return (
    <ThemeProvider theme={theme}>
      <DataGrid
        className={styles["grid"]}
        rows={rows || [{ id: "" }]}
        columns={columns}
        rowHeight={25}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection={false}
        sx={{
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
        }}
      />
    </ThemeProvider>
  );
}
